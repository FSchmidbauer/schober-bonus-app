import EmpPoints from "../models/emppoints.model.js";

function postEmpPoints(req, res) {
  const employeesWithPoints = Object.keys(req.body).map((name) => {
    return { name, points: req.body[name].points };
  });

  EmpPoints.insertMany(employeesWithPoints, (error, docs) => {
    if (error) {
      return res.json(error);
    }
    res.json(docs);
  });
}

function getEmpPoints(req, res) {
  EmpPoints.find().then((empPoints) => res.json(empPoints));
}

export { postEmpPoints, getEmpPoints };
