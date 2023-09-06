import express from "express";
import cors from "cors";

const router = express.Router();
router.use(cors());

// raw test data
import testData from "../test-data.json";
router.get("/contests", (req, res) => {
  res.send({ contests: testData });
});

// rounter.get("/contest)

export default router;
