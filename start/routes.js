"use strict";
const Database = use("Database");

const Route = use("Route");

Route.get("/programa", "ProgramaController.index");
Route.get("/cardapio", "CardapioController.index");
Route.get("/equipes", "EquipeController.index");
Route.get("/gincana/:equipe", "GincanaController.show");
Route.get("/correntista", "CorrentistaController.index");
Route.get("/timeline", "TimelineController.index");
Route.post("/timeline/:id", "TimelineController.store");


