<template>
  <div class="header-box">
    <div>
        <header class="h-box">
          <div class="h-logo">
              <router-link tag='div' class="tab-item" to="/main" @click="changePage(2)" :class="{active:choosePage===2}"><img src="~assets/imgs/fanshao/logo.png" alt="Logo"></router-link>
          </div>
          <div class="h-title">
            
              <router-link tag='div' class="tab-item" to="/manage" @click="changePage(1)" :class="{active:choosePage===1}">后台管理系统</router-link>
          </div>
         
             <!-- <router-link tag='div' class="tab-item" to="/manage" @click="changePage(1)" :class="{active:choosePage===1}">管理平台</router-link> -->
             <!-- <router-link tag='div' class="tab-item" to="/main" @click="changePage(2)" :class="{active:choosePage===2}">直播前台</router-link> -->
         
          <div class="h-aside">
             <router-link tag='div' class="tab-item person" to="/login" @click="changePage(3)" :class="{active:choosePage===3}"><img src="~assets/imgs/fanshao/user.png" alt="登陆"></router-link>
             <router-link tag='div' class="tab-item buy" to="/message" @click="changePage(4)" :class="{active:choosePage===4}"><img src="~assets/imgs/fanshao/message.png" alt="购买"></router-link> 
          </div>
        </header>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
   export default{
       data(){
           return{
            user:{},
            choosePage:1
           }
       },
       methods:{
          changePage(v){   //监控导航栏的变化
             this.choosePage=v;
          },
           // 通过路由改变导航文字样式
          getPage(){
            if(this.$toute.path === '/'||this.$route.path === '/manage'){
               this.changePage(1) 
            }
            else if(this.$route.path === '/main'){
               this.changePage(2)
            }
            else if(this.$route.path === '/login'){
               this.changePage(3)
            }
            else if(this.$route.path === '/message'){
               this.changePage(4)
            }
            else{

            }
          } 
       }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .header-box{
      position fixed
      background:#242F42;
      background-image: -webkit-linear-gradient(#000, #242F42);
      background-image: linear-gradient(#000, #242F42);
      width:100vw;
      height: 90px;
      margin: 0 auto;
      margin-top:-60px;margin-left:-1vw;
      z-index: 30;
  }
  header{
    display flex
    justify-content space-between
    align-items center
    height:100%
    color:white
  }
   .h-title
      flex 0 0 80%
      flex-grow:1
      height: 100%
      text-align:left  
      font-size:1.8rem
      div 
        margin-top:2vh
        margin-left:1vw
        cursor:pointer
        &:hover
          color:#2EA9DF
   .h-logo
      flex:0 0 5%;
      display flex
      justify-content center
      align-content center
      text-align:center  
      font-size:1.2rem
      div
        margin-top:2vh
        margin-left:1vw
        cursor:pointer
        &:hover
          color:#2EA9DF
        img 
          height:40px;
   .h-aside
      flex:0 0 15%;
      display flex
      justify-content center 
      align-content center 
      text-align center
      font-size:1.2em
      div
        margin-top:3vh
        margin-right:5vw
        cursor:pointer
        &:hover
          color:#2EA9DF
        img 
          height:40px;
    // .active{
    //   font-weight:bold
    //   color:#2EA9DF
    // }
</style>