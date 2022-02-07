const User = require('../models/userModel')

const getUsers = async(req, res)=>{
    try{
        const users = await User.find({})
        return res.status(201).send(users)
    }
    catch(e)
    {
        return res.status(500).send(e)
    }
}

const getUser = async(req, res)=>{
    const _id = req.params.id;
    
      try {
        const user = await User.findById(_id);
        if (!user) {
          return res.status(400).send();
        }
        res.send(user);
      } catch (e) {
        res.status(500).send(e.message);
      }
    
}

const addUser = async(req, res)=>{
    const user = new User(req.body)
    try{
        
        await user.save()
        const token = await user.generateAuthToken()
        return res.status(201).send({user, token})
    }
    catch(e){
        return res.status(400).send(e)
    }
}

// const updateUser = async(req, res)=>{
//     const updates = Object.keys(req.body)
//     const allowedKey = ['name', 'email', 'password']
//     const isValidkey = updates.every(update=> allowedKey.includes(update))

//     if(!isValidkey){
//         return res.status(400).send('invalid output')
//     }
//     try{
//         updates.forEach(update => {
//             req.user[update] = req.body[update]
//         })
//         await req.user.save()
//         return req.user.user;
//     }
//     catch(e){
//         return res.status(500).send(e)
//     }
// }

const updateUser = async(req, res)=>{
    const {userid , updateduser} = req.body

    User.findByIdAndUpdate(userid , {
        name : updateduser.name ,
        email : updateduser.email , 
        password : updateduser.password
    } , (err)=>{

        if(err){
            console.log(userid);
            return res.status(400).send(err);
           
        }
        else{
           return res.send('User details updated successfully')
        }

    })
}



const userLogin = async(req, res)=>{
    try{
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        return res.status(200).send({user, token})
    }
    catch(e){
        return res.status(500).send(e)

    }
}

const deleteUser = async (req, res) => {
    try {
        // const user = await User.findByIdAndDelete(req.user._id)
        req.user.remove()
        res.send(req.user)


    } catch (e) {
        res.status(500).send()
    }
}

const deleteUserFromList  = async(req, res)=>{
    try{
        await User.findByIdAndRemove(req.body.userid)
        return res.status(200).send('user Deleted')
    }
    catch(err){
        return res.status(400).send(err)
    }
}
// const updateUser  = async(req, res)=>{
//     const {userid , updateduser} = req.body
// }

module.exports={
    addUser, 
    getUsers, 
    getUser, 
    updateUser, 
    userLogin, 
    deleteUser, 
    deleteUserFromList
}