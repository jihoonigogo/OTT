<template>
  <v-app>
    <v-container fluid class="pa-0 ma-0" app >
      <!-- 홈버튼 -->
      <v-row class="header">
        <div class="col-md-1">
          <a href="/" id="gohome">
        AAC
          </a>
        </div>
        <div class="col-md-2">
          <a href="/movielist" class="menu white--text">
        리뷰
          </a>
        </div>
        <div class="col-md-2">
          <a href="/board" class="menu white--text">
        게시판
          </a>
        </div>
        <div class="col-md-2">
          <a href="/news" class="menu white--text">
        뉴스
          </a>
        </div>
        <div class="col-md-2">
          <a href="/test" class="menu white--text">
        함께봐요
          </a>
        </div>
        <!-- <v-col md="2" sm="6" id="col1" >
          <div class="gohome" >
              <a dark href="/" id="gohome"  
              class="red--text font-weight-black pa-3">
              AAC
              </a>
            </div>
        </v-col> -->
        
        <!-- 웹 탭바 -->
        <!-- <v-col md="8" id="col2" >
        <v-tabs class="header mx-auto" 
        background-color="rgba(0,0,0,0.1)" 
        color="white" id="tabs"
        >
        <v-tabs-slider color="rgba(255, 0, 0,1)"></v-tabs-slider> 
          <v-tab  v-for="item in items"
              :key="item.id"
              class="no-gutters  offset-2  font-weight-black white--text" id="tabItem" 
              :to="item.to"
              >
            {{item.title}}
          </v-tab>
          </v-tabs>
        </v-col> -->
        <!-- 언어변경 -->
            <v-col
            class="col-md-2">
                <v-select >
                
                </v-select>
            </v-col>
            <!-- 로그인 다이얼로그 -->
            <v-col
            class="col-md-1">
          <div class="login">
            <v-btn
            to="/" 
            id="login"
            class=" font-weight-black">
                <v-icon>mdi-account-circle</v-icon>
            </v-btn>
          </div>
        </v-col>
        <!-- 모바일 로그인버튼 -->
        <!-- <v-spacer></v-spacer> -->
        <!-- <v-col id="col4" sm="6">
           <div class="">
            <v-btn  
            to="/" 
            id="mLogin"
            class=" ">
               <v-icon>mdi-account-circle</v-icon>
            </v-btn>
            <v-btn 
             id="mMenu" 
             @click.stop="drawer = !drawer">
              <v-icon>mdi-format-list-bulleted-square</v-icon>
            </v-btn>
          </div>
        </v-col> -->
      </v-row>

      <!-- 모바일 버티컬탭 -->
      <v-row >
        <v-col sm="12" id="mTabs">
        <v-tabs vertical v-if="drawer"
        background-color="rgba(0,0,0,0)" 
        color="white" id="tabs"
        >
        <v-tabs-slider color="rgba(0, 0, 0,1)"></v-tabs-slider> 
          <v-tab  v-for="item in items"
              :key="item.id"
              class="no-gutters white--text" id="tabItem" 
              :to="item.to"
              >
            {{item.title}}
          </v-tab>
          </v-tabs>
        </v-col>
      </v-row>
        
<!-- 모바일 상단 -->
      <!-- <div>
        <div class="white--text margin-0">AAC</div>
          <ul>
            <li><a href="/">리뷰</a></li>
            <li><a href="/">게시판</a></li>
            <li><a href="/">뉴스</a></li>
            <li><a href="/">순위</a></li>
            <li><a href="/">로그인</a></li>
          </ul>
      </div> -->
       


       <v-main class="">  
    
        <router-view class="pa-0 ma-0"/>
    
  </v-main> 
  </v-container> 
</v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
    
  },
 
  data: () => ({
    //
    
    items: [
          { id:1,title: '리뷰', to:'/movieList' },
          { id:2,title: '게시판', to:'/board'},
          { id:3,title: '뉴스', to:'/news'},
          { id:4,title: '함께 봐요', to:'/test' },
          ],
        right: null,
        state:false,
        drawer:null
  }),
  // methods:{
  //   mobiletab(state){
  //    state === true
  //   }}
  
};
</script>
<style>

@media screen and (min-width:769px) {
  * {
  box-sizing: border-box;
  font-family: 'Bebas Neue';
} 
#mobileHeader{
  display: none;
}  
.container{
  display: inline;
  background-color: rgba(0,0,0,1);
}
.row{
  display: flex;
  margin: 0px;
}
.header {
  margin: 0px;
  padding: 0px;
  width: 100%;
  position: fixed;
  /* display:ab; */
  top: 0;
  left: 0;
  z-index: 3;
}
.menu{
  font-size: 2em;
  font-weight: 900;
  
}
#gohome {
  width: 100%;
  height: 20px;
  padding: 0px;
  margin-left: 20px;
  font-size: 3em;
  font-weight:900;
  color: red;
}
/* .gohome {
  color: red;
  padding: 0px;
   height: 100px;
   left: 30%;
} */
.col-md-2.login{
  padding: 7px;
  text-align: center; 
  margin-top:0;
  /* background-color:rgba(0, 0, 255, 0)  !important;
    
    border-color: rgba(0, 0, 255, 1); */
    border: none;
    outline: 0;
    margin: -2px;
    
}
/* .col-md-2.gohome{
  padding-top: 0px;
} */

#login{
  font-size: 35px;
  font-weight:900;
 
  background-color: rgba(0, 0, 0, 1);
  color: white;
}
#tabItem{
  font-size: 25px;
  font-weight:900;
}
a { text-decoration:none;
 /* padding: 3px; */
 } 
 .mLogin,#col4,#mTabs{
   display: none;
 }
.lang2{
  /* left: -20%; */
 width:120px;
}  
.header .col-md-2{
  padding-left: 0px;
  padding-right: 0px;
  text-align: center;
}


}
/*  모바일 */
@media screen and (max-width:768px) {
  * {
  box-sizing: border-box;
  font-family: 'Bebas Neue';
} 
.container{
  /* display: inline; */
  
  background-color: rgba(0,0,50,1);
}
.header {
  /* margin: 0px; */
  /* margin-bottom: 5px; */
  padding: 0px;
  width: 100%;
  position:relative;
  display:none;
  /* top: -70%; */
  left: -15%;
  /* z-index: 3; */
}
a{
  text-decoration: none;
}
#col1,#col2,#col4{
  margin: 0px;
  padding-top: 10px;
  padding-bottom: 0px;
  /* padding: 12px; */
}
#col3{
  display: none;
}
#col4{
  text-align: end;
}
#mLogin{
  height:20px;
  width: 20px;
  font-size: 10px;
  /* right:-80px; */
  /* color: white; */
  background-color: black;
  border: none;
  padding: 0px;
  color: white;
}
/* .mLogin{
  background-color: black;
} */
.v-btn__content{
  background-color: black;
  
}
#mMenu{
  height:20px;
  width: 20px;
  padding: 0px;
  color: white;
}
#tabItem{
  font-size: 0.7em;
  margin: 0px;
  padding: 0px;
  width:auto;
}
#col2{
  padding: 0px;
  display: none;
  }
#mTabs{
  margin: 0px;
  padding: 0px;
  width: 100%;
  position:relative;
  display:flex;
  /* top: -70%; */
 align-items: center;
}
#tabs{
  margin: 0px;
  padding: 0px;
}
#col1,#col4{
  height: 8vh;
}
#gohome{
  font-size: 20px;
}

}
</style>