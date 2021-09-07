const { mongodb } = require(".");

class Student {
    static findAll() {
        const students = mongodb.getDB().collection("students");
        return students.find().toArray();
    }

    static create(data) {
        const students = mongodb.getDB().collection("students");
        return students.insertOne(data);
    }
}

module.exports = Student;
