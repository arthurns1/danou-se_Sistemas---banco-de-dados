import { Request, Response } from "express";
import Funcionario from "./Funcionario";
import ICrud from "./ICrud";
import Paciente from "./Paciente";
import { sign } from "jsonwebtoken";
import dotenv from "dotenv";
import db from "../db/sql";
import bcrypt from "bcrypt";

dotenv.config();

class Crud_Clinica implements ICrud{

  public static async cadastrar_paciente(req: Request, res: Response) {
    try{
    const nome:string = req.body.nome
    const cpf:string = req.body.cpf
    const telefone:string = req.body.telefone
    const rua:string = req.body.rua
    const cidade:string = req.body.cidade
    const estado:string = req.body.estado
    const indicacao:string = req.body.indicacao
    const login:string = req.body.login
    const senha:string = req.body.senha
    
    const salt = await bcrypt.genSalt(10);

    const senhaHash = await  bcrypt.hashSync(senha, salt) 
    await db.query(`INSERT INTO pacientes (nome, cpf, telefone, rua, cidade, estado, indicacao, login, senha) VALUES ('${nome}','${cpf}','${telefone}','${rua}','${cidade}','${estado}','${indicacao}','${login}','${senhaHash}')`)

    res.json({ message: "Usuário criado com sucesso!" }).status(201);

    }catch(err){
      res.json({message: "Houve um erro ao cadastrar o paciente",erro: err}).status(500);
    }
  }

  public static async cadastrar_funcionario(req: Request, res: Response) {
    try{
      const nome:string = req.body.nome
      const cpf:string = req.body.cpf
      const telefone:string = req.body.telefone
      const rua:string = req.body.rua
      const cidade:string = req.body.cidade
      const estado:string = req.body.estado
      const funcao:string = req.body.funcao
      const salario:number = req.body.salario
      const login:string = req.body.login
      const senha:string = req.body.senha
      
      const salt = await bcrypt.genSalt(10);
  
      const senhaHash = await  bcrypt.hashSync(senha, salt) 
      await db.query(`INSERT INTO funcionarios (nome, cpf, telefone, rua, cidade, estado, salario, funcao, login, senha) VALUES ('${nome}','${cpf}','${telefone}','${rua}','${cidade}','${estado}','${salario}',${funcao},'${login}','${senhaHash}')`)
  
      res.json({ message: "Usuário criado com sucesso!" }).status(201);
    }catch(err){
      res.json({message: "Houve um erro ao cadastrar o paciente", erro: err})
    }
  }

  public static async retornar_funcionario(req: Request, res: Response) {
    try{
      const id = req.params.id;

      const funcionario = await db.query(`SELECT * FROM funcionarios WHERE id = ${id}`);

      res.json(funcionario).status(200);
    }catch(err){
      res.json({message: "Houve um erro interno ao procurar funcionario", erro: err})
    }
  }

  public static async retornar_paciente(req: Request, res: Response) {
    try{
      const id = req.params.id;

      const paciente = await db.query(`SELECT * FROM pacientes WHERE id = ${id}`);

      res.json(paciente).status(200);
      return
    }catch(err){
      res.json({message: "Houve um erro interno ao procurar paciente", erro: err})
    }
  }

  public static async editar_paciente(req: Request, res: Response){
    try{
      const nome:string = req.body.nome
      const cpf:string = req.body.cpf
      const telefone:string = req.body.telefone
      const rua:string = req.body.rua
      const cidade:string = req.body.cidade
      const estado:string = req.body.estado
      const indicacao:string = req.body.indicacao
      const login:string = req.body.login
      const senha:string = req.body.senha
      const id = req.body.id

      const salt = await bcrypt.genSalt(10)      
      const senhaHash:string = await bcrypt.hashSync(req.body.senha, salt)

      await db.query(`UPDATE pacientes SET nome = '${nome}', cpf = '${cpf}', telefone = '${telefone}', rua = '${rua}', cidade = '${cidade}', estado = ${estado}, indicacao = ${indicacao}, login = ${login}, senha = ${senhaHash} WHERE id = '${id}' LIMIT 1`)
      
      res.json({message: "Paciente editado com sucesso!"}).status(200)
    }catch(err){
      res.json({message: "Houve um erro interno ao editar o paciente!"}).status(500)
    }
  }

