let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();

    let obj={
        name:form.name.value,
        id:form.employeeID.value,
        dept:form.department.value,
        exp:form.exp.value,
        mail:form.email.value,
        mob:form.mbl.value,
    }
empData(obj);
})

function empData(data){
    let row=document.createElement("tr");

    let name=document.createElement("td");
    name.innerText=data.name;

    let id=document.createElement("td");
    id.innerText=data.id;

    let dept=document.createElement("td");
    dept.innerText=data.dept;

    let exp=document.createElement("td");
    exp.innerText=data.exp;

    let mail=document.createElement("td");
    mail.innerText=data.mail;

    let mob=document.createElement("td");
    mob.innerText=data.mob;

    let role=document.createElement("td");
    let roleText=roleCheck(data.exp);
    role.innerText=roleText;

    let del=document.createElement("td");
    del.innerText="Delete";
    del.addEventListener("click", function(event){
        event.target.parentNode.remove();
    })

    document.querySelector("tbody").append(row);
    row.append(name,id,dept,exp,mail,mob,role, del)
    
}

function roleCheck(exp){
    if(exp>5){
        return "Senior";
    }else if(exp<=5 && exp>=2){
        return "Junior";
    }else if(exp<=1){
        return "Trainee";
    }
}

