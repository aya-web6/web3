var inputName=document.querySelector(".aya1name").value;
var inputPass=document.querySelector(".aya2pass").value;
var inputEmail=document.querySelector(".aya3email").value;
var btn=document.querySelector(".sign in");
//var first=document.querySelector(".first")

function cal()
{
    let arr=[inputName,inputPass,inputEmail];
    localStorage.setItem("key1",arr);
    
    


}
btn.addEventListener("click",cal);

