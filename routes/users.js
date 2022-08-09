const express = require('express')
const router = express.Router()
const User = require('../models/user')

// Read all
router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Read one
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})

// Create one
router.post('/', async (req, res) => {
    const user = new User({
        name: req.body.name,
        createdDate: req.body.createdDate,
        email: req.body.email
    })
    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Update one
router.patch('/', (req, res) => {

})

// Delete one
router.delete('/', (req, res) => {

})

module.exports = router
