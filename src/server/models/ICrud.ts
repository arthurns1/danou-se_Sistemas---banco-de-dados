import { Request, Response } from "express";

abstract class ICrud {
  public static cadastrar_paciente(req: Request, res: Response): void{};
  public static cadastrar_funcionario(req: Request, res: Response): void{};
  public static editar_paciente(req: Request, res: Response): void{};
  public static editar_funcionario(req: Request, res: Response): void{};
  public static retornar_paciente(req: Request, res: Response): void{};
  public static retornar_funcionario(req: Request, res: Response): void{};
  public static retornar_pacientes(req: Request, res: Response): void{};
  public static retornar_funcionarios(req: Request, res: Response): void{};
  public static remover_paciente(req: Request, res: Response): void{};
  public static remover_funcionario(req: Request, res: Response): void{};
}

export default ICrud;
