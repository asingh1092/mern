import express from "express";

const router = express.Router();

import testData from "../test-data.json";
router.get("/contests", (req, res) => {
  res.send([testData]);
});

// rounter.get("/contest)

export default router;
