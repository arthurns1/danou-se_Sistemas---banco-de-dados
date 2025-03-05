import Funcionario from "./Funcionario";
import Paciente from "./Paciente";

class Registro {
  private data: string = new Date().toISOString();
  constructor(
    private responsavel: Funcionario,
    private paciente: Paciente,
    private dados: string
  ) {}

  get_data(): string {
    return this.data;
  }

  get_responsavel(): Funcionario {
    return this.responsavel;
  }

  get__dados(): string {
    return this.dados;
  }

  get_paciente(): Paciente {
    return this.paciente;
  }

  set_data(data: string): void {
    this.data = data;
  }

  set_responsavel(responsavel: Funcionario): void {
    this.responsavel = responsavel;
  }

  set_dados(dados: string): void {
    this.dados = dados;
  }

  set_paciente(paciente: Paciente) {
    this.paciente = paciente;
  }
}

export default Registro;
