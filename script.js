let switchBtn= document.querySelector("#switchBtn");
let bodyRef= document.querySelector("body");
//---------------- dark Mode 
switchBtn.addEventListener("click",function () {
    bodyRef.classList.toggle("dark");
    console.log('hello')
});
