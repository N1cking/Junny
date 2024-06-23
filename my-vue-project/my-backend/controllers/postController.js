const Post = require('../models/Post');

exports.createPost = async (req, res) => {
    const { title, content } = req.body;
    try {
        const post = new Post({ title, content, author: req.user.username });
        await post.save();
        res.status(201).json({ message: 'Post created successfully', post });
    } catch (error) {
        res.status(400).json({ message: 'Error creating post', error });
    }
};

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });
        res.json(posts);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching posts', error });
    }
};

exports.addComment = async (req, res) => {
    const { postId, comment } = req.body;
    try {
        const post = await Post.findById(postId);
        if (!post) return res.status(404).json({ message: 'Post not found' });

        post.comments.push({ comment, author: req.user.username });
        await post.save();
        res.json({ message: 'Comment added successfully', post });
    } catch (error) {
        res.status(400).json({ message: 'Error adding comment', error });
    }
};