  public static async editar_funcionario(req: Request, res: Response){
    try{
      const nome:string = req.body.nome
      const cpf:string = req.body.cpf
      const telefone:string = req.body.telefone
      const rua:string = req.body.rua
      const cidade:string = req.body.cidade
      const estado:string = req.body.estado
      const funcao:string = req.body.funcao
      const salario:number = req.body.salario
      const login:string = req.body.login
      const senha:string = req.body.senha

      const id = req.body.id

      const salt = await bcrypt.genSalt(10)      
      const senhaHash:string = await bcrypt.hashSync(req.body.senha, salt)

      await db.query(`UPDATE funcionarios SET nome = '${nome}', cpf = '${cpf}', telefone = '${telefone}', rua = '${rua}', cidade = '${cidade}', estado = ${estado}, salario = ${salario}, funcao = ${funcao}, login = ${login}, senha = ${senhaHash} WHERE id = '${id}' LIMIT 1`)
      
      res.json({message: "Funcionário editado com sucesso!"}).status(200)
    }catch(err){
      res.json({message: "Houve um erro interno ao editar o funcionário!"}).status(500)
    }
  }

  public static async retornar_pacientes(req: Request, res: Response) {
    try{
      const pacientes = await db.query("SELECT * FROM pacientes");

      res.json(pacientes).status(200)
    }catch(err){
      res.json({message: "Houve um erro interno ao buscar pacientes", erro:err})
    }
  }

  public static async retornar_funcionarios(req: Request, res: Response) {
    try{
      const funcionarios = await db.query("SELECT * FROM funcionarios");

      res.json(funcionarios).status(200)
    }catch(err){
      res.json({message: "Houve um erro interno ao buscar funcionarios", erro:err})
    }
  }

  public static async remover_paciente(req: Request, res: Response) {
    try{
      const id = req.body.id;

      await db.query(`DELETE FROM pacientes WHERE id = ${id}`)

      res.json({message:"Paciente deletado com sucesso"})
    }catch(err){
      res.json({message:"Houve um erro interno ao remover o paciente"})
    }
  }

  public static async remover_funcionario(req: Request, res: Response) {
    try{
      const id = req.body.id;

      await db.query(`DELETE FROM funcionarios WHERE id = ${id}`)

      res.json({message:"Funcionário deletado com sucesso"})
    }catch(err){
      res.json({message:"Houve um erro interno ao remover o funcionário"})
    }
  }

  public static async registrar_consulta(req: Request, res: Response) {
    try{
      const responsavel: Funcionario = req.body.responsavel
      const paciente: Paciente = req.body.paciente
      const dados: string = req.body.dados
      const data: string = new Date().toISOString();

      await db.query(`INSERT INTO registros (responsavel, paciente, dados, data) VALUES (${responsavel}, ${paciente}, ${dados}, ${data})`);

      res.json({message: "Sucesso ao criar o registro!"}).status(201)
    }catch(err){
      res.json({message: "Houve um erro interno ao criar registro!",erro: err})
    }
  }

  public static async retornar_registros(req: Request, res: Response) {
    try{
      const registros = await db.query("SELECT * FROM registros");

      res.json(registros).status(200)
    }catch(err){
      res.json({message: "Houve um erro interno ao buscar registros!", erro:err})
    }
  }

  public static async retornar_registro(req: Request, res: Response) {
    try{
      const id = req.params.id;

      const paciente = await db.query(`SELECT * FROM pacientes WHERE id = ${id}`);

      res.json(paciente).status(200);
      return
    }catch(err){
      res.json({message: "Houve um erro interno ao procurar paciente", erro: err})
    }
  }

  public static login(req: Request, res: Response) {
    const login = req.body.login;

    if(!login){
      res.json({message: "Login inválido!"});
      return
    }

    const usuario = db.query(`SELECT * FROM pacientes, funcionarios WHERE login = ${login}` )

    if (!usuario) {
      res.json({ message: "Usuário não encontrado" });
      return;
    }

    // if (usuario.get_senha() !== req.body.senha) {
    //   res.json({ message: "Senha incorreta!" }).status(200);
    // }

    const token = sign({ usuario }, process.env.SECRET ?? "secret", {
      expiresIn: "1h",
    });

    res.json({ token }).status(200);
  }
}

export default Crud_Clinica;
