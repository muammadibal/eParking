import express from "express";
import {
  detailPark,
  allParks,
  createPark,
  updatePark,
  deletePark
} from "../controllers/park";
const router = express.Router();

router.get("/", allParks);
router.get("/:id", detailPark);
router.post("/:id", createPark);
router.put("/:id", updatePark);
router.delete("/:id", deletePark);

export default router;
