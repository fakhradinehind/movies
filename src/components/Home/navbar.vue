<template lang="">
    <div>
        <div class="container">
 <h1>
    <a href="#menu" style="color:#fff;">Click me</a>
 </h1>
    
<div class="popover" id="menu">
 <div class = 'content'>
  <a href="#" class="close"></a>
   <div class = 'nav'>
    <ul class = 'nav_list' style="font-size:30px;">
      
      <div class = 'nav_list_item'>
	  <li>
        <router-link to="/" style="color:#fff">Home</router-link></li>
      </div>
     <div class = 'nav_list_item'>
		<li><router-link to="/signup" style="color:#fff">Sign up</router-link></li>
      </div>
    <div class = 'nav_list_item'>
	  <li><router-link to="/signin" style="color:#fff">Sign In</router-link></li>
      </div>
     <div class = 'nav_list_item'>
		<li><router-link to="" style="color:#fff">Contact</router-link></li>
      </div>
      
	</ul>
  </div>
 </div>
 </div>
 </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="css">
  * {
    margin: 0;
    padding: 0;
}

.container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    scroll-behavior: smooth;
    background: #513252;
    font-family:'Helvetica Neue', sans-serif;
}

h1 router-link {
  font-size: 80px;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
}

.popover {
   display: none;
   box-shadow: 0px 6px 8px rgba(19, 19, 19, .7);
}

.popover:target {
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.popover .content {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 0;
  height: 0;
  color: #fff;
  background-color: #191919;
  animation: 1s grow ease forwards;
  text-align: center;
}

.nav_list  {
  list-style-type: none;
}

.nav_list router-link{
  text-decoration: none;
  font-size: 50px;
  color: #fff;
}

.nav_list_item {
  height: 100%;
  overflow: hidden;
}

.nav_list li {
  padding: 15px 0;
  text-transform: uppercase;
  transform: translateY(200px);
  opacity: 0;
  animation: 2s slideUp ease forwards .5s;
  position: relative;
}

.nav_list li::before {
  content: '';
  position: absolute;
  height: 2px;
  width: 0px;
  left: 0;
  bottom: 10px;
  background: #BF2E97; 
  transition: all .5s ease;
}

.nav_list li:hover:before {
      width: 100%;
}

.popover p {
  padding: 50px;
  opacity: 0;
  animation: 1s fadeIn ease forwards 1s;
}

.popover .close::after {
  right: 0;
  top: 0;
  width: 50px;
  height: 50px;
  position: absolute;
  display: flex;
  z-index: 1;
  font-size: 30px;
  align-items: center;
  justify-content: center;
  background-color: #BF2E97;
  color: #fff;
  content: "??";
  cursor: pointer;
  opacity: 0; 
  animation: 1s fadeIn ease forwards .5s;
}

@keyframes grow {
  100% {
    height: 90%;
    width: 90%;
 }
}

@keyframes fadeIn {
100% {
  opacity: 1;
 }
}

@keyframes slideUp {
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

</style>