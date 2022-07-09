
let key = document.querySelectorAll("#keys>div");
for(let i=0; i<key.length; i++){
    key[i].addEventListener("click", myCal);   
}
let bag="";

function myCal(event){
    let target=event.target.innerText;
    if(target=="C"){
        document.querySelector("#display").innerText="0";
        bag="";
    }else if(target=="="){
        if(bag===""){
            document.querySelector("#display").innerText=0;
        }else{
            let res=eval(bag);
            document.querySelector("#display").innerText=res;
        }
        
    }else{
        bag=bag+target;
        document.querySelector("#display").innerText=bag;
    }

}
