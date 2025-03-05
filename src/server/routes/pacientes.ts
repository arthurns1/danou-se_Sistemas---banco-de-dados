import { Router } from "express";
import crud_clinica from "../objects/clinica";
const pacientes = Router();

pacientes.get(
  "/get_pacientes",
  crud_clinica.retornar_pacientes.bind(crud_clinica)
);

pacientes.get(
  "/get_paciente/:cpf",
  crud_clinica.retornar_paciente.bind(crud_clinica)
);

pacientes.post(
  "/create_paciente",
  crud_clinica.cadastrar_paciente.bind(crud_clinica)
);

pacientes.put(
  "/edit_paciente/:cpf",
  crud_clinica.editar_paciente.bind(crud_clinica)
);

pacientes.delete(
  "/delete_paciente/:cpf",
  crud_clinica.remover_paciente.bind(crud_clinica)
);

export default pacientes;
