// routes/adminRoutes.js
const express = require('express');
const adminController = require('../controller/adminController');
const router = express.Router();

router.post('/register', adminController.register);
router.post('/login', adminController.login);
router.get('/admin/:id', adminController.getAdmin);
router.get('/admins', adminController.adminData);
router.put('/admin/:id', adminController.updateAdmin);
router.delete('/admin/:id', adminController.deleteAdmin);

module.exports = router;
