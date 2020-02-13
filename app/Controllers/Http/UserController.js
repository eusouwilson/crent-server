"use strict";
const User = use("App/Models/User");
const Hash = use("Hash");

class UserController {

  async login({ auth, request, response }) {
    const { cpf, password } = request.all();

    try {
      if (await auth.attempt(cpf, password)) {
        let user = await User.findBy("email", cpf);
        return response.json({ user: user });
      }
    } catch (e) {
      return response.json({ message: "CPF ou senha incorreto" });
    }
    //const user = request.all();
    const user = await auth.attempt(cpf, password);

    return user;
  }

  async show({ auth, params }) {

    if (auth.user.id !== Number(params.id)) {
      return "You cannot see someone else's profile";
    }
    return auth.user;
  }

  async update({ request, response, auth: { user } }) {
    const data = request.only(["password", "password_old", "nome"]);

    if (data.password_old) {
      const isSame = await Hash.verify(data.password_old, user.password);

      if (!isSame) {
        return response.status(401).send({
          error: {
            message: "A senha antiga não é válida"
          }
        });
      }

      if (!data.password) {
        return response.status(401).send({
          error: {
            message: "Você não informou a nova senha"
          }
        });
      }

      delete data.password_old;
    }

    if (!data.password) {
      delete data.password;
    }

    user.merge(data);

    await user.save();

    return user;
  }
}

module.exports = UserController;
