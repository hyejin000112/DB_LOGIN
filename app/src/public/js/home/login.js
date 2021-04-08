"use strict";

  const id = document.querySelector("#id"),
        psword = document.querySelector("#psword"),
        loginiBtn = document.querySelector("button");


loginiBtn.addEventListener('click',login);

function login(){
    const req ={
        id : id.value,
        psword:psword.value,
    };

    fetch('/login',{
        method:"POST", //POST방식으로 데이터 전달.
        headers:{
            "Content_Type" : "application/json" //보내는 데이터타입이 JSON이라는걸 의미
        },
        body: JSON.stringify(req)
    });
}
