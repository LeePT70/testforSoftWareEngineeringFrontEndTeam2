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
        label:'About',
        icon:'pi pi-fw pi-users',
        to:'/about',
    }, 
    {
        label:'Vue Data',
        icon:'pi pi-fw pi-database',
        to:'/learnVueData',
    },
    {
        label:'Vue Methods',
        icon:'pi pi-fw pi-server',
        to:'/learnVueMethods',
    },
    {
        label:'V-on',
        icon:'pi pi-fw pi-arrows-h',
        to:'/learn_v-on',
    },
    {
        label:'V-bind',
        icon:'pi pi-fw pi-arrow-down',
        to:'/learn_v-bind',
    },
    {
        label:'V-if & V-show',
        icon:'pi pi-fw pi-arrow-up',
        to:'/learn_v-if&v-show',
    },
    {
        label:'V-for',
        icon:'pi pi-fw pi-arrow-left',
        to:'/learn_v-for',
    },
    {
        label:'V-model',
        icon:'pi pi-fw pi-arrow-right',
        to:'/learn_v-model',
    },
]
const RightItems = [
    {
        label:'Login',
        icon:'pi pi-fw pi-home',
    },
]
</script>