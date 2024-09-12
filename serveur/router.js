const express = require('express');
const UserModel = require('./modeles/user');
const ProjectModel = require('./modeles/project');
const ToolModel = require('./modeles/tool');
const MaterialModel = require('./modeles/material');
const secureRoute = require('./middleware/secureRoute');

const router = express.Router();

router.post('/login', postLogin);

router.post('addUser', postAddUser);

router.get("/users", getUser);

router.get("/tools", getTool);

router.get("/materials", getMaterial);

router.get("/projects", getProject);

module.exports = router;



function postLogin(req, res){
    UserModel.findOne({ email: req.body.email }).lean().then((user) => {
        if (!user) return res.status(404).send({ error: "User not found" });
    
        bcrypt.compare(req.body.password, user.password).then((isValid) => {
          if (isValid) {
            // Générer le token 
            const token = jsonwebtoken.sign(user, 'COLLABORATEUR_APP_POWAAAA_SECRET');
    
            // Envoi du token au client
            return res.status(200).send({ succes: "login succes!", token: token });
          } else {
            return res.status(403).send({ succes: "authentification failed!" });
          }
        });
    });
}

function postAddUser(req, res){
    res.send({ succes:'User ajouté'});
}

function getProject(req, res){
  /*  UserModel.find().then((user) => {
        //user.project.foreach -> get detail
        res.send(data);
      });*/
      ProjectModel.find().then((data) => {
        res.send(data);
      });
}

function getUser(req, res){
  UserModel.find().then((data) => {
      res.send(data);
    });
}

function getTool(req, res){
  ToolModel.find().then((data) => {
    res.send(data);
  });
}

function getMaterial(req, res){
  MaterialModel.find().then((data) => {
    res.send(data);
  });
}

//projectntools -> bdd

//db.getCollection('feed').find({"_id" : { "$in" : 
//[ObjectId("55880c251df42d0466919268"),ObjectId("55bf528e69b70ae79be35006")]}})

/*
db.animal.update(
      { "_id": "100" },
      {
          $push: {
              animalArray: "cat"
          }
      }
  );

  db.pigments.updateOne(
   { _id: 1 },
   { $addToSet: { colors: "mauve" } }
)
*/