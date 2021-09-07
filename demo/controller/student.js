const Student = require("../model/student");

class StudentController {
    static getAll(req, res) {
        // manggil model
        Student.findAll()
            .then((data) => {
                res.status(200).json({
                    meta: {
                        success: true,
                    },
                    body: {
                        students: data,
                    },
                });
            })
            .catch(console.log);
    }

    static post(req, res) {
        // manggil model
        console.log(req.body);
        Student.create({
            ...req.body,
        })
            .then((data) => {
                res.status(201).json({
                    meta: {
                        success: true,
                    },
                    body: {
                        payload: data,
                    },
                });
            })
            .catch(res.status(500).json);
    }
}

module.exports = StudentController;
