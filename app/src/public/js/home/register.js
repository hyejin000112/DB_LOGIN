"use strict";

  const id = document.querySelector("#id"),
        name = document.querySelector('#name'),
        psword = document.querySelector("#psword"),
        confirmPsword = document.querySelector("#confirm-psword"),
        registerBtn = document.querySelector("#button");

// console.log('hello register');
registerBtn.addEventListener('click',register);

function register(){
    if(!id.value) return alert('아이디를 입력해주세요.');
    if(psword.value !== confirmPsword.value){
        return alert("비밀번호가 일치하지 않습니다.");
    }
    
    const req ={
        id : id.value,
        name:name.value,
        psword:psword.value,
    };
    console.log(req);

    fetch('/register',{
        method:"POST", //POST방식으로 데이터 전달.
        headers:{
            "Content-Type" : "application/json" //보내는 데이터타입이 JSON이라는걸 의미
         },
        body : JSON.stringify(req)
    })
    .then((res)=> res.json())
    .then((res)=> {
        if(res.success){
            location.href = '/login';
        }else{
            alert(res.msg);
        }
    }).catch((err)=>{
        console.error(('회원가입 중 에러 발생'))
    })
}
