<template>
    <div>{{ itemData.value }}</div>
</template>
<script>
export default{
    props:{
        itemData: {
            type: Object
        }
    }
}
</script>