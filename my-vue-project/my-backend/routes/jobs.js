const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// Create a new job
router.post('/', async (req, res) => {
    try {
        const job = new Job(req.body);
        const savedJob = await job.save();
        res.status(201).json(savedJob);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all jobs
router.get('/', async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Search jobs
router.get('/search', async (req, res) => {
    try {
        const { title, company, location, type, industry } = req.query;
        const query = {};

        if (title) query.title = new RegExp(title, 'i');
        if (company) query.company = new RegExp(company, 'i');
        if (location) query.location = new RegExp(location, 'i');
        if (type) query.type = new RegExp(type, 'i');
        if (industry) query.industry = new RegExp(industry, 'i');

        const jobs = await Job.find(query);
        res.json(jobs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
