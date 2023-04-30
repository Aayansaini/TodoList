import React from "react";

function AddList() {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <table class="table text-light">
                <thead>
                  <tr>
                    <th scope="col">Sno</th>
                    <th scope="col">Item Title</th>
                    <th scope="col">Item Discription</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody id="tableBody">
                  <tr>
                    <th scope="row">1</th>
                    <td>Get Some Drink!</td>
                    <td>You need drink as you are a coder.</td>
                    <td>
                      <button className="btn btn-sm btn-danger">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddList;
