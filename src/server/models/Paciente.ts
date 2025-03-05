import Usuario from "./Usuario";

class Paciente extends Usuario {
  constructor(
    nome: string,
    cpf: string,
    telefone: string,
    rua: string,
    cidade: string,
    estado: string,
    private indicacao: string,
    login: string,
    senha: string
  ) {
    super(login, senha, nome, cpf, telefone, rua, cidade, estado);
  }

  get_indicacao(): string {
    return this.indicacao;
  }

  set_indicacao(indicacao: string): void {
    this.indicacao = indicacao;
  }
}

export default Paciente;
