<template>
 <v-container >
     <v-carousel
    cycle
    hide-delimiter-background
    show-arrows-on-hover
     height="450"
    
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      
    >
     
        <v-row justify="center">
            <v-col cols="2"></v-col>
          <v-col cols="4"> 
            <v-layout 
            class=" white--text text-center intro
             fill--height fill--width" 
            >
                <v-flex align-self-center>
                    <v-sheet class="white--text introTogether text-center" >
                        <p>여기에는 함께봐요 컨텐츠의 주요 정보가 올라갑니다.</p><br/>
                        참가비<br/>
                        일정<br/>
                        위치<br/>
                        비고<br/>
                    </v-sheet>
                </v-flex>
            </v-layout>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="4">
          <v-layout class="text-h2 white--text text-center intro
          fill--height fill--width" >
          <v-flex align-self-center>
           <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    ></v-img>
            <v-btn type="button" right to="/">상세 정보</v-btn>
          </v-flex>
          </v-layout>
            </v-col>
        </v-row>
      
    </v-carousel-item>
  </v-carousel>
    <v-row>
        <v-col cols="4">
            <v-sheet class="white--text introTogether text-center" >
                여기에는 함께봐요 카테고리의 소개글이 올라갑니다<br/>
                함께봐요 란 영화에서 다루어지는 소재 또는 영화 테마를 토대로<br/> 
                온라인 및 오프라인 공간에서 이루어지는 활동입니다.
            </v-sheet>
        </v-col>
      <v-col cols="6">
        <v-row>
          <v-card
            v-for="n in 20"
            :key="n"
            class="mx-auto ma-10"
            max-width="400"
            id="togetherCard"
           
          >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>심야식당 요리교실</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-3 font-weight-black">참가비 10,000원</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>심야식당 시즌1 고양이밥편</div>

      <div>가츠오부시와 쇼유로 고양이밥을 만들어봐요</div>
    </v-card-text>

    <v-card-actions>
      <div
        class="orange--text"
      >
        홍대입구 2번출구 백종원요리교실
      </div>

      <div
      class="green--text ml-8"
      >
         8월 6일 일요일
      </div>
    </v-card-actions>
  </v-card>
        </v-row>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
export default {
data: () => ({
    
        slides: [
          {title:'베놈2', to:"" ,syno:'blabla',src:'./tthum.jpg'},
          {title:'크루엘라', to:"" ,syno:'blabla'},
          {title:'귀멸의칼날', to:"" ,syno:'blabla'},
          {title:'컨져링3', to:"" ,syno:'blabla'},
          {title:'콰이어트플레이스2', to:"" ,syno:'blabla'},
        ]
      }
  )
}
</script>

<style scoped>
/* #togetherCard {
    border-radius: 30px;
} */
.introTogether{
    background-color: black;
}
.intro{
  position:relative;
  /* color: red; */
  width:340px;
  height: 500px;
  background-color: black;
}
</style>