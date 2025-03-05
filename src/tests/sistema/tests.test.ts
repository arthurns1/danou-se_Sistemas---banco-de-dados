import request from "supertest";
import server from "../../server/server"; // Certifique-se de que o caminho está correto

let app: any; // Variável para armazenar a instância do servidor

describe("Testes para as rotas de funcionários", () => {
  let cpfFuncionario = "12345678900"; 

  beforeAll(() => {
    app = server.listen(23241); // Inicia o servidor antes dos testes
  });

  afterAll((done) => {
    app.close(() => done()); // Fecha o servidor após os testes
  });

  it("Deve criar um funcionário", async () => {
    const response = await request(server).post("/funcionarios/create_funcionario").send({
      nome: "Teste Funcionario", 
      cpf: cpfFuncionario,
      telefone: "11987654321",
      rua: "Rua Teste",
      cidade: "Cidade Teste",
      estado: "SP",
      salario: 3000,
      funcao: "Recepcionista",
      login: "func_teste",
      senha: "senha123"
    });
    
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("message", "Usuário criado com sucesso!");
  });

  it("Deve retornar todos os funcionários", async () => {
    const response = await request(server).get("/funcionarios/get_funcionarios");
    
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it("Deve retornar um funcionário pelo CPF", async () => {
    const response = await request(server).get("/funcionarios/get_funcionario/" +cpfFuncionario);

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body[0]).toHaveProperty("cpf", cpfFuncionario);
  });

  it("Deve editar um funcionário", async () => {
    const response = await request(server).put(`/funcionarios/edit_funcionario/${cpfFuncionario}`).send({
      nome: "Teste Editado",
      telefone: "11999999999",
      salario: 3500,
      funcao: "Dentista"
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("message", "Funcionário atualizado com sucesso!");
  });

  it("Deve deletar um funcionário", async () => {
    const response = await request(server).delete(`/funcionarios/delete_funcionario/${cpfFuncionario}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("message", "Funcionário removido com sucesso!");
  });

  it("Deve retornar erro ao buscar funcionário inexistente", async () => {
    const response = await request(server).get("/funcionarios/get_funcionario/00000000000");

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("message", "Funcionário não encontrado!");
  });
});