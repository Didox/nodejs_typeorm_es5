const typeorm = require("typeorm"); var EntitySchema = typeorm.EntitySchema;

module.exports = {
  open: async () => {
    return await typeorm.createConnection({
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "root",
      "password": "root",
      "database": "clientes_typeorm",
      "synchronize": true,
      "logging": false,
      entities: [new EntitySchema(require("../entidades/schemas/clientes.json"))
      ]
    })
  }
};