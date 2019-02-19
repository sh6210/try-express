var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/myProject",
    sampleCollection = 'chapters';

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

MongoClient.connect(url, function (err, client) {
    if (err) throw err;

    var db = client.db('myProject');

    db.collection(sampleCollection).insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log(res);

        client.close();
    });

    
});