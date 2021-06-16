import EmpPoints from "../models/emppoints.model.js";

function postEmpPoints(req, res) {
  const empPoints = new EmpPoints({
    name: req.body.name,
    points: req.body.value,
  });
  empPoints
    .save()
    .then((empPointsSaved) => res.json(empPointsSaved))
    .catch((error) => res.json(error));
}

function getEmpPoints(req, res) {
  EmpPoints.find().then((empPoints) => res.json(empPoints));
}

export { postEmpPoints, getEmpPoints };
