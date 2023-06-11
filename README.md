# virtual-scroll-list-mengfan

一个基于Vue的虚拟列表组件，可同时加载大量数据。


## 安装

通过 npm:

```shell
npm install virtual-scroll-list-mengfan --save
```

## 基本使用

```html
<template>
    <VirtualList
        :list-data="data"
        :item-size="100"
        v-slot="slotProps"
    >
        <div class="context">
            {{ slotProps.item.value }}
        </div>
    </VirtualList>
</template>
```

```javascript
import VirtualList from 'vue-virtual-scroll-list'

 let d = [];
  for (let i = 0; i < 1000; i++) {
    d.push({ id: i, value: i });
  }
  
  export default {
    data() {
      return {
        data: d
      };
    },
    components: {
      VirtualList
    }
  };
  </script>
```