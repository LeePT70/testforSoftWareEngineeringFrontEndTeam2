<template>
    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px', marginLeft: marginLeft }">
        <div>This is a beautiful scene!</div>
        <div><img v-bind:src="imgSrc"></div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
  
export default defineComponent({
    components: {},
    data() {
        return {
            activeColor: '#FFA500', // orange
            fontSize: 40,
            marginLeft: '40px',
            imgSrc: "/images/beautifulScene_small.jpg",
        }
    },
    methods: {
  
    }
});
</script>
  
<style>
  
</style>
  