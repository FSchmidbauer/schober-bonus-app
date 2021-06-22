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

// function giveMoreEmpPoints(req, res) {
//   const { employeeId } = req.params;
//   const updatedEmpPoints = req.body;
//   EmpPoints.findByIdAndUpdate(
//     { _id: employeeId },
//     updatedEmpPoints,
//     { new: true },
//     (error, doc) => {
//       if (error) {
//         res.json({ message: "could not give more points to this employee." });
//         return;
//       }
//       res.json(doc);
//     }
//   );
// }

function subtractVoucherPoints(req, res) {
  const { employeeId } = req.params;
  const pointsAfterSubtractedVoucher = req.body;
  EmpPoints.findByIdAndUpdate(
    { _id: employeeId },
    pointsAfterSubtractedVoucher,
    { new: true },
    (error, doc) => {
      if (error) {
        res.json({ message: "could not subtract these voucher points." });
        return;
      }
      res.json(doc);
    }
  );
}

function getEmpPoints(req, res) {
  EmpPoints.find().then((empPoints) => res.json(empPoints));
}

export { postEmpPoints, getEmpPoints, subtractVoucherPoints };
