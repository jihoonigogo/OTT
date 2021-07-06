<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="2 searchDiv" >
        <form action="" class="movieSearch align-center">
          <input type="text" placeholder="제목으로 검색해보세요">
            <button type="button"><v-icon></v-icon></button>
        </form>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4" offset="2">
      </v-col>
    </v-row>
    <v-row justify="">
      <!-- <v-col cols="2"></v-col> -->
       <v-col
      cols="4"
      class="py-2"
      offset="2"
    >
   
      <v-btn-toggle dark
        v-model="text"
        color="white"
        id="listFilter"
        group
      >
        <v-btn value="left">
          전체
        </v-btn>

        <v-btn value="center">
          영화
        </v-btn>

        <v-btn value="right">
          TV프로그램
        </v-btn>
      </v-btn-toggle>
    </v-col>
    <!-- <v-col cols="2"></v-col> -->
    <v-col cols="1" offset="3" >
      <div class="text-center">
    <v-menu>
      <template v-slot:activator="{ on, attrs }" dark>
        <v-btn
          dark
          v-bind="attrs"
          v-on="on"
          class="ml-8"
        >
          필터 ▼
        </v-btn>
      </template>


      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
    </v-col>
    </v-row>

    <v-row >
      <v-col cols="8" offset="2">
        <v-row>
          <v-card
            v-for="n in 100"
            :key="n"
            class="mx-auto ma-10"
            max-width="200"
            max-height="230"
            id="togetherCard"
            @click="toggle"
            to="/movieReview"
          >
              <v-img
                class="white--text align-end"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
              <v-card-title class="justify-center align-center">title</v-card-title>
             </v-img>
            <v-card-subtitle class="font-weight-black rateMovie">평점</v-card-subtitle>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
      data: () => ({
      items: [
        { title: '이름 순' },
        { title: '장르 별' },
        { title: '연도 별' },
        { title: '저하늘의 별' },
      ],
    }),
}
</script>

<style scoped>
.rateMovie{
  padding: 2px;
}
.movieSearch{
  height: 370px;
  display: inline-flex;
}
.movieSearch input{
  background-color: white;
  border-radius: 5px;
  padding: 4px;
  margin:2px;
}
.searchDiv{
  text-align-last: center;
}
#togetherCard{
  background-color: grey lighten-1;
}
#listFilter button{
  border-radius: 5px;
}
.icons img{
  width: 40px;
  height: 40px;
  /* border-radius: px black solid; */
}
.icons {
  background-color: rgba(255, 255, 255 ,0.1);
  border-radius: 3px white solid;
}
</style>