<template>
    <div>
        <div v-bind:style="{marginLeft: '20px'}">
            <p>{{ name }}</p>
            <p>{{ age }}</p>
        </div>
        <Button v-on:click="changeName('Hello Everyone')" 
                class="p-button-text">
            Change Name
        </Button>
        <Button @click="changeAge('10 years old')" 
                class="p-button-text">
            Change Age
        </Button>
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
      changeName(funcName: string) {
        this.name = funcName
      },
      changeAge(funcAge: number | string) {
        this.age = funcAge
      }
    }
  });
  </script>
  
  <style>
  
  </style>
  