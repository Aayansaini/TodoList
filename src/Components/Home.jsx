import React from "react";
import AddList from "./AddList";
import "../Components/Script";

function Home() {
  return (
    <>
      <div className="section section-box1">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 my-5">
              <div class="mb-3">
                <label
                  for="exampleInputEmail1"
                  id="title"
                  class="form-label text-light"
                >
                  Title Of The Day 👀
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text text-light">
                  Kindlly Write your Today's Task!
                </div>
              </div>
              <div class="input-group">
                <span class="input-group-text">With Desciption</span>
                <textarea
                  class="form-control"
                  id="description"
                  aria-label="With textarea"
                ></textarea>
              </div>
              <br />
              <button type="submit" id="add" class="btn btn-success">
                Add to list
              </button>
            </div>
            <AddList />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
