const express = require("express");
let router = express.Router();
const auth = require("../../middleWares/auth");
const admin = require("../../middlewares/validateProducts");
const TeamModel = require("../../models/Team")
//get products
router.get("/",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let Team = await TeamModel.find().skip(skipRecords).limit(perPage);
  return res.send(Team);
});
//get single products
router.get("/:id", async (req, res) => {
  try {
    let Team = await TeamModel.findById(req.params.id);
    if (!Team)
      return res.status(400).send("Product With given ID is not present"); //when id is not present id db
    return res.send(Team); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
router.put("/:id",  async (req, res) => {
  let Team = await TeamModel.findById(req.params.id);
  Team.City = req.body.City;
  Team.Date = req.body.Date;
  Team.TeamName = req.body.TeamName;
  await Team.save();
  return res.send(Team);
});
//delete a record
router.delete("/:id", async (req, res) => {
  let Team = await TeamModel.findByIdAndDelete(req.params.id);
  return res.send(Team);
});
//Insert a record
router.post("/", async (req, res) => {
  let Team = new TeamModel();
  Team.City = req.body.City;
  Team.Date = req.body.Date;
  Team.TeamName = req.body.TeamName;
  await Team.save();
  return res.send(Team);
});
module.exports = router;