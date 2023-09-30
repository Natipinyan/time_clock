async function getList() {
    let idEmp = document.getElementById("nameEmployee").value;
    console.log(idEmp);
    let response = await fetch('lWork/List', {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({idEmp: `${idEmp}`})
    });
    let data = await response.json();
    console.log("data=", data);
    raw_data = data;
    console.log(data);
    CreateTble();
}
async function getcats() {
    let response = await fetch('employs/List');
    let data = await response.json();
    console.log(data);
    let s = '<option>select</option>';
    for (let row of data){
        s+=`<option value="${row.id}" >${row.first_name +" "+ row.family_name}</option>`
    }
    document.getElementById("nameEmployee").innerHTML = s;
}
function CreateTble() {
    let str = "";
    for (let line of raw_data) {
        str += "<tr>";
        str += "<td>" + line.idEmployee + "</td>";
        str += "<td>" + new Date(line.Entry_Date).toLocaleDateString()+ "</td>";
        str += "<td>" + line.Entry_Time + "</td>";
        str += "<td>" + line.Depature_Time +"</td>";
        str+=`<td><button onclick="deleteLine(${line.id});">delete</button></td>`;
        str += "</tr>";
    }
    document.getElementById("mainTable").innerHTML = str;
}
async function deleteLine(index) {
    let response = await fetch(`lWork/Delete/${index}`,{
        method:'DELETE',
    });
    getList();
}
getcats();


