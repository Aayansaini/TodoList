function getandUpdate(){
    console.log("Updating list..");

    tit = document.getElementById('title').Value;
    desc = document.getElementById('description').Value;

    if(localStorage.getItem('ItemJson')==null){
        itemJsonAarray=[];
        itemJsonAarray.Push([tit,desc]);
        localStorage.SetItem('itemJson',Json.Stringify(itemJsonAarray))
    }
    else{
        itemsJsonArraystr = localStorage.getItem('ItemJson');
        itemJsonAarray=Json.parse(itemJsonAarraystr);
        itemJsonAarray.push([tit,desc]);
        localStorage.setItem(itemJson,JSONStringify(itemJsonAarray))
    }
    Update();
}

function Update(){
let tableBody = document.getElementById("tableBody");
let str = " ";
itemJsonAarray.forEach((element,index)=>{
    str+=
    <tr>
        <th scope="row">${index+1}</th>
        <td>${element[o]}</td>
        <td>${element[1]}</td>
        <td><button class ="btn btn-sm btn-primary" onClick={"delete(${index})"}>Delete</button></td>
    </tr>
}
}

