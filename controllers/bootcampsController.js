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
exports.createBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "create a new bootcamp" });
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
