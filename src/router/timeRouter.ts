import { Router } from "express";
import { TimeCardData } from '../controllers/timecardController'

export default function TimecardDataRouter(router: Router): void {
  router.post("/timecard/timedata", TimeCardData);
}