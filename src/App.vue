<template>
  <div id="app">
    <div class="home">
      <header>
        <div class="bg"></div>
        <img class="logo" src="./assets/teamemo.svg" height="70">
        <span class="text">Simple knowledge management for teams</span>
        <p>Easy to use documentation platform and knowledge base with real-time collaborative editing.</p>
        <el-button class="addnote" type="danger">写笔记</el-button>
      </header>
      <nav id="searchBar">
        <div class="container" :class="searchBarFixed==true?'navTop':''" >
          <ul>
            <li><router-link to="/">文章</router-link></li>
            <li><router-link to="/attention">关注</router-link></li>
            <li class="user"><router-link to="/user">🌧</router-link></li>
            <li><router-link to="/information">消息</router-link></li>
            <li><span>搜索</span></li>
          </ul>
        </div>
      </nav>
      <section>
        <div class="content">

        </div>
      </section>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      searchBarFixed:false,
    }
  },
  mounted() {
    // 然后监听window的resize事件。
    window.addEventListener('scroll', this.handleScroll)
  },
  methods:{
    handleScroll(){
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      console.log(scrollTop)
      var offsetTop = document.querySelector('#searchBar').offsetTop
      console.log(offsetTop,this.searchBarFixed)
      
      if (scrollTop > offsetTop) {
        this.searchBarFixed = true
      } else {
        this.searchBarFixed = false
      }
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.home {
  .logo{
    margin-bottom:10px; 
  }
  header{
    padding: 265px 0;
    .addnote{
      font-size:16px;
      transition: all 0.5s ease-in-out;
      padding: 16px 32px;
    }
    .addnote:hover{
          background-color: #da4e43;
          border-color:#da4e43;
    }
    .bg{
      background-image: url("./assets/bg_notebook.jpg");
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-size: cover;
      background-repeat: no-repeat;
      z-index: -1;
      overflow: hidden;
    }
    .bg:before{
      content: '';
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(248, 248, 248, 0.7);
    }
    .text{
      color:#777777;
      text-shadow: 0 0 10px #fff;
      font-size:42px;
      display: block;
      // font-weight: 300;
      font-family: inherit;
    }
    p{
      color: #505050;
      font-size: 21px;
      font-weight: 200;
      margin-top:30px;
    }

  }
  nav{
    height:92px;
  }
  .content{
    height: 200px;
  }
  .container{
      padding: 0px;
      border-bottom: 1px solid #dddddd;
      box-shadow: 0 4px 5px -3px #ececec;
      position: relative;
      background: #fff;
      font-size: 14px;
      font-weight: normal;
      font-family: 'Montserrat', sans-serif;
      height:92px;
      overflow: hidden;
      ul{
        margin:10px 0 0 0;
        li{
          width:95px;
          text-align: center;
          margin:0 1px;
          font-family: 'Montserrat', sans-serif;
          line-height:82px;
          color:#222222;
          a,span{
            cursor:pointer;
            transition: all 0.3s ease-in-out;
            color:#222222;
          }:hover{
            color:#00a79d;
          }
        }
        .user{
          padding: 0 30px;
        }
      }
  }
  .navTop{
    position: fixed;
    width:100%;
    top:0;
  }
  h1,
  h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    text-decoration:none;
  }
}
</style>
