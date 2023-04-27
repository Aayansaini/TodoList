import React from 'react'

function Header() {
  return (
    <>
    <nav class="navbar">
  <form class="container-fluid justify-content-between me-3">
    <button class="btn btn-outline-warning" type="button">Clear List</button>
    <button class="btn  btn-outline-warning" type="button">Records</button>
    <h1 class="text-light">TODO'S LIST 📋</h1>
  </form>
</nav>
    </>
  )
}

export default Header