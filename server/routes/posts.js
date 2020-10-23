const express = require('express');
const router = express.Router();
const PostController = require('../controllers/PostController');

router.get('/', PostController.getAllPosts);
router.get('/:id', PostController.getSinglePost);
router.post('/', PostController.createPost);

module.exports = router;