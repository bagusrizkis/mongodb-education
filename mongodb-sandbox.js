// insert document Student
db.users.insertOne({
    _id: 1,
    name: "Andy",
    role: "student",
    phase: 3,
    age: 15,
});

db.instructors.insertOne({
    name: "Udin",
});

// bikin index baru
db.users.createIndex({ email: 1 }, { unique: true });

db.users.insertMany([
    {
        name: "Max",
        role: "student",
        phase: 0,
        age: 25,
    },
    {
        name: "Otis",
        role: "student",
        phase: 2,
        age: 20,
    },
    {
        name: "Aiko",
        role: "instructor",
        age: 20,
    },
]);

// find Docuemnt
db.user.find();
db.user.find().toArray();

// update - replace

db.user.update(
    { _id: ObjectId("") },
    {
        name: "",
    }
);

// update - edit (operator set)

db.user.update(
    { _id: ObjectId("") },
    {
        $set: { name: "" },
    }
);

db.students.update(
    {
        _id: ObjectId("613753f1c07372897525a25d"),
    },
    {
        $set: {
            email: "c@mail.com",
        },
    }
);

// update + query operator
db.user.find({ age: { $lte: 15 } });
