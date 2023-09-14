<template>
  <div>
    <div id="clouds">
        <div class="cloud x1"></div>
        <div class="cloud x2"></div>

        <div class="text-center main-bg">
        <div class="m-2 p-3 main-text">
          <h1>Moonstruck Vinyl's</h1>
          <span><cite>Where nostalgia finds it's groove.</cite></span>
        </div>
        <button class="p-2 btn blue-btn"><router-link to="/products" class="btn-text">Shop our Collection</router-link></button>
      </div>
      
        <div class="cloud x3"></div>
        <div class="cloud x4"></div>
        <div class="cloud x5"></div>
      </div>

    <hr>

    <div>
      <h1 class="m-3 text-center heading-text">Featured Products</h1>

      <div class="row m-3 p-2 d-flex justify-content-center media-col">
        <div class="col-3 m-3 p-3 text-center prod-card">
          <img src="https://i.postimg.cc/4x8yCkyW/vinyl-4.png" alt="" class="img-fluid">
          
          <div class="text-center">
            <h4 class="gold-text">Don't Care</h4>
            <cite>Klark Kent</cite> <br> <br>

            <router-link to="/products" class="view-btn">View More</router-link>
          </div>
        </div>
  
        <div class="col-3 m-3 p-3 text-center prod-card">
          <img src="https://i.postimg.cc/KYnh0jsr/vinyl-1.png" alt="" class="img-fluid">

          <div class="text-center">
            <h4 class="gold-text">9 O'Clock</h4>
            <cite>Snips</cite> <br> <br>

            <router-link to="/products" class="view-btn">View More</router-link>
          </div>
        </div>
  
        <div class="col-3 m-3 p-3 text-center prod-card">
          <img src="https://i.postimg.cc/DyT8LPRP/vinyl-2.png" alt="" class="img-fluid">

          <div class="text-center">
            <h4 class="gold-text">Wuthering Heights</h4>
            <cite>Jah Wurzel</cite> <br> <br>

            <router-link to="/products" class="view-btn">View More</router-link>
          </div>
        </div>
      </div>
    </div>

    <hr>

    <div class="row d-flex justify-content-center star-bg">
      <div>
        <h2 class="m-3 p-3 text-center gold-text">Allow Moonstruck Vinyl's to take you on a journey of sound...</h2>
      </div>

      <div class="m-3 p-3 col-5 text-center">
        <h3 class="pb-3 heading-text">Learn About Us: </h3>
        <button class="p-2 btn blue-btn"><router-link to="/about" class="btn-text">Here !</router-link></button>
      </div>

      <div class="m-3 p-3 col-5 text-center">
        <h3 class="pb-3 heading-text">Or Get in Contact: </h3>
        <button class="p-2 btn blue-btn"><router-link to="/about" class="btn-text">Yay !</router-link></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
}

.main-text {
  font-family: 'Montserrat Alternates', sans-serif;
}

.main-text h1 {
  font-size: 500%;
}

.heading-text {
  font-family: "Archivo Black", sans-serif;
}

.gold-text {
  color: #ffd700;
  font-family: "Montserrat Alternates", sans-serif;
}

.main-bg {
  padding: 30px;
}

.star-bg {
  background-image: url('https://i.postimg.cc/tC6TPGSj/other-stars.png');
  background-repeat: no-repeat;
  background-position: fixed;
  background-size: cover;
  background-attachment: fixed;
}

.btn-text {
  text-decoration: none;
  color: #FFD700;
}

.blue-btn {
  background: #010111;
  border: 3px solid #FFD700;
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}

