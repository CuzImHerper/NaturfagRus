<script setup>
import { RouterLink } from 'vue-router';
import { Icon } from '@iconify/vue';

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
  if (!e.target.matches('.dropbtn')) {
    let myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

</script>

<template>
  <nav id="myNav">
    <div class="logo">
      <RouterLink to="/" class="navbar-brand">
        <img src="./images/drugas.png">
        <p>DRUGAS</p>
      </RouterLink>
    </div>

    <div class="navbar-right">
      <RouterLink to="/"><span>hjem</span></RouterLink>

      <div class="meny dropdown">
        <div class="dropbtn" @click="myFunction()">
          <p class="dropbtn">Meny</p>
          <Icon
            icon="fa6-solid:angle-down"
            class="dropbtn"
            color="#4D878F"
          />
        </div>


        <div class="dropdown-content" id="myDropdown">
          <li>
            <RouterLink to="/alkohol">Alkohol</RouterLink>
          </li>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  background-color: #fff;
  font-family: 'Hubballi', cursive;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .2);
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow-y: hidden;
}

.navbar a:hover,
.dropdown:hover,
.dropbtn:focus {
  background-color: rgba(255, 255, 255, 0.042);
}

.dropdown-content {
  display: none;
  position: absolute;
  top: 7.3%;
  right: 120px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);
  background-color: white;
  min-width: 150px;
  z-index: 1;
}

.dropbtn {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.7rem;
  user-select: none;
}



.dropdown-content li {
  float: none;
  color: rgb(255, 255, 255);
  list-style-type: none;
  padding: 1rem 1rem;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content li a {
  color: rgb(0, 0, 0);
  text-decoration: none;
}

.dropdown-content li:hover {
  background-color: #454545;
}

.show {
  display: block;
}

.logo a img {
  height: 4rem;
  margin-right: 0.5rem;
}

nav a {
  text-decoration: none;
  user-select: none;
}


.p-dropdown-trigger {
  justify-content: flex-start;
}

.meny-knapp {
  cursor: pointer;
  user-select: none;
}

.navbar-brand {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.navbar-brand p {
  font-size: 35px;
  font-weight: 400;
  color: #1F3437;
}

.navbar-right {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 11rem;
  margin-right: 10rem;
  gap: 2rem;
}

.navbar-right span {
  font-size: 20px;
  color: #000;
  padding-bottom: 5px;
  border-bottom: 3px rgb(20, 70, 70) solid;
  font-weight: 400;
  cursor: pointer;
  user-select: none;
}

.meny {
  margin-right: 2rem;
  gap: 6px;
  align-items: center;
  font-size: 20px;
  color: rgb(0, 0, 0);
  cursor: pointer;
}

.meny>p {
  font-size: 20px;
}

.show {
  display: block;
}
</style>