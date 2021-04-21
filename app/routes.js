// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

router.post("/store-contact-preferences/", function (req, res) {
    const adj = req.session.data['contact-preferences'];
    let adjList = [];
    if (Array.isArray(adj)) {
        adj.forEach((ad) => {
            adjList.push(ad);
        });
    } else {
        adjList.push(adj)
    }
    req.session.data['contact-preferences'] = adjList;
    res.redirect('/preferences/review-preferences');
})

router.post("/store-adjustments/", function (req, res) {
    const adj = req.session.data['adjustments'];
    let adjList = [];
    if (Array.isArray(adj)) {
        adj.forEach((ad) => {
            adjList.push(ad);
        });
    } else {
        adjList.push(adj)
    }
    req.session.data['adjustments'] = adjList;
    res.redirect('/preferences/appointment-access-needs');
})

router.post("/store-needs/", function (req, res) {
    const adj = req.session.data['access-needs'];
    let adjList = [];
    if (Array.isArray(adj)) {
        adj.forEach((ad) => {
            adjList.push(ad);
        });
    } else {
        adjList.push(adj)
    }
    req.session.data['access-needs'] = adjList;
    res.redirect('/preferences/review-preferences');
})

router.post("/reset-data/", function (req, res) {
    req.session.data = {};

    res.redirect('/preferences/index');
})

module.exports = router;
