<template>
    <div v-bind:style="{ marginLeft: '20px', fontSize: '30px' }">
        <p>Press on F12 to see console</p>
        <InputText type="text" 
                   v-model="message"
                   v-on:keydown="showMessage()"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            message: 'V-model is good',
        }
    },
    methods: {
        showMessage() {
            console.log(this.message)
        }
    }
})


</script>