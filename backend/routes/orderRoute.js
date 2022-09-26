const express = require('express');
const { newOrder, getSingleOrderDetails, myOrders, getAllOrders, updateORder, deleteOrder } = require('../controllers/orderControllers');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

router.route('/order/new').post(isAuthenticatedUser, newOrder);
router.route('/order/:id').get(isAuthenticatedUser, getSingleOrderDetails);
router.route