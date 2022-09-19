<template>
    <div v-bind:style="{ marginLeft: '20px', fontSize: '20px'}">
        <p>Details about me</p>
        <ul>
            <li v-for="(value, key, index) in aboutMe">
                <div v-bind:style="{display: 'flex'}">
                    <div>{{index}}.</div> 
                    <div v-bind:style="{ marginLeft: '10px', width: '90px'}">{{key}} :</div> 
                    <div>{{value}}</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            aboutMe: {
                name: 'PTLee',
                age: 21,
                gender: 'male',
                height: 177,
                weight: 61,
                house: 0,
            }
        }
    }
})


</script>