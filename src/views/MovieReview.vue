<template>
  <v-container fluid class="fill-height">
    <v-row > 
     <v-col cols="10" offset="1"> 
       <div class="banner" >   
       </div>
     </v-col>
    
    </v-row>
    <v-row  class="syno"  align="center" >
       
        <v-col cols="4" id="movieInfoSynop" offset="2"> 
          <div class="synopsis ">
            <h1>베놈2</h1>
            <h4>개봉일 : 2021.09.04</h4>
            <h4>감독 : 샘 레이미</h4>
            <h4>출연 : 톰 하디, 우디 해럴슨</h4>
            <h4>장르 : 액션, 히어로, 미국영화,다크</h4>
            <h3>평점 : 9.9 점 </h3>
            
          </div>
        </v-col>
        
        <v-col cols="4" id="movieInfoStory"> 
           <div class="story"> 
             <h3 align="center">In the film, Brock tries to reignite his journalism career by interviewing serial killer Cletus Kasady (Harrelson), who becomes the host of an alien symbiote similar to Venom named Carnage. Venom was intended to be the start of a new shared universe, and plans for a sequel began during production on the first film.
</h3>
             <!-- <h2 align="center">9.9점</h2> -->
           </div>
        </v-col>
        
    </v-row>


  
  <!-- 리뷰 -->
  <v-row align="center" justify="center" > 
         <div class="reviewLists" > 
            <h3>리뷰 리스트</h3>
         </div>
  </v-row>
  <v-row justify="center">
      <v-col cols="10" >
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
        <v-toolbar-title>리뷰</v-toolbar-title>
        
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
          <v-card dark>
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
    data: () => ({
     lists: [
      { no:1,title:'너무 잼ㅅ어요',author:'김종찬',hit:2,date:'2021-06-21'},
      { no:2,title:'너무 잼ㅅ어요',author:'김춘삼',hit:2,date:'2021-06-21'},
      { no:3,title:'너무 잼ㅅ어요',author:'김덕배',hit:2,date:'2021-06-21'},
      { no:3,title:'너무 잼ㅅ어요',author:'김덕배',hit:2,date:'2021-06-21'}
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
      desserts: [],
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
*{
  color: white;
  box-sizing: border-box;
}
/* .movieInfoBanner {
  height: 800px;
} */
.banner{
    top: 0px;
    margin: 0px;
    width: 1580px;
    height: 700px;
    position:  relative;

  background-image: linear-gradient(
            to bottom,
/* 	 rgba % = 반대방향의 끝0부터 n%까지의		 */
            rgba(0,0, 0, 0) 0%, 
            rgba(0, 0, 0, 0.1) 10%,
            rgba(0, 0, 0, 0.2) 20%,
            rgba(0, 0, 0, 0.4) 80%,
            rgba(0, 0, 0, 1) 100%
          ),url("../assets/qqqq.jpg");
        background-size: 90%;
}


</style>