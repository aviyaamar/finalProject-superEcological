const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const userSchema = mongoose.Schema({
    name:{
        type:String, 
        required: true, 
        trim: true
    }, 
    email:{
        type:String, 
        unique: true, 
        required: true, 
        trim: true, 
        lowercase: true, 
        validate(value) {
            if (!validator.isEmail(value)) {
              throw new Error("email invalid");
            }
          },
    }, 
    password: {
      required:true, 
      type: String,
      minlength: 8,
      trim: true,
      },
      tokens: [{
          token: {
            type: String,
            required: true,
          },
        }],
    isAdmin:{
          requirerd: true, 
          type: Boolean,
          default: false 

        }
})

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, "uniqueSentence");
  user.tokens = user.tokens.concat({ token });
  await user.save();

  return token;
};

// userSchema.methods.toJSON = function () {
//     const user = this;
//     const userObject = user.toObject();

//     delete userObject.password;
//     delete userObject.tokens;
//     return userObject;
// } 
userSchema.statics.findByCredentials  = async (email, password) => {
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new Error("Unable to login ");
    }
  
    const isMatch = await bcrypt.compare(password, user.password);
  
    if (!isMatch) {
      throw new Error("Unable to login");
    }
  
    return user;
  };
  
  //* Hash the plain text password before saving
  userSchema.pre("save", async function (next) {
    const user = this;
  
    if (user.isModified("password")) {
      user.password = await bcrypt.hash(user.password, 8);
    }
  
    next();
  });
  const User = mongoose.model("User", userSchema)
module.exports=User