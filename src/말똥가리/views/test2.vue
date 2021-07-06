<template>
  
      <v-row>
          <v-col cols="12">
      <v-sheet
    class="netRec"
    elevation="8"
    width="100vw"
    dark
  ><h3>마블 추천</h3>
    <v-slide-group
      v-model="netList"
      class="pa-5"
      center-active
      show-arrows
      dark
    >
      <v-slide-item
      class="card-item"
        v-for="(slide,i) in slides"
    :key="slide"
        v-slot="{ active, toggle }"
      >
            <v-card
            :color="active ? 'primary' : 'grey lighten-1'"
            
            class="ma-5 cards"
            max-height="200"
            width="280"
            @click="toggle"
            to="/test2"
            >
            <!-- <img dark src="../assets/ranking_1.png"> -->
            <h1>{{i+1}}</h1>
                    <v-img
                class="white--text align-end"
                height="200px"
                width="140px"
                :src="slide.img"
                >
                <v-card-title class="cards-title">{{slide.title}}</v-card-title>
                </v-img>
            </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
          </v-col>
          </v-row>

  
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
          {title:'베놈2', to:"" ,syno:'blabla... ',img:'https://cdn.eyesmag.com/content/uploads/posts/2021/02/17/disney-cruella-new-poster-emma-stone-1-d28a46b1-8f9f-49ab-b405-7efaf62d55c2.jpg'},
         
         ]
    })
}
</script>

<style scoped>

.netRec{
  background-color: black;
  border: solid 1px white;
  margin-bottom: 10px;
  padding: 5px;
  margin: 0px;
  /* justify-content: center;
  align-items: center; */
  
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
    animation: spin 3s infinite linear;
    background-color: black;
    margin: 0px;
    padding: 0px;
}
.cards-title{
    transform: translateZ(10px);
    text-align: center;
    font-weight: normal;
    background-color: black;
    margin: 0px;
    padding: 0px;
    position: relative;
}
.cards h1{
    font-size: 12em;
    width: 140px;
    height: 200px;
}
@keyframes spin {
   0%{
    transform: rotateY(-10deg);
  }100%{
    transform: rotateY(10deg);
  }
    
}
</style>