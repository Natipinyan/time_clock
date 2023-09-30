let raw_data=[];
let srchTerm="";

function CreateTble(){
    let str="";
    for(let line of raw_data){
        str+="<tr>";
        str+="<td>"+line.id+"&nbsp&nbsp&nbsp&nbsp</td>";
        str+="<td>"+line.first_name+"&nbsp&nbsp&nbsp&nbsp</td>";
        str+="<td>"+line.family_name+"&nbsp&nbsp&nbsp&nbsp</td>";
        str+="<td>"+line.phone+"&nbsp&nbsp&nbsp&nbsp</td>";
        str+=`<td><button onclick="deleteLine(${line.id});">delete</button></td>`;
        str+="</tr>";
    }
    document.getElementById("mainTable").innerHTML=str;
}
async function getList() {
    let response = await fetch('employs/List');
    let data = await response.json();
    console.log("data=",data);
    raw_data = data;
    CreateTble();
}
async function deleteLine(index) {
    let response = await fetch(`employs/Delete/${index}`,{
        method:'DELETE',
    });
    let responseAll = await fetch(`lWork/DeleteW/${index}`,{
        method:'DELETE',
    });
    getList();
}

getList();