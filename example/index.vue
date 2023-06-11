<template>
  <div id="app">
    <VirtualList :listData="data" :itemSize="100" v-slot="slotProps">
      <Item :itemData = 'slotProps.item'></Item>
    </VirtualList>
  </div>
</template>
  
  <script>
  import VirtualList from "../src/components/VirtualList.vue";
  import Item from "./item.vue"
  let d = [];
  for (let i = 0; i < 1000; i++) {
    d.push({ id: i, value: i });
  }
  
  export default {
    name: "App",
    data() {
      return {
        data: d
      };
    },
    components: {
      VirtualList,
      Item
    }
  };
  </script>
  
  <style>
  html{
    height: 100%;
  }
  body{
    height: 100%;
    margin:0;
  }
  #app{
    height:100%;
  }
  </style>
  