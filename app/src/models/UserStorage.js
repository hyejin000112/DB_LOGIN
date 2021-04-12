"use strict";

class UserStorage {

  static #users = { //#을 붙이면 private 역할을함(은닉화)
    id: ['woorimIT', '나개발', "김팀장"],
    psword: ["1234", "1234", "123456"],
    name: ["우리밋", "나개발", "김팀장"]
  }



  static getUsers(...fields) {




    const users = this.#users;
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
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const userInfo = Object.keys(users).reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    },{});
    return userInfo
  }

  static save(userInfo){
    const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    console.log(users);
  }
}

module.exports = UserStorage;