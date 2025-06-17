const express = require('express')
const {
  createOrder,
  getOrderByEmail,
} = require('../controllers/order.controller.js')

const router = express.Router()

// Endpoints
// Create Order

router.post('/', createOrder)

// Get all orders by Email
router.get('/email/:email', getOrderByEmail)

module.exports = router
