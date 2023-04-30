function getandUpdate() {
  console.log("Updating list..");

  tit = document.getElementById("title").Value;
  desc = document.getElementById("description").Value;

  if (localStorage.getItem("ItemJson") == null) {
    itemJsonAarray = [];
    itemJsonAarray.Push([tit, desc]);
    localStorage.SetItem("itemJson", JSON.Stringify(itemJsonAarray));
  } else {
    itemsJsonArraystr = localStorage.getItem("ItemJson");
    itemJsonAarray = JSON.parse(itemJsonAarraystr);
    itemJsonAarray.push([tit, desc]);
    localStorage.setItem(itemJson, JSON.Stringify(itemJsonAarray));
  }
  Update();
}

function Update() {
  if (localStorage.getItem("ItemJson") == null) {
    itemJsonAarray = [];
    itemJsonAarray.Push([tit, desc]);
    localStorage.SetItem("itemJson", JSON.Stringify(itemJsonAarray));
  } else {
    itemsJsonArraystr = localStorage.getItem("ItemJson");
    itemJsonAarray = JSON.parse(itemJsonAarraystr);
  }
  let tableBody = document.getElementById("tableBody");
  let str = " ";
  itemJsonAarray.forEach((element, index) => {
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
  itemJsonAarray = JSON.parse(itemJsonAarraystr);
  itemJsonAarray.splice(itemIndex, 1);
  localStorage.SetItem("itemJson", JSON.Stringify(itemJsonAarray));
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
//     itemJsonAarray = [];
//     itemJsonAarray.Push([tit, desc]);
//     localStorage.SetItem("itemJson", JSON.Stringify(itemJsonAarray));
//   } else {
//     itemsJsonArraystr = localStorage.getItem("ItemJson");
//     itemJsonAarray = JSON.parse(itemJsonAarraystr);
//     itemJsonAarray.push([tit, desc]);
//     localStorage.setItem(itemJson, JSON.Stringify(itemJsonAarray));
//   }
//   Update();
// }

// function Update() {
//   if (localStorage.getItem("ItemJson") == null) {
//     itemJsonAarray = [];
//     itemJsonAarray.Push([tit, desc]);
//     localStorage.SetItem("itemJson", JSON.Stringify(itemJsonAarray));
//   } else {
//     itemsJsonArraystr = localStorage.getItem("ItemJson");
//     itemJsonAarray = JSON.parse(itemJsonAarraystr);
//   }
//   let tableBody = document.getElementById("tableBody");
//   let str = " ";
//   itemJsonAarray.forEach((element, index) => {
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
//   itemJsonAarray = JSON.parse(itemJsonAarraystr);
//   itemJsonAarray.Splice(itemIndex, 1);
//   localStorage.SetItem("itemJson", JSON.Stringify(itemJsonAarray));
// }
// Update();

// function clearStorage() {
//   if (conferm("Do You Really Want to Clear The List!")) {
//     console.log("clearing the Storage");
//     localStorage.clear();
//     Update();
//   }
// }
