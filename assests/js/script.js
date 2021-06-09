
var data=[];
var ajax=  new XMLHttpRequest();
ajax.open("GET","https://jsonplaceholder.typicode.com/users");
ajax.send();
var plus = '';  
ajax.onreadystatechange =function(){
    if (ajax.readyState ==4 && ajax.status == 200){
        data =JSON.parse(ajax.response);
        
        for (var i=0; i< data.length; i++ ){
            
            plus += `
            <div class = "container" >
             <div  class= "result">
               <div  onClick="done( ${data[i].id});" class="imgs" > <p> UserName: ${data[i].username} </p></div>
               <p>   Email: ${data[i].email} <p>
               <p>   Name: ${data[i].name}<p>
            

            </div>
            </div>
             `
        }
       document.getElementById("start").innerHTML= plus;
    }
}
function done (x){

  
    var personData='';
    var ajax = new XMLHttpRequest();
    ajax.open("GET","https://jsonplaceholder.typicode.com/users/"+ x);
    ajax.send();
    ajax.onreadystatechange =function(){
        if (ajax.readyState ==4 && ajax.status == 200){
            personData =JSON.parse(ajax.response);
            var final = 
            ` 
            <div >
            <p> website: ${personData.website}</p>
               
            <p>  call :${personData.phone}</p>
            
            </div>`;
            
            document.getElementById("start").innerHTML += final;}
}
};
