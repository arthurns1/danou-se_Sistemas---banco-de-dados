import { NextFunction, Request, Response } from "express";
import Jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const SECRET = process.env.SECRET ?? "Trombone";

interface Funcionario{
  usuario:{
    nome:string,
    cpf:string,
    telefone:string,
    rua: string,
    cidade: string,
    estado: string,
    salario: string,
    funcao: string,
    login: string,
    senha:string
  }
}


function checar_funcao(funcao:string[]){
  return (req:Request, res: Response, next: NextFunction) => {
    try{
    const token = req.headers.authorization ?? "";  
    const funcionario = Jwt.verify(token, SECRET) as Funcionario
    
    if( !( funcao.indexOf(funcionario.usuario.funcao) > -1) ){
      res.json({message : "Acesso negado"}).status(400)
      return
    }
    }catch(err){
      res.json(err).status(500);
      return
    }
    next();
    
  }    
}

export default checar_funcao;
