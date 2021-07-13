<template>
  <v-container  >
    <v-row>
      <v-col cols="11" class="mx-auto">
        <v-card class="" style="padding:0; margin:0; border-radius:30px;">
          <v-img
            class="white--text"
            height="120px"
            src="https://cdn.pixabay.com/photo/2016/05/11/13/20/keyboard-1385706_960_720.jpg"
            style="border-radius:10px;"
          >
            <v-card-title>채팅방</v-card-title>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-row style="text-align:center; margin-top:50px;">
      <v-col col="10" offset="1" >
        <!-- 채팅방이름 ,참여인원수변수 , 클릭이벤트 -->
        <v-card class="chatroom " >
          <v-img
            class="white--text"
            height="240px"
            src="https://cdn.pixabay.com/photo/2016/05/11/13/20/keyboard-1385706_960_720.jpg"
            style="border-top-left-radius:20px; border-top-right-radius:20px;"
          >
          비트컴퓨터1
          </v-img>
            <div class="d-inline-flex">
              <v-icon class="icon">mdi-account-circle</v-icon>
              <h4>number</h4>
              <button type="button" >
                입장하기
              </button>
            </div>
        </v-card>
        <v-card class="chatroom " >
          <v-img
            class="white--text"
            height="240px"
            src="https://cdn.pixabay.com/photo/2016/05/11/13/20/keyboard-1385706_960_720.jpg"
            style="border-top-left-radius:20px; border-top-right-radius:20px;"
          >
          비트컴퓨터1
          </v-img>
            <div class="d-inline-flex">
              <v-icon class="icon">mdi-account-circle</v-icon>
              <h4>number</h4>
              <button type="button" >
                입장하기
              </button>
            </div>
        </v-card>
        <v-card class="chatroom " >
          <v-img
            class="white--text"
            height="240px"
            src="https://cdn.pixabay.com/photo/2016/05/11/13/20/keyboard-1385706_960_720.jpg"
            style="border-top-left-radius:20px; border-top-right-radius:20px;"
          >
          비트컴퓨터1
          </v-img>
            <div class="d-inline-flex">
              <v-icon class="icon">mdi-account-circle</v-icon>
              <h4>number</h4>
              <button type="button" >
                입장하기
              </button>
            </div>
        </v-card>
        <v-card class="chatroom " >
          <v-img
            class="white--text"
            height="240px"
            src="https://cdn.pixabay.com/photo/2016/05/11/13/20/keyboard-1385706_960_720.jpg"
            style="border-top-left-radius:20px; border-top-right-radius:20px;"
          >
          비트컴퓨터1
          </v-img>
            <div class="d-inline-flex">
              <v-icon class="icon">mdi-account-circle</v-icon>
              <h4>number</h4>
              <button type="button" >
                입장하기
              </button>
            </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row >
      <v-col cols="12" >
        <div class="void" style="height:1000px;" >
          
        </div>
        
      </v-col>
    </v-row >  
  </v-container>
</template>


<script>
export default {
  data: () => {
  // slides: [
  //         {title:'베놈2', to:"" ,syno:'blabla... ',img:'https://cdn.eyesmag.com/content/uploads/posts/2021/02/17/disney-cruella-new-poster-emma-stone-1-d28a46b1-8f9f-49ab-b405-7efaf62d55c2.jpg'},
  //         {title:'크루엘라', to:"" ,syno:'blabla',img:'https://cdn.ilyoseoul.co.kr/news/photo/202004/384931_301204_3429.jpg'},
  //         {title:'귀멸의칼날', to:"" ,syno:'blabla',img:'https://cdn.eyesmag.com/content/uploads/posts/2021/02/17/disney-cruella-new-poster-emma-stone-1-d28a46b1-8f9f-49ab-b405-7efaf62d55c2.jpg'},
  //         {title:'컨져링3', to:"" ,syno:'blabla',img:'https://www.sports-g.com/wp-content/uploads/2018/12/%EC%98%81%ED%99%94-%EC%8A%A4%ED%8C%8C%EC%9D%B4%EB%8D%94%EB%A7%A83-%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg'},
  //         {title:'콰이어트플레이스2', to:"" ,syno:'blabla',img:'https://img.hankyung.com/photo/202106/01.26629700.1.jpg'},
  //         {title:'오늘점심', to:"" ,syno:'돈까스',img:'https://t1.daumcdn.net/thumb/R720x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/6idc/image/XIuGoXWxOpHLJpctmWaRW7g2MKc.jpeg'},
  //        ]
  },
  dialog: false,

}
</script>

<style scoped>

.chatroom{
  display: inline-block;
  position: relative;
  margin-right: 130px;
  margin-top: 50px;
  height: 300px;
  width: 300px;
  /* right: -50%; */
  padding: 0px;
  border-radius: 30px;
}

.chatroom button{
  background-color:red; 
  color:white; 
  padding:10px; 
  margin:10px; 
  position: relative;
  right: -50px;
  border-radius: 30px;
}
.chatroom h4{
  top: 17px;
  left: -30px;
  position: relative;
}
.icon {
  left: -35px;
}



</style>