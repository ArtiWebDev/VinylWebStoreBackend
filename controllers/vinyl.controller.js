const Vinyl = require('../models/vinylModel.js')

// Create a new vinyl
const createVinyl = async (req, res) => {
  try {
    const newVinyl = await Vinyl({ ...req.body })
    await newVinyl.save()
    res.status(200).send({ message: 'Vinyl posted', vinyl: newVinyl })
  } catch (error) {
    console.log('Post vinyl error', error)
    res.status(500).send({ message: 'Failed to post vinyl', error })
  }
}

//get All vinyls
const getAllVinyls = async (req, res) => {
  try {
    const vinyls = await Vinyl.find().sort({ createdAt: -1 }) // Sort by createdAt in descending order
    res.status(200).send(vinyls)
  } catch (error) {
    console.log('Get all vinyls error', error)
    res.status(500).send({ message: 'Failed to get all vinyls', error })
  }
}

// get single vinyl
const getSingleVinyl = async (req, res) => {
  try {
    const { id } = req.params
    const vinyl = await Vinyl.findById(id)
    if (!vinyl) {
      return res.status(404).send({ message: 'Vinyl not found' })
    }
    res.status(200).send(vinyl)
  } catch (error) {
    console.log('Get single vinyl error', error)
    res.status(500).send({ message: 'Failed to this vinyl', error })
  }
}

// Update a vinyl
const updateVinyl = async (req, res) => {
  try {
    const { id } = req.params
    const updatedVinyl = await Vinyl.findByIdAndUpdate(id, req.body, {
      new: true,
    }) // Return the updated vinyl
    if (!updatedVinyl) {
      return res.status(404).send({ message: 'Vinyl not found' })
    }
    res.status(200).send({ message: 'Vinyl updated', vinyl: updatedVinyl })
  } catch (error) {
    console.log('Updating Vinyl error', error)
    res.status(500).send({ message: 'Failed to update vinyl', error })
  }
}

// Delete a vinyl
const deleteVinyl = async (req, res) => {
  try {
    const { id } = req.params
    const deletedVinyl = await Vinyl.findByIdAndDelete(id)
    if (!deletedVinyl) {
      return res.status(404).send({ message: 'Vinyl not found' })
    }
    res.status(200).send({ message: 'Vinyl updated', vinyl: deletedVinyl })
  } catch (error) {
    console.log('Delete Vinyl error', error)
    res.status(500).send({ message: 'Failed to delete vinyl', error })
  }
}

module.exports = {
  createVinyl,
  getAllVinyls,
  getSingleVinyl,
  updateVinyl,
  deleteVinyl,
}
