const app = express();
const bodyParser= require('body-parser');
const { MongoClient } = require('mongodb'); // Create a Mongoclient class
require('dotenv').config({path: __dirname + '/.env'})
const {studentList, classList} = require('data')

const client = new MongoClient(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true });

async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();
  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

/**
 * TODO: CREATE. Populate [classes] and [students] collection with sample documents
 */
const populateCollections = async () => {
  // const db = client.db("scheduler-bog")
  // let collection = db.collection("students");
  
}

/**
 * TODO: READ. Print all CS classes
 */
const getCSClasses = async () => {

}

 /**
 * TODO: READ. Return all CS classes that ALSO has <4 credit hrs
 */
const getShortCSClasses = async () => {

}

 /**
  * TODO: READ. Return info about a specific class
  * @param {*} name name of the class (e.g. "CS 2200")
  */
const get = async (name) => {

}

/**
 * TODO: READ. Return a list of [username]'s classmates in [classname] 
 * @param {*} username user who wants to find friends (like all of us. say hi to your classmates!)
 * @param {*} classname class to search classmates
 */
 const getClassmates = async(username, classname) => {

 }

/**
 * TODO: READ. Return an obj with class name as key and list of students 
 *       enrolled in that specific class as values. Return format should 
 *       look like this 
 *       {
 *          class.name: [studentDoc1, studentDoc2, ...],
 *          "CS 3510": [{name: Max, ...}, {name: Daniel, ...}, ...],
 *          ...
 *       }
 */
const getEnrollementTable = async() => {

}

/**
 * TODO: UPDATE. Update [username]'s enrolledIn list with the [classname]. Increment
 *       [username]'s credit hours by [classname]'s credit hours
 * @param {*} username 
 * @param {*} classname 
 */
const updateEnrolledInList = async(username, classname) => {

}

/**
 * TODO: DELETE. [username] has graduated! Or dropped out to make the next Facebook!
 *       Delete the user in the [students] collection
 * @param {*} username the one who reached the promised land 
 */
const deleteUser = async(username) => {

}


const main = async () => {
  try {
    await client.connect();
    await listDatabases(client);
    // TODO: call async funcs from above in main (over here)
  
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
