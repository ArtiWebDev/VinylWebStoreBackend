const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

// app.use(cors({
//     origin: ['http://localhost:5173', 'https://website.com'],
//     credentials: true
// }))

app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'https://vinil-web-store-frontend.vercel.app',
    ],
    credentials: true,
  })
)
app.use(express.json())

// Start Server and connect to DB

const PORT = process.env.PORT || 3000
const DB = process.env.MONGO_DB_CONNECTION

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

// DB connection
mongoose
  .connect(DB)
  .then(() => {
    console.log('DB is connected')
  })
  .catch((error) => {
    console.log('DB error', error)
  })

// Routes
const vinylRoutes = require('./routes/vinyl.route.js')
const orderRoutes = require('./routes/order.route.js')
const userRoutes = require('./routes/user.route.js')
const adminRoutes = require('./routes/statistic.js')

app.use('/api/vinyls', vinylRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/auth', userRoutes)
app.use('/api/admin', adminRoutes)