.blue-btn:hover {
  box-shadow: 0 0 30px 5px #FFD700;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

.view-btn {
  text-decoration: none;
  color: #f4f4f4;
}

.view-btn:hover {
  color: #FFD700
}

.prod-card {
  background: #0A192F;
  border: 2px solid #FFD700;
  border-radius: 10px;
}

#clouds {
  padding: 100px 0;
  background-image: url('https://i.postimg.cc/tC6TPGSj/other-stars.png');
  background-repeat: no-repeat;
  background-position: fixed;
  background-size: cover;
  background-attachment: fixed;
  background: -webkit-linear-gradient(top, #010111 0%, #f4f4f4 100%);
  background: -o-linear-gradient(top, #010111 0%, #f4f4f4 100%);
  background: -moz-linear-gradient(top, #010111 0%, #f4f4f4 100%);
}

.cloud {
  width: 200px;
  height: 60px;
  background: #f4f4f4;
  border-radius: 200px;
  -moz-border-radius: 200px;
  -webkit-border-radius: 200px;
  position: relative;
}

.cloud:before, .cloud:after {
  content: '';
  position: absolute;
  background: #f4f4f4;
  width: 100px;
  height: 80px;
  position: absolute;
  top: -15px;
  left: 10px;
  border-radius: 100px;
  -moz-border-radius: 100px;
  -webkit-border-radius: 100px;
  -webkit-transform: rotate(30deg);
  transform: rotate(30deg);
  -moz-transform: rotate(30deg);
}

.cloud:after {
  width: 120px;
  height: 120px;
  top: -55px;
  left: auto;
  right: 15px;
}

.x1 {
  animation: moveclouds 15s linear infinite;
  -webkit-animation: moveclouds 15s linear infinite;
	-moz-animation: moveclouds 15s linear infinite;
	-o-animation: moveclouds 15s linear infinite;
}

.x2 {
	left: 200px;
	
	-webkit-transform: scale(0.6);
	-moz-transform: scale(0.6);
	transform: scale(0.6);
	opacity: 0.6;
	
	
	animation: moveclouds 25s linear infinite;
	-webkit-animation: moveclouds 25s linear infinite;
	-moz-animation: moveclouds 25s linear infinite;
	-o-animation: moveclouds 25s linear infinite;
}

.x3 {
	left: -250px; top: -200px;
	
	-webkit-transform: scale(0.8);
	-moz-transform: scale(0.8);
	transform: scale(0.8);
	opacity: 0.8; 
	
	animation: moveclouds 20s linear infinite;
	-webkit-animation: moveclouds 20s linear infinite;
	-moz-animation: moveclouds 20s linear infinite;
	-o-animation: moveclouds 20s linear infinite;
}

.x4 {
	left: 470px; top: -250px;
	
	-webkit-transform: scale(0.75);
	-moz-transform: scale(0.75);
	transform: scale(0.75);
	opacity: 0.75;
	
	animation: moveclouds 18s linear infinite;
	-webkit-animation: moveclouds 18s linear infinite;
	-moz-animation: moveclouds 18s linear infinite;
	-o-animation: moveclouds 18s linear infinite;
}

.x5 {
	left: -150px; top: -150px;
	
	-webkit-transform: scale(0.8);
	-moz-transform: scale(0.8);
	transform: scale(0.8);
	opacity: 0.8;
	
  animation: moveclouds 20s linear infinite;
	-webkit-animation: moveclouds 20s linear infinite;
	-moz-animation: moveclouds 20s linear infinite;
	-o-animation: moveclouds 20s linear infinite;
}

@keyframes moveclouds {
	0% {margin-left: 1000px;}
	100% {margin-left: -1000px;}
}
@-webkit-keyframes moveclouds {
	0% {margin-left: 1000px;}
	100% {margin-left: -1000px;}
}
@-moz-keyframes moveclouds {
	0% {margin-left: 1000px;}
	100% {margin-left: -1000px;}
}
@-o-keyframes moveclouds {
	0% {margin-left: 1000px;}
	100% {margin-left: -1000px;}
}

@media screen and (max-width: 685px) {
  .media-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .prod-card {
    width: 90%;
  }

  .main-text h1 {
  font-size: 300%;
}
}

@media screen and (max-width: 410px) {
  .main-text h1 {
    font-size: 200%;
  }

  div>span>cite {
    font-size: 12px;
  }
}
</style>