<template>

  <v-container id="app">
    <!-- 상단 공백 -->
      <v-row >
      <v-col cols="12" >
        <div class="void" >
        </div>
      </v-col>
    </v-row >

    <!-- 넷플릭스 공식 예고편 슬라이드 -->
      <v-row   class="dot">
      <v-col cols="8" offset="2" >
        
        <v-carousel
      
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
          <!-- 캐러셀 이미지 -->
         <v-col md="9" sm="12" id="movieInfoBanner" >
        <img :src="slide.img" >
         </v-col>
         <!-- 캐러셀 텍스트 -->
         <v-col md="3" sm="12" class="white--text  intro">
           <div>
          <h5><strong>{{slide.title}}</strong></h5>
           <br/>
          <a href="/moviereview" id="detailLink">상세보기</a>
          <v-btn dark type="button" to="/movieReview" class="detailBtn"> 뉴스보기 </v-btn>
           </div>
      </v-col>
        
        </v-row>
      
    </v-carousel-item>
  </v-carousel>
      </v-col>
      </v-row>
      

     <!-- 뉴스 목록 -->
   <v-row justify="center">
      <v-col cols="8"  >
  <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="calories"
    class="elevation-1"
    dark
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>뉴스</v-toolbar-title>
        
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="green"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              리뷰 등록하기
            </v-btn>
          </template>
          <v-card >
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="4"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.title"
                      label="제목"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="1"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.author"
                      label="작성자"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="1"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.hit"
                      label=" 조회수"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="1"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.date"
                      label="작성일"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="1"
                    sm="6"
                    md="4"
                  >
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">게시글을 삭제하시겠습니까?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">아니오</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">네 삭제합니다</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
      </v-col>
  </v-row>
  </v-container>

</template>

<script>
 export default {
    name: 'App',

    data: () => ({
    slides: [
          {title:'넷플릭스 국내 OTT 점유율 50% 근접..', to:"" ,syno:'blabla... ',img:'https://cdn.eyesmag.com/content/uploads/posts/2021/02/17/disney-cruella-new-poster-emma-stone-1-d28a46b1-8f9f-49ab-b405-7efaf62d55c2.jpg'},
          {title:'크루엘라', to:"" ,syno:'blabla',img:'https://cdn.ilyoseoul.co.kr/news/photo/202004/384931_301204_3429.jpg'},
          {title:'귀멸의칼날', to:"" ,syno:'blabla',img:'https://cdn.eyesmag.com/content/uploads/posts/2021/02/17/disney-cruella-new-poster-emma-stone-1-d28a46b1-8f9f-49ab-b405-7efaf62d55c2.jpg'},
          {title:'컨져링3', to:"" ,syno:'blabla',img:'https://www.sports-g.com/wp-content/uploads/2018/12/%EC%98%81%ED%99%94-%EC%8A%A4%ED%8C%8C%EC%9D%B4%EB%8D%94%EB%A7%A83-%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg'},
          {title:'콰이어트플레이스2', to:"" ,syno:'blabla',img:'https://img.hankyung.com/photo/202106/01.26629700.1.jpg'},
          {title:'오늘점심', to:"" ,syno:'돈까스',img:'https://t1.daumcdn.net/thumb/R720x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/6idc/image/XIuGoXWxOpHLJpctmWaRW7g2MKc.jpeg'},
          {title:'베놈2', to:"" ,syno:'blabla... ',img:'https://cdn.eyesmag.com/content/uploads/posts/2021/02/17/disney-cruella-new-poster-emma-stone-1-d28a46b1-8f9f-49ab-b405-7efaf62d55c2.jpg'},
         ],


      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: '제목',
          align: 'start',
          sortable: false,
          value: 'title',
        },
        { text: '작성자', value: 'author' },
        { text: '조회수', value: 'hit' },
        { text: '작성일', value: 'date' },
        { text: '관리', value: 'actions', sortable: false },
      ],
      desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
          },
        ],
      editedIndex: -1,
      editedItem: {
        name: '',
        author: '',
        hit: 0,
        date: 0,
       
      },
      defaultItem: {
        name: '',
        author: '',
        hit: 0,
        date: 0,
      
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? '리뷰 등록하기' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            title: 'Frozen Yogurt',
            author: 'kim',
            hit: 6,
            date: 24,
            
          },
          {
            title: 'Ice cream sandwich',
            author: 'kim',
            hit: 9,
            date: 37,
            
          },
          {
            title: 'Eclair',
            author: 'kim',
            hit: 1,
            date: 23,
           
          },
          {
            title: 'Cupcake',
            author: 'kim',
            hit: 3,
            date: 67,
            
          },
          {
            title: 'Gingerbread',
            author: 'kim',
            hit: 16,
            date: 49,
            
          },
          {
            title: 'Jelly bean',
            author: 'kim',
            hit: 0,
            date: 94,
            
          },
          {
            title: 'Lollipop',
            author: 'kim',
            hit: 0,
            date: 98,
            
          },
          {
            title: 'Honeycomb',
            author: 'kim',
            hit: 3,
            date: 87,
            
          },
          {
            title: 'Donut',
           author: 'kim',
            hit: 25,
            date: 51,
           
          },
          {
            title: 'KitKat',
            author: 'kim',
            hit: 26,
            date: 65,
            
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>

<style scoped>
#detailLink{
  display: none;
}
#mobileCarousel{
  display: none;
}  
#mainCarousel{
  margin-bottom: 10px;
  position: relative;
  width: 80vw;
  height: 50vh;
}
#mainCarousel img{
  height: 40vh;
  width: 30vw;
  position: relative;
  top: 10%;
  left: 0%;
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
  position:relative;
  /* color: red; */
  width:50vw;
  height: 50vh;
  top:50%;
  background-color: black;
  align-self: center;
  right: 10%;
  padding-right: 30px;
  padding:0px;
  margin-top: 100px;
}
/* 영화 정보 팝업  */
.detailBtn{
  background-color: gray;
  border-radius: 5px;
  height: 30px;
  width: 90px;
}



.col, .row{
    /* background-color: white; */
    color: white;
}
/* .topBoard{
  height: 300px;
  width: 600px;
  display: inline-flex;
  border: 1px white solid;
  margin-bottom: 50px;
} */
.void{
    height: 50px;
}
.hotBoard{
   margin: 0px;
   height: 350px;
}
/* 
.netyou{
  width: 1115px;
  height: 800px;
} */
/* #App iframe{
  width: 100%;
  height: 500px;
} */
.three{
  display: inline;
}





</style>