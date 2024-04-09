const express = require("express");

const {
  getBootcampById,
  createBootcamps,
  updateBootcamps,
  deleteBootcamps,
  getBootcamps,
} = require("../controllers/bootcampsController");

const router = express.Router();

router.route("/").get(getBootcamps).post(createBootcamps);

router
  .route("/:id")
  .get(getBootcampById)
  .put(updateBootcamps)
  .delete(deleteBootcamps);

module.exports = router;
