const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const req = require('express/lib/request')
const MongoClient = require('mongodb').MongoClient

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.json())




MongoClient.connect('mongodb+srv://yoda:5seY74Z4ZF6YxhqC@cluster0.b8blw.mongodb.net/?retryWrites=true&w=majority', {useUnifiedTopology: true})
    .then(client => {
        
        console.log('Connected to Database!')
        
        const db = client.db('quotes-hw')

        const quotesCollection = db.collection('quotes')
        
        app.use(bodyParser.urlencoded({extended: true}))
        
        app.listen(3000, () => console.log('listening on localhost:3000'))
        
        


        app.get('/', (req, res) => {
            db.collection('quotes').find().toArray()
                .then(results => {
                    res.render('index.ejs', {quotes: results})
                })
                .catch(error => console.error(error))
        })
        

        app.put('/quotes', (req, res) => {
            quotesCollection.findOneAndUpdate(
                {name: 'mitch'},
                {
                    $set: {
                        name: req.body.name,
                        quote: req.body.quote
                    }
                },
                {
                    upsert: true
                } 
            )
                .then(result => {
                    res.json('Success')
                })
                .catch(error => console.error(error))
        })


        app.post('/quotes', (req, res) => {
            quotesCollection.insertOne(req.body)
                .then(result => {
                    res.redirect('/')
                })
                .catch(error => console.error(error))
        })


        
        app.delete('/quotes', (req, res) => {
            quotesCollection.deleteOne(
                {name: req.body.name}
            )
            .then(result => {
                if (result.deletedCount === 0) {
                    return res.json('No quote to delete')
                }
                res.json("Deleted Darth Vadar's quote")
            })
            .catch(error => console.error(error))
        })


    })
    .catch(error => console.error(error))













