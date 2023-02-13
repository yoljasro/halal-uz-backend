const Request = require("../models/request")

const createRequestController = async (req, res) => {
    try {
      console.log(req.body); 
      const { name, email, password } = req.body;
  
      const candidate = await User.findOne({ email });
  
       
      if (candidate)
        return res.status(400).json({message: 'Email already exits'});
  
    //   const hashPassword = await bcrypt.hash(password, 12);
  
      const newRequest = {
        email,
        password , 
        name
      }
  
      const request = await new Request(newRequest).save();
  
      res.status(201).json({message: 'Request sended', data: request});
    } catch (e) {
      console.log(e.message);
      res.status(500).json({message: 'Server error'});
    }
  };
  
  module.exports = {
    createRequestController
  } 