<template>  
     <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="全部" name="all">全部</el-tab-pane>
    <el-tab-pane label="未发布" name="unPush">未发布</el-tab-pane>
    <el-tab-pane label="已发布" name="pushed">已发布</el-tab-pane>
  </el-tabs>
  </template>  
    
  <script>  
  export default {  
    data() {
      return {
        activeName: 'all'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }  
  </script>  
    
  <!-- Add "scoped" attribute to limit CSS to this component only -->  
  <style scoped>  
  h1, h2 {  
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
    color: #42b983;  
  }  
  </style>  