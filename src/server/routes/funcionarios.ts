import { Router } from "express";
import Crud_Clinica from "../models/Crud_Clinica";
import checar_funcao from "../middlewares/services/checar_funcao";

const funcionarios = Router();

funcionarios.get(
  "/get_funcionarios",
  Crud_Clinica.retornar_funcionarios
);

funcionarios.get(
  "/get_funcionario/:id",
  Crud_Clinica.retornar_funcionario
);

funcionarios.post(
  "/create_funcionario",
  Crud_Clinica.cadastrar_funcionario
);

funcionarios.put(
  "/edit_funcionario/:id",
  Crud_Clinica.editar_funcionario
);

funcionarios.delete(
  "/delete_funcionario/:id",
  Crud_Clinica.remover_funcionario
);

funcionarios.get(
  "/get_registros",checar_funcao(["Dentista","Gerente"]),
  Crud_Clinica.retornar_registros
);

funcionarios.post(
  "/create_registro",checar_funcao(["Dentista,Gerente"]),
  Crud_Clinica.registrar_consulta
);

export default funcionarios;
