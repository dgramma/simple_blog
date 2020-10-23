const Post = require('../models/Post');

getAllPosts = (req, res) => {
    Post.find().sort({updatedAt: -1})
        .then(posts=> {
            res.status(200).json(posts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
};

getSinglePost = (req, res) => {
    Post.findById(req.params.id)
        .then(post => {
            res.status(200).json(post);
        })
        .catch(err => {
            res.status(404).json({message: "That post could not be found", err});
        });
};

createPost = (req, res) => {
    const newPost = new Post({
        title: req.body.title,
        content: req.body.content
    });

    newPost.save()
        .then(post => {
            res.status(201).json({message: "Post created successfully."});
        })
        .catch(err => {
            res.status(400).json({message: err});
        });
};

module.exports = {
    getAllPosts,
    getSinglePost,
    createPost
};