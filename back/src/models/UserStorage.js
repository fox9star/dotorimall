"use strict";

class UserStorage {
    static #users ={
        id:["fox9","love","boss"],
        pw:["1052","1052","1052"],
        name: ["이현성","강병민","이경용"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers,field)=> {
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys =Object.keys(users);
        const userInfo = usersKeys.reduce((newUser,info)=>{
            newUser[info] = users[info][idx];
            return newUser;
        },{});

        return userInfo;
    }
}



module.exports = UserStorage;