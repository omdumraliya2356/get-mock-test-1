// controllers/userController.js
const Admin = require('../models/adminModel');
const pool = require("../config/db");

const register = (req, res) => {
    const { userName, password } = req.body;
    if (!userName || !password) {
        return res.status(400).json({ error: 'userName and password are required' });
    }   
    Admin.create({ userName, password }, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'registered successfully', id: result.insertId });
    });
};

const login = (req, res) => {
    const { userName, password } = req.body;
    if (!userName || !password) {
        return res.status(400).json({ error: 'userName and password are required' });
    }
    Admin.findByUsername(userName, (err, admin) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!admin || admin.password !== password) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }
        res.status(200).json({ message: 'Login successful', admin });
    });
};

const adminData = (req, res) => {
    Admin.findAdmin((err, admin) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!admin) return res.status(404).json({ error: 'not found' });
        res.status(200).json(admin);
    });
};


const getAdmin = (req, res) => {
    const id = req.params.id;
    Admin.findById(id, (err, admin) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!admin) return res.status(404).json({ error: 'not found' });
        res.status(200).json(admin);
    });
};

const updateAdmin = (req, res) => {
    const id = req.params.id;
    const { userName, password } = req.body;
    if (!userName || !password) {
        return res.status(400).json({ error: 'userName and password are required' });
    }
    Admin.update(id, { userName, password }, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ error: 'not found' });
        res.status(200).json({ message: 'updated successfully' });
    });
};

const deleteAdmin = (req, res) => {
    const id = req.params.id;
    Admin.delete(id, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ error: 'not found' });
        res.status(200).json({ message: 'deleted successfully' });
    });
};

module.exports = {
    register,
    login,
    getAdmin,
    adminData,
    updateAdmin,
    deleteAdmin,
};
