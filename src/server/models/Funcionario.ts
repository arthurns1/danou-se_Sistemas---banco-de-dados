import Usuario from "./Usuario";

class Funcionario extends Usuario {
  constructor(
    nome: string,
    cpf: string,
    telefone: string,
    rua: string,
    cidade: string,
    estado: string,
    private salario: number,
    private funcao: string,
    login: string,
    senha: string
  ) {
    super(login, senha, nome, cpf, telefone, rua, cidade, estado);
  }

  get_salario(): number {
    return this.salario;
  }

  set_salario(salario: number) {
    this.salario = salario;
  }

  get_funcao(): string {
    return this.funcao;
  }

  set_funcao(funcao: string) {
    this.funcao = funcao;
  }
}

export default Funcionario;
