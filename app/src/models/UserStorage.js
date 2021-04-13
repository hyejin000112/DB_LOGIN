"use strict";

const fs = require('fs').promises;

class UserStorage {

  static #getUserInfo(data,id){
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const userInfo = Object.keys(users).reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    },{});
    return userInfo;
  }


  static getUsers(...fields) {




    // const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {//users에 해당하는 키값이 있는지 질의.

        newUsers[field] = users[field];
        // console.log(newUsers,field);
      }
      return newUsers;
    }, {});
    // console.log(newUsers);
    return newUsers;
  } //https://www.youtube.com/watch?v=x_h2bye9SIE    이해안감 한번더 봐야함.


  static getUserInfo(id) {

    return fs
    .readFile("./src/databases/users.json")
    .then((data)=>{
      return this.#getUserInfo(data,id);
      })
    .catch(console.error);
  }



  static save(userInfo){
    // const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    console.log(users);
  }
}

module.exports = UserStorage;