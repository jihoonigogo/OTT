<template>
  <div class="carousel">
    <div class="carousel-item">
    <img src="https://t1.daumcdn.net/thumb/R720x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/6idc/image/XIuGoXWxOpHLJpctmWaRW7g2MKc.jpeg">
    <h3> title</h3>
    </div>
    <div class="carousel-item">
    <img src="https://t1.daumcdn.net/thumb/R720x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/6idc/image/XIuGoXWxOpHLJpctmWaRW7g2MKc.jpeg">
    <h3> title</h3>
    </div> 
    <div class="carousel-item">
    <img src="https://t1.daumcdn.net/thumb/R720x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/6idc/image/XIuGoXWxOpHLJpctmWaRW7g2MKc.jpeg">
    <h3> title</h3>
    </div> 
    <div class="carousel-item">
    <img src="https://t1.daumcdn.net/thumb/R720x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/6idc/image/XIuGoXWxOpHLJpctmWaRW7g2MKc.jpeg">
    <h3> title</h3>
    </div> 
    <div class="carousel-item">
    <img src="https://t1.daumcdn.net/thumb/R720x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/6idc/image/XIuGoXWxOpHLJpctmWaRW7g2MKc.jpeg">
    <h3> title</h3>
    </div> 
    <div class="carousel-item">
    <img src="https://t1.daumcdn.net/thumb/R720x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/6idc/image/XIuGoXWxOpHLJpctmWaRW7g2MKc.jpeg">
    <h3> title</h3>
    </div>   
  </div>  
  
</template>

<script>
export default {

}
</script>

<style scoped>
.carousel{
  transform-style: preserve-3d;
  position: relative;
  width: 100vw;
  height: 50vh;
  animation: spin 100s infinite linear;
}
.carousel-item{
  position: absolute;
  width: 50vw;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px dashed white;
  background-color: rgba(0,0,0,0.9);
}
.carousel-item img{
  height: 50vh;
  width: 45vh;
}
.carousel-item h3{
  font-size: 5em;
  color: white;
}
.carousel-item:nth-child(1){
  transform: rotateY(0deg) translateZ(1200px);
}
.carousel-item:nth-child(2){
  transform: rotateY(60deg) translateZ(1200px);
}
.carousel-item:nth-child(3){
  transform: rotateY(120deg) translateZ(1200px);
}
.carousel-item:nth-child(4){
  transform: rotateY(180deg) translateZ(1200px);
}
.carousel-item:nth-child(5){
  transform: rotateY(240deg) translateZ(1200px);
}
.carousel-item:nth-child(6){
  transform: rotateY(300deg) translateZ(1200px);
}

@keyframes spin {
  from{
    transform: rotateY(0deg);
  }to{
    transform: rotateY(360deg);
  }
  
}
</style>