const { MongoClient } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const client = new MongoClient(connectionURL);
const databaseName = "test-db";

const data = [
  {
    nombre: "Daniel",
    apellido: "Pacheco",
    curso: "Bootcamp",
    nota: 100,
  },
  {
    nombre: "Daniel1",
    apellido: "Pacheco1",
    curso: "Bootcamp",
    nota: 100,
  },
  {
    nombre: "Daniel2",
    apellido: "Pacheco2",
    curso: "Bootcamp",
    nota: 100,
  },
  {
    nombre: "Daniel3",
    apellido: "Pacheco3",
    curso: "Bootcamp",
    nota: 100,
  },
];

const conectar = async () => {
  try {
    await client.connect();
    console.log("Conectado");
    const db = client.db(databaseName);
    const bios = db.collection("estudiantes");

    // insertMany
    // try {
    //   await bios.insertMany(data);
    // } catch (e) {
    //   print(e);
    // }

    // find
    // const result = await bios.find({ nombre: "Daniel" });
    // await result.forEach((estudent) => {
    //   console.log(estudent);
    // });

    // findOne
    const result = await bios.findOne({}, { curso: 1 });
      console.log(result);

    // deleteOne
    //   try {
    //     db.orders.deleteOne( { "nombre" : "Daniel" } );
    //  } catch (e) {
    //     print(e);
    //  }

    // deleteMany
    //   try {
    //     await bios.deleteMany( { "nombre" : "Daniel" } );
    //  } catch (e) {
    //     console.log(e);
    //     // print(e)
    //  }

    // updateOne
    //   try {
    //     await bios.updateOne(
    //        { "nombre" : "Daniel2" },
    //        { $set: { "nota" : 90 } }
    //     );
    //  } catch (e) {
    //     print(e);
    //  }

    // updateMany
    //   try {
    //     await bios.updateMany(
    //        { nota: { $gt: 89 } },
    //        { $set: { "Review" : true } }
    //     );
    //  } catch (e) {
    //     print(e);
    //  }
  } catch (err) {
    console.log(err);
  } finally {
    if (client) {
      await client.close();
      console.log("Desconectado");
    }
  }
};

conectar();