<template>
  <div class="carousel">
    <div class="carousel-item"
    v-for="slide in slides"
    :key="slide">
        <img :src="slide.img">
        <h1>{{slide.title}}</h1><br/>
        
        <h3>{{slide.syno}}</h3>
    </div>   
  </div>  
  
</template>

<script>
export default {
    data: ()=> ({
        slides: [
          {title:'베놈2', to:"" ,syno:'blabla... ',img:'https://cdn.eyesmag.com/content/uploads/posts/2021/02/17/disney-cruella-new-poster-emma-stone-1-d28a46b1-8f9f-49ab-b405-7efaf62d55c2.jpg'},
          {title:'크루엘라', to:"" ,syno:'blabla',img:'https://cdn.ilyoseoul.co.kr/news/photo/202004/384931_301204_3429.jpg'},
          {title:'귀멸의칼날', to:"" ,syno:'blabla',img:'https://cdn.eyesmag.com/content/uploads/posts/2021/02/17/disney-cruella-new-poster-emma-stone-1-d28a46b1-8f9f-49ab-b405-7efaf62d55c2.jpg'},
          {title:'컨져링3', to:"" ,syno:'blabla',img:'https://www.sports-g.com/wp-content/uploads/2018/12/%EC%98%81%ED%99%94-%EC%8A%A4%ED%8C%8C%EC%9D%B4%EB%8D%94%EB%A7%A83-%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg'},
          {title:'콰이어트플레이스2', to:"" ,syno:'blabla',img:'https://img.hankyung.com/photo/202106/01.26629700.1.jpg'},
          {title:'오늘점심', to:"" ,syno:'돈까스',img:'https://t1.daumcdn.net/thumb/R720x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/6idc/image/XIuGoXWxOpHLJpctmWaRW7g2MKc.jpeg'},
         ]
    })
}
</script>

<style scoped>
.carousel{
  transform-style: preserve-3d;
  position: relative;
  width: 100vw;
  height: 50vh;
  animation: spin 200s infinite linear;
  /* perspective: 700px; */
}
.carousel-item{
  position: absolute;
  width: 100vw;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid black;
  background-color: rgba(0, 0, 0, 0.2);
  /* animation: bannerAni 1.6s ; */
}
@keyframes bannerAni {
  0%{
    transform: rotateY(-20deg);
  }100%{
    transform: rotateY(20deg);
  }
  
}

.carousel-item img{
  height: 45vh;
  width: 45vh;
}
.carousel-item h1{
  font-size: 3em;
  color: white;
  transform: translateZ(100px);
}
.carousel-item h3{
  
  color: white;
}
.carousel-item:nth-child(1){
  transform: rotateY(0deg) translateZ(80vw);
}
.carousel-item:nth-child(2){
  transform: rotateY(60deg) translateZ(80vw);
}
.carousel-item:nth-child(3){
  transform: rotateY(120deg) translateZ(80vw);
}
.carousel-item:nth-child(4){
  transform: rotateY(180deg) translateZ(80vw);
}
.carousel-item:nth-child(5){
  transform: rotateY(240deg) translateZ(80vw);
}
.carousel-item:nth-child(6){
  transform: rotateY(300deg) translateZ(80vw);
}

@keyframes spin {
  from{
    transform: rotateY(0deg);
  }to{
    transform: rotateY(360deg);
  }
  
}
</style>