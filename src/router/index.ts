import express from "express";
import PayrollDataRouter from "./payDataWithTaxRouter"
import TimecardDataRouter from "./timeRouter";

//the router index
export default function createRouter(): express.Router {
  const router = express.Router();

  PayrollDataRouter(router);
  TimecardDataRouter(router);

  return router;
}






//making our actual router here & in other router file.
//note that we built our our method elsewhere, but were grabing it from the router file as it interactis with the FE i think
/* import express from "express";
import grossPayData from "./grossPayRoute";
import { fedTaxData } from "../controllers/payrollConfrimation";

const router = express.Router();

export default (): express.Router => {
  grossPayData(router);
  fedTaxData(router);
  return router;
}; */


