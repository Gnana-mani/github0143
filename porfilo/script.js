var name=document.getElementById("name").value;
var email=document.getElementById("email").value;
var message=document.getElementById("message").value;
function localstorage(){
    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
    localStorage.setItem("message",message);
}   
document.querySelector("form").addEventListener("submit",function(event){
    event.preventDefault();
    localstorage();
    alert("Your message has been sent successfully!");
}); 
getname=localStorage.getItem("name");
getemail=localStorage.getItem("email");
getmessage=localStorage.getItem("message");
console.log(getname);
console.log(getemail);
console.log(getmessage);
document.getElementById("name").value=getname;
document.getElementById("email").value=getemail;
document.getElementById("message").value=getmessage;    

