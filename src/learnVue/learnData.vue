<template>
    <div :style="{ marginLeft: '20px' }">
        <p>{{ name }}</p>
        <p>{{ gender }}</p>
    </div>
</template>

<script lang="ts">

export default {
    data() {
        return {
            name: 'Hello YOU',
            gender: 'Male',
        }
    }
}
    
</script>