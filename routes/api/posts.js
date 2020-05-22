const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const Post = require('../../models/Post');
const Profile = require('../../models/Profile');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

// Create post route
router.post(
  '/',
  [
    auth,
    [
      //check all the fields are filled
      check('text', 'Text is required').not().isEmpty(),
      check('title', 'Title is required').not().isEmpty(),
      check('task', 'Task is required').not().isEmpty(),
      check('location', 'Location is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    // Intialize a new instance of ValidationResult
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      //find user by id
      const user = await User.findById(req.user.id).select('-password');
      const newPost = new Post({
        text: req.body.text,
        title: req.body.title,
        task: req.body.task,
        location: req.body.location,
        email: user.email,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      });

      //save post from front-end to database
      const post = await newPost.save((err) => {
        console.log(err);
      });
      res.json(post);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route  POST api/post/me
// @desc   Get posts by current user
// @access Private
router.get('/me', auth, async (req, res) => {
  try {
    const posts = await Post.find({ user: req.user.id });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route  POST api/post/saved
// @desc   Get posts saved by current user
// @access Private
router.get('/saved', auth, async (req, res) => {
  try {
    const posts = await Post.find({ _id: { $in: profiles.favourite } });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//Get all posts from users
router.get('/', auth, async (req, res) => {
  try {
    //find posts and sort in lastest order
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Get post by ID
router.get('/:id', auth, async (req, res) => {
  try {
    //find post by id
    const post = await Post.findById(req.params.id);

    //check post exists
    if (!post) {
      return res.status(404).json({ msg: 'post not found' });
    }

    //sends json response
    res.json(post);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Post not found' });
    }
    res.status(500).send('Server Error');
  }
});

//Delete post
router.delete('/:id', auth, async (req, res) => {
  try {
    //find post by id
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: 'post not found' });
    }

    // Check user is a authorized to delete post or not
    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'user not authorized' });
    }

    //remove post
    await post.remove();

    //send msg
    res.json({ msg: 'Post removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Post not found' });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;
