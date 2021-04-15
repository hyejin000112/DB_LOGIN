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

  static #getUsers(data,isAll,fields){
    // const users = this.#users;
    const users = JSON.parse(data);
    if(isAll) return users;
    console.log(`users : ${users}`)
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {//users에 해당하는 키값이 있는지 질의.

        newUsers[field] = users[field];
        // console.log(newUsers,field);
      }
      return newUsers;
    }, {});
    // console.log(newUsers);
    return newUsers;
  }




  static getUsers(isAll ,...fields) {
    return fs
    .readFile("./src/databases/users.json")
    .then((data)=>{
      return this.#getUsers(data,isAll,fields);
      })
    .catch(console.error);
  } //https://www.youtube.com/watch?v=x_h2bye9SIE    이해안감 한번더 봐야함.


  static getUserInfo(id) {

    return fs
    .readFile("./src/databases/users.json")
    .then((data)=>{
      return this.#getUserInfo(data,id);
      })
    .catch(console.error);
  }



  static async save(userInfo){
    const users = await this.getUsers(true);
     //파라미터를 true로 주면 모든 데이터를 가져옴 true ==="id","psword","name"
     if(users.id.includes(userInfo.id)){
      throw "이미 존재하는 아이디입니다.";
    }
    //데이터 추가
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    fs.writeFile('./src/databases/users.json',JSON.stringify(users));
    return {success : true};


  }
}

module.exports = UserStorage;