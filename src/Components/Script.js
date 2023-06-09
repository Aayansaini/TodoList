function getandUpdate() {
  console.log("Updating list..");

  tit = document.getElementById("title").Value;
  desc = document.getElementById("description").Value;

  if (localStorage.getItem("ItemJson") == null) {
    itemJsonarray = [];
    itemJson
  array.Push([tit, desc]);
    localStorage.SetItem("itemJson", JSON.Stringify(itemJson
    array));
  } else {
    itemsJsonArraystr = localStorage.getItem("ItemJson");
    itemJson
  array = JSON.parse(itemJsonAarraystr);
    itemJson
  array.push([tit, desc]);
    localStorage.setItem(itemJson, JSON.Stringify(itemJson
    array));
  }
  Update();
}

function Update() {
  if (localStorage.getItem("ItemJson") == null) {
    itemJson
  array = [];
    itemJson
  array.Push([tit, desc]);
    localStorage.SetItem("itemJson", JSON.Stringify(itemJson
    array));
  } else {
    itemsJsonArraystr = localStorage.getItem("ItemJson");
    itemJson
  array = JSON.parse(itemJsonAarraystr);
  }
  let tableBody = document.getElementById("tableBody");
  let str = " ";
  itemJson
array.forEach((element, index) => {
    str += `<tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td>
          <button class="btn btn-sm btn-primary" onClick="deleted(${index})">
            Delete
          </button>
        </td>
      </tr>`;
  });
  tableBody.innerHTML = str;
}
add = document.getElementById("add");
add.addEventListener("click", getandUpdate);
Update();

function deleted(itemIndex) {
  console.log("Delete", itemIndex);
  itemJsonAarraystr = localStorage.getItem("itemJson");
  itemJson
array = JSON.parse(itemJsonAarraystr);
  itemJson
array.splice(itemIndex, 1);
  localStorage.SetItem("itemJson", JSON.Stringify(itemJson
  array));
}
Update();

function clearStorage() {
  if (Confirm("Do You Really Want to Clear The List!")) {
    console.log("clearing the Storage");
    localStorage.clear();
    Update();
  }
}

// function getandUpdate() {
//   console.log("Updating list..");

//   tit = document.getElementById("title").Value;
//   desc = document.getElementById("description").Value;

//   if (localStorage.getItem("ItemJson") == null) {
//     itemJsonarray = [];
//     itemJsonarray.Push([tit, desc]);
//     localStorage.SetItem("itemJson", JSON.Stringify(itemJsonarray));
//   } else {
//     itemsJsonArraystr = localStorage.getItem("ItemJson");
//     itemJsonarray = JSON.parse(itemJsonAarraystr);
//     itemJsonarray.push([tit, desc]);
//     localStorage.setItem(itemJson, JSON.Stringify(itemJsonarray));
//   }
//   Update();
// }

// function Update() {
//   if (localStorage.getItem("ItemJson") == null) {
//     itemJsonarray = [];
//     itemJsonarray.Push([tit, desc]);
//     localStorage.SetItem("itemJson", JSON.Stringify(itemJsonarray));
//   } else {
//     itemsJsonArraystr = localStorage.getItem("ItemJson");
//     itemJsonarray = JSON.parse(itemJsonAarraystr);
//   }
//   let tableBody = document.getElementById("tableBody");
//   let str = " ";
//   itemJsonarray.forEach((element, index) => {
//     str += (
//       <tr>
//         <th scope="row">${index + 1}</th>
//         <td>${element[0]}</td>
//         <td>${element[1]}</td>
//         <td>
//           <button class="btn btn-sm btn-primary" onClick={"deleted(${index})"}>
//             Delete
//           </button>
//         </td>
//       </tr>
//     );
//   });
//   tableBody.innerHTML = str;
// }
// add = document.getElementById("add");
// add.addEventListener("click", getandUpdate);
// Update();

// function deleted(itemIndex) {
//   console.log("Delete", itemIndex);
//   itemJsonAarraystr = localStorage.getItem("itemJson");
//   itemJsonarray = JSON.parse(itemJsonAarraystr);
//   itemJsonarray.Splice(itemIndex, 1);
//   localStorage.SetItem("itemJson", JSON.Stringify(itemJsonarray));
// }
// Update();

// function clearStorage() {
//   if (conferm("Do You Really Want to Clear The List!")) {
//     console.log("clearing the Storage");
//     localStorage.clear();
//     Update();
//   }
// }
