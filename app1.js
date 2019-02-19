var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// insert into db
var myobj = [{
        'Title': 'Love of haven',
        'Author': 'Eric'
    },
    {
        'Title': 'Snow Crash',
        'Author': 'Neal Stephenson'
    }
];

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    
    dbo.collection("customers").insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
});