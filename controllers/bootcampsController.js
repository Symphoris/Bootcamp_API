const Bootcamp = require("../modals/bootcampsModel");

// @desc GET ALL BOOTCAMPS
// @route GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "show all bootcamps" });
};

// @desc GET single bootcamp
// @route GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcampById = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Show bootcamp ${req.params.id}` });
};
// @desc create a new bootcamps
// @route GET /api/v1/bootcamps/:id
// @access Public
exports.createBootcamps = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({ success: true, data: bootcamp });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
};

// @desc update bootcamps
// @route PUT /api/v1/bootcamps/:id
// @access Public
exports.updateBootcamps = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `upadate bootcamp ${req.params.id}` });
};

// @desc delete bootcamps
// @route DELETE /api/v1/bootcamps/:id
// @access Public
exports.deleteBootcamps = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `delete bootcamp ${req.params.id}` });
};
