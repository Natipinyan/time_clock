async function getcats() {
    let response = await fetch('employs/List');
    let data = await response.json();
    console.log(data);
    let s = '';
    for (let row of data){
        s+=`<option value="${row.id}" >${row.first_name}</option>`
    }
    document.getElementById("nameEmployee").innerHTML = s;
}
getcats();

