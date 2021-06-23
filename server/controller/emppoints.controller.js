import EmpPoints from "../models/emppoints.model.js";

async function insertOrUpdateEmployeesWithPoints(employeesWithPoints) {
  return Promise.all(
    employeesWithPoints.map(
      async (employeeWithPoints) =>
        await EmpPoints.findOneAndUpdate(
          { name: employeeWithPoints.name },
          {
            name: employeeWithPoints.name,
            $inc: { points: employeeWithPoints.points },
          },
          {
            upsert: true,
            new: true,
          }
        )
    )
  );
}

async function postEmpPoints(req, res) {
  const employeesWithPoints = Object.keys(req.body).map((name) => ({
    name,
    points: req.body[name].points,
  }));
  res.json(await insertOrUpdateEmployeesWithPoints(employeesWithPoints));
}

function subtractVoucherPoints(req, res) {
  const { employeeId } = req.params;
  const { pointsOfSelectedVouchers } = req.body;

  EmpPoints.findById(employeeId, (error, doc) => {
    if (error) {
      res.json({ message: "could not find employee with this id." });
      return;
    }
    pointsOfSelectedVouchers.forEach((points) => {
      doc.points = doc.points - points;
    });
    EmpPoints.findOneAndUpdate(
      { _id: employeeId },
      doc,
      { new: true },
      (error, doc) => {
        // @TODO error
        res.json(doc);
      }
    );
  });
}

function getEmpPoints(req, res) {
  EmpPoints.find().then((empPoints) => res.json(empPoints));
}

export { postEmpPoints, getEmpPoints, subtractVoucherPoints };
