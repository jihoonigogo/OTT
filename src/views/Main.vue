<template>
  <v-container class="" fluid>
    <!-- 웹 캐러셀 --> 
        <video autoplay loop class="mainvideo" >
          <source src="../assets/witchers2.mp4" type="video/mp4"/>
        </video>
     <!-- <v-carousel
      cycle
      height="65vh"
      hide-delimiters
      show-arrows-on-hover
      id="mainCarousel"
     >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      class="carousel-item"
    >
        <v-row >
         <v-col md="9" sm="12" id="movieInfoBanner" >
        <img :src="slide.img" >
         </v-col>
         <v-col md="3" sm="12" class="white--text  intro">
           <div>
          <h1><strong>{{slide.title}}</strong></h1>
           <br/>
          <h3>줄거리 </h3>
          <h5 class="mb-5">
            {{slide.syno}}
          </h5>
          <a href="/moviereview" id="detailLink">상세보기</a>
          <v-btn dark type="button" to="/movieReview" class="detailBtn"> 상세정보 </v-btn>
           </div>
      </v-col>
        
        </v-row>
      
    </v-carousel-item>
  </v-carousel> -->

  <v-content>
    <v-row>
      <v-col cols="12">
        <v-sheet
        class="netRec ma-8"
        elevation="8"
        max-width="92vw"
        dark
        >
         <h1 class="font-weight-black">박스오피스 TOP7</h1>
         <v-slide-group
          v-model="netList"
          class="pa-5"
          
          show-arrows
         >
          <v-slide-item
            class="card-item"
            v-for="(slide,i) in slides"
            :key="slide"
            v-slot="{ active, toggle }"
          >
            <v-card
            :color="active ? 'red' : 'black'"
            class="ma-5 cards"
            max-height="300px"
            width="280px"
            @click="toggle"
            to="/"
            hover
            >
            <h1 style="right:-18%; color:black;">{{i+1}}</h1>
            <v-img
              class="white--text align-end"
              width="150px"
              height="240px"
              :src="slide.img"
            >
              <!-- <v-card-title class="cards-title">{{slide.title}}</v-card-title> -->
            </v-img>
            
          </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
    </v-row>
  </v-content>
  <h3 class="white--text ml-5 font-weight-black">실시간 검색 순위</h3>
  <v-row justify="center">
    <!-- <v-col cols="12" md="12">
      <v-sparkline
      class="line"
    :value="value"
    :gradient="gradient"
    :smooth="radius || false"
    :padding="padding"
    :line-width="width"
    :stroke-linecap="lineCap"
    :gradient-direction="gradientDirection"
    :fill="fill"
    :type="type"
    :auto-line-width="autoLineWidth"
    auto-draw
  ></v-sparkline>
    </v-col> -->
    <v-col cols="3">
      <v-card>
        <h1 class="white--text">
          123213
        </h1>
      </v-card>
    </v-col>
  </v-row>
  </v-container>
</template>

<script>
 const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'red', 'red'],
    ['puredrple', 'red'],
    ['#00c6ff', 'red', '#FF0'],
    ['#f72047', 'red', 'red'],
  ]
export default {
  data: () => ({
    wavList:null,
    watList:null,
      model: 0,
        videos: [
          {id:1,title:'blackwidow',video:'@/assets/blackwidow.mp4'}
        ],
        slides: [
          {title:'베놈2', to:"" ,syno:'blabla... ',img:'https://cdn.eyesmag.com/content/uploads/posts/2021/02/17/disney-cruella-new-poster-emma-stone-1-d28a46b1-8f9f-49ab-b405-7efaf62d55c2.jpg'},
          {title:'크루엘라', to:"" ,syno:'blabla',img:'https://cdn.ilyoseoul.co.kr/news/photo/202004/384931_301204_3429.jpg'},
          {title:'귀멸의칼날', to:"" ,syno:'blabla',img:'https://cdn.eyesmag.com/content/uploads/posts/2021/02/17/disney-cruella-new-poster-emma-stone-1-d28a46b1-8f9f-49ab-b405-7efaf62d55c2.jpg'},
          {title:'컨져링3', to:"" ,syno:'blabla',img:'https://www.sports-g.com/wp-content/uploads/2018/12/%EC%98%81%ED%99%94-%EC%8A%A4%ED%8C%8C%EC%9D%B4%EB%8D%94%EB%A7%A83-%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg'},
          {title:'콰이어트플레이스2', to:"" ,syno:'blabla',img:'https://img.hankyung.com/photo/202106/01.26629700.1.jpg'},
          {title:'오늘점심', to:"" ,syno:'돈까스',img:'https://t1.daumcdn.net/thumb/R720x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/6idc/image/XIuGoXWxOpHLJpctmWaRW7g2MKc.jpeg'},
          {title:'베놈2', to:"" ,syno:'blabla... ',img:'https://cdn.eyesmag.com/content/uploads/posts/2021/02/17/disney-cruella-new-poster-emma-stone-1-d28a46b1-8f9f-49ab-b405-7efaf62d55c2.jpg'},
         ],
         width: 3,
      radius: 10,
      padding: 8,
      lineCap: 'round',
      gradient: gradients[5],
      value: [1,10,0,10,0,0,0,5,10,0],
      gradientDirection: 'tob',
      gradients,
      fill: false,
      type: 'trend',
      autoLineWidth: false,
      }
  ),
    methods: {
      
    }
}
</script>

