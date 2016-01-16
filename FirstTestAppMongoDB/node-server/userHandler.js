/**
 * Created by Hasan on 1/11/2016.
 */
var mongoose = require('mongoose');

var User = mongoose.model('User', {
    name: String,
    age: String,
    dob: String,
    email: String,
    password: String,
    status: String
});

module.exports.getUsers = function (req, res) {

    User.find(function (err, users) {
        if (err) {
            console.log(err);
        }
        res.json(users);

    });
}

module.exports.saveUser = function (req, res) {
    User.find({email: req.body.email}, function (err, newUser) {
        if (err) {
            res.send(err);
        }
        if (newUser.length == 0) {
            User.create({
                    name: req.body.name,
                    age: req.body.age,
                    dob: req.body.dob,
                    email: req.body.email,
                    password: req.body.password,
                    status: req.body.status
                },
                function (err, user) {
                    if (err) {
                        res.send(err);
                        console.log(err);
                    }
                    User.find({email: req.body.email}, function (err, newUser) {
                        if (err) {
                            res.send(err);
                        }
                        //console.log(res);
                        console.log("newUser: " + newUser);
                        res.json(newUser);
                    });
                });

        }
        else{
            console.log("Matching record found");
            res.json("false");
        }

    });
}

module.exports.deleteUser = function (req, res) {

    User.remove({
        _id: req.params.user_id
    }, function (err, user) {
        if (err) {
            res.send(err);
        }
        User.find(function (err, users) {
            if (err) {
                res.send(err)
            }
            res.json(users);
        });
    });

}
