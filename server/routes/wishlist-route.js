// Import express
const express = require('express')

// Import wishlist-controller
const wishlistRoutes = require('./../controllers/wishlist-controller.js')

// Create router
const router = express.Router()


router.get('/all', wishlistRoutes.wishlistAll)

// router.put('/delete', wishlistRoutes.wishlistDelete)

// Export router
module.exports = router
