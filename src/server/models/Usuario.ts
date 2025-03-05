class Usuario {
  constructor(
    private login: string,
    private senha: string,
    private nome: string,
    private cpf: string,
    private telefone: string,
    private rua: string,
    private cidade: string,
    private estado: string
  ) {}

  get_login(): string {
    return this.login;
  }

  get_senha(): string {
    return this.senha;
  }

  set_login(login: string): void {
    this.login = login;
  }

  set_senha(senha: string): void {
    this.senha = senha;
  }

  get_nome(): string {
    return this.nome;
  }

  get_cpf(): string {
    return this.cpf;
  }

  get_telefone(): string {
    return this.telefone;
  }

  get_rua(): string {
    return this.rua;
  }

  get_cidade(): string {
    return this.cidade;
  }

  get_estado(): string {
    return this.estado;
  }

  set_nome(nome: string): void {
    this.nome = nome;
  }

  set_cpf(cpf: string): void {
    this.cpf = cpf;
  }

  set_telefone(telefone: string): void {
    this.telefone = telefone;
  }

  set_rua(rua: string): void {
    this.rua = rua;
  }

  set_cidade(cidade: string): void {
    this.cidade = cidade;
  }

  set_estado(estado: string): void {
    this.estado = estado;
  }
}

export default Usuario;
