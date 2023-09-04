<template>
  <div>
    <div class="d-flex align-items-center justify-content-between">
      <div>
        <img src="https://i.postimg.cc/1tsw27hB/dark-cloud.png" alt="cloud" class="img-flip">
      </div>
  
      <div class="text-center">
        <div class="m-2 p-3 main-text">
          <h1>Moonstruck Vinyl's</h1>
          <span><cite>Where nostalgia finds it's groove.</cite></span>
        </div>
        <button class="btn blue-btn">Shop our Collection</button>
      </div>
  
      <div>
        <img src="https://i.postimg.cc/1tsw27hB/dark-cloud.png" alt="cloud" class="">
        <img src="https://i.postimg.cc/1tsw27hB/dark-cloud.png" alt="cloud" class="small-cloud-2">
      </div>
    </div>

    <hr>

    <div>
      <h1>Featured Products</h1>

      <div>
        featured product 1
      </div>

      <div>
        featured product 2
      </div>

      <div>
        featured product 3
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.main-text {
  font-family: 'Montserrat Alternates', sans-serif;
}

.main-text h1 {
  font-size: 50px;
}

.blue-btn {
  background: #0A192F;
  color: #FFD700;
  border: 3px solid #FFD700;
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}

.blue-btn:hover {
  background: #010111;
  color: #FFD700;
  box-shadow: 0 0 30px 5px #FFD700;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

.img-flip {
  transform: scaleX(-1);
}
</style>