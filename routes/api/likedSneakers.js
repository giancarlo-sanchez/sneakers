const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require("../../db/models");

const {check, validationResult} = require('express-validator');

const { requireAuth } = require("../../auth");


const router = express.Router();
// router.use(requireAuth);



router.get("/", asyncHandler(async (req, res) => {
    const likedSneaker = await db.LikedSneaker.findAll({
        include: [db.User, db.Sneaker]
    });
    res.json({
        likedSneaker
    });
}));

module.exports = router;