<style scoped>
@media screen and (min-width:769px) {
#detailLink{
  display: none;
}
#mobileCarousel{
  display: none;
}  
#mainCarousel{
  margin-bottom: 10px;
  position: relative;
  width: 100vw;
  height: 50vh;
}
#mainCarousel img{
  height: 60vh;
  width: 30vw;
  position: absolute;
  top: 10%;
  left: 30%;
  /* transform-origin: 50% 50% -500px; */
  /* outline: 1px solid transparent;
  position: absolute;
  width: 1200px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px dashed white;
  background-color: rgba(0,0,0,0.9); */
}
/* .carousel-item:nth-child(1){
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
} */

.carousel-item{
  /* position: absolute; */
  display: flex;
  align-items: center;
  justify-content: center;
}

  


/* 영화 제목 및 시놉시스 */
.intro{
  position:absolute;
  /* color: red; */
  width:30vw;
  height: 30vh;
  background-color: black;
  align-self: center;
  right: 10%;
  padding-right: 30px;
}
/* 영화 정보 팝업  */
.detailBtn{
  background-color: gray;
  border-radius: 5px;
  height: 30px;
  width: 90px;
}

/* 추천목록 */
.netRec{
  background-color: rgba(22, 22, 22,0.5);
  /* border: solid 1px white; */
  margin-bottom: 10px;
  padding: 0px;
  top: -10%;
}
.card-item{
    margin: 30px;
    transform-style: preserve-3d;
    perspective: 700px;
    animation: spin 3s infinite linear;
    
}
.cards{
    display: flex;
    margin: 30px;
    transform-style: preserve-3d;
    perspective: 700px;
    animation: spin 5s infinite linear;
    /* background-color: black; */
    margin: 0px;
    padding: 0px;
    
}
/* .cards-title{
    transform: translateZ(10px);
    text-align: center;
    font-weight: normal;
    background-color: black;
    margin: 0px;
    padding: 0px;
    position: relative;
} */
.cards h1{
    font-size: 12em;
    width: 140px;
    height: 200px;
    margin:0px;
    /* top: -55%; */
    transform: translateZ(1px);
    position: relative;
    /* border: 3px solid; */
    -webkit-text-stroke: gray 3px;    
    /* background-color: green; */

}
/* .line {
  transform: translateZ(20px);
  animation: spin 1s;
} */
@keyframes spin {
   from{
    transform: rotateY(-20deg);
  }to{
    transform: rotateY(20deg);
  }
    
}
}
.mainvideo{
  position: relative;
  max-height: 90vh;
  top:0%;
  width: 100%;
  object-fit: fill;
  overflow: hidden;
}
/* .mainvideo video{
  position: absolute;
  width: 100%;
  object-fit: fill;
  max-height: 50vh;
} */




/* 모바일 */
@media screen and  (max-width:768px) {
*{
  display: inline;
}
#mainCarousel {
  top: 10%;
}
#mainCarousel img{
  height: 50vh;
  width: 70vw;
  position: absolute;
  top: 10%;
  left:16%;
  /* transform-origin: 50% 50% -500px; */
  /* outline: 1px solid transparent; */
}
.intro{
  /* color: red; */
  width: 100%;
  height: 5vh;
  background-color: black;
   text-align: center;
  /* padding-right: 30px; */
  font-size: 12px;
  margin: 0px;
  padding: 0px;
  bottom:10%;
  position: absolute;
}
.detailBtn{
  color: white;
  padding: 0px;
  margin: 0px;
}
.v-btn {
  padding: 0px;
  margin: 0px;
  /* background-color: blue; */
  display: none;
}
#detailLink{
  font-size: 12px;
  color: white;
  background-color: red;
  border-radius: 5px;
}
.intro h3,h5{
  display: none;
}
.v-card {
  width: 120px;
  height: 180px;
}
.v-card img{
  height: 180px;
}

.netRec{
  background-color: black;
  border: solid 1px white;
  margin-bottom: 10px;
  padding: 0px;
}
.watRec,.wavRec {
  display: none;
}
/* 최근 게시물 목록 */
.recentReview,.recentBoard, .recentNews {
  height: 260px;
  background-color: black;
  margin-bottom: 10px;
  color: white;
  border: 1px white solid;
}
}
</style>