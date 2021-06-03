const ClienteRepositorio = require("../../src/servicos/cliente_repositorio")

test('testando salvar usuário', async () => {

  const cliente = await ClienteRepositorio.inserir({
    nome: "tesge",
    telefone: "12223",
    cpf: "123333",
    email: "teste@teste.com"
  })

  expect(cliente.id !== 0).toBe(true);
});