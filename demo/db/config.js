const { MongoClient } = require("mongodb");

// const uri = "mongodb://127.0.0.1:27017";

// const client = new MongoClient(uri);

// async function run() {
//     try {
//         await client.connect();
//         const database = client.db("blazing");
//         const students = database.collection("students");
//         const studentData = await students.find().toArray();
//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }
// run().catch(console.dir);

const db = ({ uri, databaseName }) => {
    const client = new MongoClient(uri);
    return {
        database: null,
        run: () => {
            return new Promise((res, rej) => {
                client
                    .connect()
                    .then((clientData) => {
                        this.database = clientData.db(databaseName);
                        res("Success");
                    })
                    .catch((err) => {
                        rej(err);
                    });
            });
        },
        getDB: () => {
            return this.database;
        },
        closeDb: () => {
            client.close();
        },
    };
};

module.exports = {
    db,
};
