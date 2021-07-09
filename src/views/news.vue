<template>

  <v-container id="app">
    <!-- 상단 공백 -->
    <v-row >
      <v-col cols="12" >
        <div class="void" >
        </div>
      </v-col>
    </v-row >

    <v-sheet
    class="mx-auto"
    elevation="10"
    max-width="1500"
    dark
    style="background-color:black;"
    >
      <v-slide-group
        v-model="model"
        class="pa-4"
        show-arrows
      >
        <v-slide-item
          v-for="slide in slides"
          :key="slide"
          v-slot="{ active, toggle }"
        >
          <v-card
            :color="active ? 'red' : 'white'"
            class="ma-4"
            height="220"
            width="310"
            @click="toggle"
          >
              <v-img
                width="310px"
                height="160px"
                :src="slide.img"
              >
              </v-img>
              <h3 class="black--text">{{slide.title}}</h3>  
          </v-card>
        </v-slide-item>
      </v-slide-group>
  </v-sheet>
    
<!--     
        <v-sheet
    class="mx-auto"
    elevation="10"
    max-width="1500"
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      show-arrows
    >
          <v-slide-item
            v-for="slide in slides"
            :key="slide"
            v-slot="{ active, toggle }"
          >
            <v-card
            :color="active ? 'red' : 'black'"
            class="ma-5 "
            max-height="500px"
            width="310px"
            @click="toggle"
            >
            <v-img
              width="auto"
              height="auto"
              :src="slide.img"
            >
            </v-img>
            <h3 class="white--text align-end">{{slide.title}}</h3>
          </v-card>
            </v-slide-item>
          </v-slide-group>
          </v-sheet> -->

  
   
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
          {title:'넷플릭스 국내 OTT 점유율 50% 근접..', to:"" ,syno:'blabla... ',img:'http://k.kakaocdn.net/dn/BWu0e/btq8TQ3UtMm/bYMONTGXVk2tt8WM68nUN0/img.jpg'},
          {title:'크루엘라', to:"" ,syno:'blabla',img:'http://k.kakaocdn.net/dn/BWu0e/btq8TQ3UtMm/bYMONTGXVk2tt8WM68nUN0/img.jpg'},
          {title:'귀멸의칼날', to:"" ,syno:'blabla',img:'http://k.kakaocdn.net/dn/BWu0e/btq8TQ3UtMm/bYMONTGXVk2tt8WM68nUN0/img.jpg'},
          {title:'컨져링3', to:"" ,syno:'blabla',img:'http://k.kakaocdn.net/dn/BWu0e/btq8TQ3UtMm/bYMONTGXVk2tt8WM68nUN0/img.jpg'},
          {title:'콰이어트플레이스2', to:"" ,syno:'blabla',img:'http://k.kakaocdn.net/dn/BWu0e/btq8TQ3UtMm/bYMONTGXVk2tt8WM68nUN0/img.jpg'},
          {title:'오늘점심', to:"" ,syno:'돈까스',img:'http://k.kakaocdn.net/dn/BWu0e/btq8TQ3UtMm/bYMONTGXVk2tt8WM68nUN0/img.jpg'},
          {title:'베놈2', to:"" ,syno:'blabla... ',img:'http://k.kakaocdn.net/dn/BWu0e/btq8TQ3UtMm/bYMONTGXVk2tt8WM68nUN0/img.jpg'},
          {title:'베놈2', to:"" ,syno:'blabla... ',img:'http://k.kakaocdn.net/dn/BWu0e/btq8TQ3UtMm/bYMONTGXVk2tt8WM68nUN0/img.jpg'}
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

.three{
  display: inline;
}




</style>