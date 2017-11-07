const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

	res.render('index')
}); // end of route

router.get('/projects', (req, res) => {

	res.render('projects')
}); // end of route

router.get('/contact', (req, res) => {

	res.render('contact')
}); // end of route






module.exports = router;