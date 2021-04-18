"use strict";

const db = require("../config/db");

class UserStorage {

  static getUserInfo(id) {
    //query안에 변수를 넣는것은 보안상에 안좋다고함.

    return new Promise((resolve,reject)=>{
      const query = "SELECT * FROM users where id = ?";
      db.query(query,[id],(err,result)=>{
        if(err) reject(`${err}`);
        resolve(result[0]);
      })
    })
    

  }



  static async save(userInfo){
    return new Promise((resolve,reject)=>{
      const query = "INSERT INTO users(id,name,psword)values(?,?,?);";
      db.query(query,
        [userInfo.id,userInfo.name,userInfo.psword],(err)=>{
        if(err) reject(`${err}`);
        resolve({success:true});
      })
    })

  }
}

module.exports = UserStorage;