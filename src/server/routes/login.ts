import { Router } from "express";
import crud_clinica from "../objects/clinica";

const login = Router();

login.get("/login", crud_clinica.login.bind(crud_clinica));

export default login;
