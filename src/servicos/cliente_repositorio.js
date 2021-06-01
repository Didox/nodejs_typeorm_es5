const typeorm = require("../config/typeorm")

module.exports = {
  inserir: async cliente => {
    const connection = await typeorm.open();
    const clienteRepositorio =  await connection.getRepository("clientes");
    await clienteRepositorio.save(cliente)
    await connection.close()
  },
  atualizar: async (id,cliente) => {
    const connection = await typeorm.open();
    const clienteRepositorio =  await connection.getRepository("clientes");
    await clienteRepositorio.update(id, cliente)
    await connection.close()
  },
  buscar: async parans => {
    const connection = await typeorm.open();
    const clienteRepositorio =  await connection.getRepository("clientes");
    const registros = await clienteRepositorio.find(parans);
    await connection.close()
    return registros
  },
  apagar: async id => {
    const connection = await typeorm.open();
    const clienteRepositorio =  await connection.getRepository("clientes");
    await clienteRepositorio.delete({id: id});
    await connection.close()
  }
}