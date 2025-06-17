const express = require('express')
const mongoose = require('mongoose')
const Order = require('../models/orderModel')
const Vinyl = require('../models/vinylModel')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    // Total number of Vinyls
    const totalVinyls = await Vinyl.countDocuments()

    // Sum of all totalPrices from orders
    // Total sales
    const totalSales = await Order.aggregate([
      {
        $group: {
          _id: null,
          totalSales: { $sum: '$totalPrice' },
        },
      },
    ])

    // Total Orders
    const totalOrders = await Order.countDocuments()

    res.status(200).json({
      totalOrders,
      totalSales: totalSales[0].totalSales || 0,
      totalVinyls,
    })
  } catch (error) {
    console.error('Error get admin statistics:', error)
    res.status(500).json({ message: 'Failed to get admin statistics' })
  }
})

module.exports = router
