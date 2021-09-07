const express = require("express");
const { mongodb } = require("./model/index");
const StudentC = require("./controller/student");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        status: "Runnnig",
    });
});

app.get("/students", StudentC.getAll);
app.post("/students", StudentC.post);

mongodb
    .run()
    .then(() => {
        app.listen(3000, () => {
            console.log("Running :: 3000");
        });
    })
    .catch((err) => {
        console.log(err);
    });
