import  db  from '../models/index';

const userController = {};

userController.post= (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);
//validation

const user = new db.User({
    username,
    password
});
user.save().then((newUser) => {
res.status (200).json({
    success: true,
    data: newUser,
});
}).catch((err) => {
    res.status(500).json({
        message: err,
    });
});
};
export default userController;