<template>
    <div>
        <div v-bind:style="{marginLeft: '20px'}">
            <p>{{ name }}</p>
            <p>{{ age }}</p>
        </div>
        <div>
            <Button @click="changeName('Clicked Once')"
                    class="p-button-text"
            >
                Click Once
            </Button>
            <Button @dblclick="changeAge('Double Clicked')"
                    class="p-button-text"
            >
                Double Click
            </Button>
            <InputText v-on:keydown="changeName('KeyDown')" placeholder="Press down on keys" />
            <InputText v-on:keyup="changeName('KeyUp')" placeholder="Release keys" />
        </div>
        <!-- <form v-on:submit="method">...</form> -->
    
        <!-- 下方的點擊事件將不會繼續傳播 -->
        <!-- <a v-on:click.stop="doThis"></a> -->
    
        <!-- 下方的submit事件將不會刷新頁面 -->
        <!-- <form v-on:submit.prevent="onSubmit"></form> -->
    
        <!-- 修飾符是可以彼此串接的 -->
        <!-- <a v-on:click.stop.prevent="doThat"></a> -->
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
  
export default defineComponent({
    name: 'App',
    components: {},
    data() {
        return {
            name: 'Hello PT',
            age: 18 as number | string
        }
    },
    methods: {
        changeName(name: string) {
            this.name = name
        },
        changeAge(age: number | string) {
            this.age = age
        }
    }
});
</script>
  
<style>
  
</style>
  