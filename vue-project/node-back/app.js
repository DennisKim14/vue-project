const app = require('express')()
    , logger = require('morgan')
    , bodyParser = require('body-parser')
    , fs = require('fs')
    , cors = require('cors');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors({
  credentials: true,
  origin: 'http://localhost:5173'
}))

const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    
  }
}

main().catch(console.error);

/**
 * Route Init
 */
const files = fs.readdirSync('route');
files.forEach(file => {
    const fileNameArr = file.split('.');
    app.use('/' + fileNameArr[0].toLowerCase(), require('./route/' + file));
})

module.exports = app;