const express = require('express')
const verifyAdmin = require('../middleware/verifyAdmin.js')
const router = express.Router()

const {
  createVinyl,
  getAllVinyls,
  getSingleVinyl,
  updateVinyl,
  deleteVinyl,
} = require('../controllers/vinyl.controller.js')

// post a
// router.post('/', (req, res) => {
//   res.send('post a vinyl')
// })

// CRUD
// post - submit from frontend to db
// get - back to frontend
// put, patch - update
// delete

// End Points
router.post('/create-vinyl', verifyAdmin, createVinyl)
router.get('/', getAllVinyls)
router.get('/:id', getSingleVinyl)
router.put('/edit/:id', verifyAdmin, updateVinyl)
router.delete('/:id', verifyAdmin, deleteVinyl)

module.exports = router
