//let son = 1;
let txt;
document.getElementById('button').addEventListener('click', ()=>{
  
     //son+=1;
     let li = document.createElement('li');
     txt = document.getElementById('input').value;
     if(txt === ""){
        return;
     }
     else {
     li.innerHTML = txt;
     document.getElementById("ul").appendChild(li);

     document.getElementById("input").value = "";
     }
})


