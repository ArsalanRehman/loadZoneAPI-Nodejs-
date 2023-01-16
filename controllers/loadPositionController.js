const LoadPosition = require('../models/loadPositionModel');
exports.createLoadPosition = async (req, res) => {
  try {
    const newLoadZone = await LoadPosition.create(req.body);
    res.status(200).json({
      status: 'success',
      data: {
        LoadPosition: newLoadZone,
      },
    });
    console.log(newLoadZone);
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      data: {
        err,
      },
    });
    console.log(err);
  }
};
exports.getAllLoadPosition = async (req, res) => {
  try {
    const newLoadZone = await LoadPosition.find();
    res.status(200).json({
      status: 'success',
      data: {
        LoadPosition: newLoadZone,
      },
    });
    console.log(newLoadZone);
  } catch (err) {
    console.log(err);
  }
};
exports.updateLoadPosition = async (req, res) => {
  try {
    const newLoadZone = await LoadPosition.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    // newLoadZone.isOccupied = !newLoadZone.isOccupied;
    // await newLoadZone.save();

    res.status(200).json({
      status: 'success',
      data: {
        LoadPosition: newLoadZone,
      },
    });
    // console.log('Update Req: ', req);
  } catch (err) {
    console.log(err);
  }
};
exports.updateLoadPositionByName = async (req, res) => {
  try {
    const newLoadZone = await LoadPosition.findOneAndUpdate(
      { name: req.body.name },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    // newLoadZone.isOccupied = !newLoadZone.isOccupied;
    // await newLoadZone.save();

    res.status(200).json({
      status: 'success',
      data: {
        LoadPosition: newLoadZone,
      },
    });
    // console.log('Update Req: ', req);
  } catch (err) {
    console.log(err);
  }
};
