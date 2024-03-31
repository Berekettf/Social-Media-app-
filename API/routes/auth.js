const router= require('express').Router();
const User= require('../models/user')
// register
router.get('/register', async (req, res) => {
  const user = new User({
    username: 'john',
    email: 'beka@gmail.com',
    password: 123455
  })
  await user.save()
  res.send("ok")
    
  });

  // Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists in the database
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Validate the password
    if (user.password !== password) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Login successful
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to perform login' });
  }
});

  


module.exports= router