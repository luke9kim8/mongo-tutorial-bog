const app = express();
const bodyParser= require('body-parser');
const { MongoClient } = require('mongodb'); // Create a Mongoclient class
require('dotenv').config({path: __dirname + '/.env'})

const client = new MongoClient(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true });

async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();
  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

/**
 * TODO: CREATE a database(titled $title), a collection(titled $title) to store all listings!
 */
const createDB = async() => {

}

const main = async () => {
  try {
    await client.connect();
  
    await listDatabases(client);
  
  } catch (e) {
    console.error(e);
  } finally {
      await client.close();
  }
}
main().catch(console.error);

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000, function() {
  console.log(process.env.URI)
  console.log('listening on 3000')
})
