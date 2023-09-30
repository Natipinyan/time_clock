async function getEmp() {
    let response = await fetch('employs/List');
    let data = await response.json();
    console.log(data);
    let s = '<option>select</option>';
    for (let row of data){
        s+=`<option value="${row.id}" >${row.first_name +" "+ row.family_name}</option>`
    }
    document.getElementById("nameEmployee").innerHTML = s;
}
async function intime(){
    let idEmp = document.getElementById("nameEmployee").value;
    let date = new Date();
    let JS = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({"idEmp": `${idEmp}`})
    }
    await fetch('/timechek/in',JS);
    alert("Login has been successfully marked!");
}
async function outTime(){
    let idEmp = document.getElementById("nameEmployee").value;
    let date = new Date();
    let JS = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({"idEmp": `${idEmp}`})
    }
    console.log(JS);
    await fetch('/timechek/out',JS);
    alert("The exit was marked successfully!");
}
getEmp();
