<template>
    <div >
        <Menubar :model="leftItems">
            <template #start>
            </template>
            <template #end>
            <router-link to="/login">
                <Button label="Login" class="p-button-text" />
            </router-link>
                <InputText placeholder="Search" type="text" />
            </template>
        </Menubar>
    </div>
</template>

<script setup lang="ts">
const leftItems = [
    {
        label:'Home',
        icon:'pi pi-fw pi-home',
        to: '/',
    },
    {
        label:'about',
        icon:'pi pi-fw pi-users',
        to:'/about',
    }, 
]
const RightItems = [
    {
        label:'Login',
        icon:'pi pi-fw pi-home',
    },
]
</script>