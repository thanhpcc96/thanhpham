'use strict';
const User= require('../models').User;

const addUser= (username,email)=>{
    return User.create({
        username: username,
        email: email
    });
}

