"use strict";

  const id = document.querySelector("#id"),
        psword = document.querySelector("#psword"),
        loginBtn = document.querySelector("#button");


loginBtn.addEventListener('click',login);

function login(){
    const req ={
        id : id.value,
        psword:psword.value,
    };

    fetch('/login',{
        method:"POST", //POST방식으로 데이터 전달.
        headers:{
            "Content-Type" : "application/json" //보내는 데이터타입이 JSON이라는걸 의미
         },
        body : JSON.stringify(req)
    })
    .then((res)=> res.json())
    .then((res)=> {
        if(res.success){
            alert ('짠');
            location.href = '/';
        }else{
            alert(res.msg);
        }
    }).catch((err)=>{
        console.error(('로그인 중 에러 발생'))
    })
}
