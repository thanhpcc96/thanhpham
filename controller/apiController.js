const users=[
    {username:'Thanh Pham', age: 19},
    {username: 'Bui Duc Chieu', age: 20}
];
const _fetchUser=()=>{
    return user;
}

const _addUser=(user)=>{
    users.push(user);
}

const _getUsers=(req,res)=>{
    const model={
        users:_fetchUser()
    }
    res.status(200).json(model);

}

const _createUser=(req,res)=>{
    const user={
        username: 'Nguyen Hao', age: 20 // fake data
    }
    _addUser(user);
    res.status(200).json(user);
}


// const _indexUser=(username)=>{
//     users.forEach(function(user){
//         return user.username;
//     });
// }

exports.getUsers= _getUsers;
exports.createUser=_createUser;