//making our actual router here & in other router file.
//note that we built our our method elsewhere, but were grabing it from the router file as it interactis with the FE i think
import express from "express";
import grossPayData from "./confirmPayDataR";

const router = express.Router();

export default (): express.Router => {
  grossPayData(router);
  return router;
};

