## Objectives

-   Perbedaan No Sql dan SQL
-   Kapan menggunakan noSql dan Sql
-   Instalasi mongoDB
-   Berinteraksi dengan mongo menggunakan mongoshell/GUI
-   mongoDb pada aplikasi node js (insert dan read data dari mongo)

## NoSQL

-   Not only SQL
-   Document database merupakan salah satu NoSQL database
-   https://www.mongodb.com/nosql-explained/nosql-vs-sql

## Document Oriented DB

-   Bentuk document (semi structured data)
-   Biasanya disimpan JSON atau XML (BSON - https://docs.mongodb.com/manual/reference/bson-types/)
-   Biasanya menyimpan relasinya sebagai embedded object di doc yang sama (https://docs.mongodb.com/manual/core/data-modeling-introduction/)

## Terminologi

https://docs.mongodb.com/manual/reference/sql-comparison/

| RelationalDB | DocumentDB                   |
| ------------ | ---------------------------- |
| Database     | Database                     |
| Table        | Collection                   |
| Column       | Field                        |
| Row, Record  | Document                     |
| Join Table   | Embedded Document, Reference |
| SQL          | JS (MongoDB)                 |

## MongoDB Client

-   Sheel
-   https://docs.mongodb.com/mongodb-shell/

```sh
mongo --host localhost --port 27017

# terbaru

mongosh --host localhost --port 27017
```

## Database

-   https://docs.mongodb.com/manual/reference/method/js-database/
-   menggunakan `use` diikuti nama database
-   db akan dibuat ketika membuat collection

-   `show databases`
-   `db.getName()`
-   `db.hostInfo()`
-   `db.version()`
-   `db.stats()`

## Collection

-   https://docs.mongodb.com/manual/reference/method/js-collection/
-   https://www.mongodb.com/community/forums/t/maximum-size-of-database-or-collection/99576

### Database method untuk Collection

-   `db.getCollectionNames()` | `show collections`
-   `db.getCollection(name)` | `db.[name]`
-   `db.getCollectionInfos()`

### Collection method

-   `db.[collection].find()`
-   `db.[collection].count()`
-   `db.[collection].drop()`
-   `db.[collection].totalSize()`
-   `db.[collection].stats()`

## Document

Insert Document:

-   `db.[collection].insertOne(document)`
-   `db.[collection].insertMany(Array<document>)`
-   `db.[collection].insert(document / Array<document>)`

Query Document:

-   https://docs.mongodb.com/manual/reference/operator/query/

-   `db.[collection].find()`

Update Document:

-   `db.collection.updateOne()`

Menghapus Document:

-   `db.[collection].deleteOne(query)`
-   `db.[collection].deleteMany(query)`
-   `db.[collection].remove(query)`

## Mencoba di Node.js

-   https://docs.mongodb.com/drivers/

```bash
npm i mongodb
```

## nice to read

-   https://docs.mongodb.com/manual/data-modeling/
-   https://docs.mongodb.com/manual/reference/bson-types/
-   https://json-schema.org/ | https://docs.mongodb.com/manual/core/schema-validation/
-   https://mongoosejs.com/
-   https://docs.mongodb.com/mongodb-shell/
