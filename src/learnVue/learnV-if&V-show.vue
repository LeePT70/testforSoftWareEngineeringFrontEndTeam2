<template>
    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px', marginLeft: marginLeft }">
        <div v-if="beautiful">This is a beautiful scene!</div>
        <!--有 v-else-if 但這邊沒有用到-->
        <div v-else>This is an ulgy scene!</div>
        <div v-if="beautiful">Using v-if</div>
        <div v-show="beautiful">Using v-show</div>
        <div><img v-bind:src="imgSrc"></div>
        <Button @click="handleChange()" class="p-button-text">Beautiful or Ulgy</Button>
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
            beautiful: true,
            imgSrc: "/images/beautifulScene_small.jpg",
        }
    },
    methods: {
        handleChange() {
            this.beautiful = !this.beautiful
            if(this.activeColor === '#FFA500') {
                this.activeColor = '#530000'
            } else {
                this.activeColor = '#FFA500'
            }
        }
    }
});
</script>
  
<style>
  
</style>
  