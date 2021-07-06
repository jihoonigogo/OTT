<template>
  <v-container >
      <!-- <img src="@/assets/tthum.jpg" alt="main" class="mainimg"  > -->
      <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        :color="colors[i]"
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="text-h2">
            {{ slide }} Slide
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>

    <v-content>
        <div >
            <div class="netCon " >
                <h2 class="white--text"> 넷플릭스 추천 </h2>
                    <div class="recContent">
                       <img src="@/assets/netflix.jpg"  alt="movieList">
                    </div>
                    <div class="recContent">
                     <img src="@/assets/netflix.jpg"  alt="movieList1">
                    </div>
                    <div class="recContent">
                     <img src="@/assets/netflix.jpg"  alt="movieList2">
                    </div>
                    <div class="recContent">
                     <img src="@/assets/netflix.jpg"  alt="movieList3">
                    </div>
                    <div class="recContent">
                     <img src="@/assets/netflix.jpg"  alt="movieList2">
                    </div>
                    <div class="recContent">
                     <img src="@/assets/netflix.jpg"  alt="movieList3">
                    </div>
                    <div class="recContent">
                     <img src="@/assets/netflix.jpg"  alt="movieList2">
                    </div>
                    <div class="recContent">
                     <img src="@/assets/netflix.jpg"  alt="movieList3">
                    </div><div class="recContent">
                     <img src="@/assets/netflix.jpg"  alt="movieList2">
                    </div>
                </div>
        </div>
    </v-content>
     <v-content>
        <div >
            <div class="watCon float-auto" >
                <h2 class="white--text"> 왓차 플레이 추천 </h2>
                    <div class="recContent">
                       <img src="@/assets/netflix.jpg"  alt="movieList">
                    </div>
                    <div class="recContent">
                     <img src="@/assets/netflix.jpg"  alt="movieList1">
                    </div>
                    <div class="recContent">
                     <img src="@/assets/netflix.jpg"  alt="movieList2">
                    </div>
                    <div class="recContent">
                     <img src="@/assets/netflix.jpg"  alt="movieList3">
                    </div>
                    <div class="recContent">
                     <img src="@/assets/netflix.jpg"  alt="movieList2">
                    </div>
                    <div class="recContent">
                     <img src="@/assets/netflix.jpg"  alt="movieList3">
                    </div>
            </div>
        </div>
    </v-content>
     <v-content>
        <div >
            <div class="wavCon float-auto" >
                <h2 class="white--text"> 웨이브 추천 </h2>
                    <div class="recContent">
                       <img src="@/assets/netflix.jpg"  alt="movieList">
                    </div>
                    <div class="recContent">
                     <img src="@/assets/netflix.jpg"  alt="movieList1">
                    </div>
                    <div class="recContent">
                     <img src="@/assets/netflix.jpg"  alt="movieList2">
                    </div>
                    <div class="recContent">
                     <img src="@/assets/netflix.jpg"  alt="movieList3">
                    </div>
            </div>
        </div>
    </v-content> 
    <br /> 
    <v-content class="col-md-4 chatRoom">
    <div class="liveChat" >
      <textarea type="text" class="white--text" placeholder="메세지를 입력하세요"></textarea>
      <button type="button" class="white--text">전송 </button>
    </div>
    </v-content>

      </v-container>
</template>

<script>
export default {
    data () {
      
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },
  }
</script>

<style>


</style>