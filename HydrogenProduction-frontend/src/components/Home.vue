<template>
<div class="static">
    <!-- scDecimal == 0 -->
    <div v-if='!infoLoaded' class="h-screen w-full absolute backdrop-blur-sm bg-white/10 z-10 grid place-content-center">

        <!-- Loading Icon -->
        <div class="flex justify-center"><img src="../assets/Images/Icons/loaging.png" alt="" class="h-[50px] motion-reduce:hidden animate-spin"></div>
        <!-- Loading -->
        <div class="text-4xl tracking-[3px]">Loading...</div>
    </div>

    <div class="container mx-auto flex flex-col justify-between h-screen p-5 ">

        <div>
            <h1 class="text-6xl text-center font-bold">Select the Role</h1>
        </div>
    
        <!-- From Smart Contract -->
        <table class="tg w-2/3 mx-auto m-[25px]">
            <thead>
                <tr>
                    <th class="tg-baqh" colspan="2">Rolls Assigned To:</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="tg-lqy6 w-1/2">H<sub>2</sub>O Producer:<br></td>
                    <td class="tg-0lax w-1/2">{{definedAddress.water}}</td>
                </tr>
                <tr>
                    <td class="tg-lqy6 w-1/2">Electricity Producer:</td>
                    <td class="tg-0lax w-1/2">{{definedAddress.electricity}}<br></td>
                </tr>
                <tr>
                    <td class="tg-lqy6 w-1/2">H<sub>2</sub> Producer:<br></td>
                    <td class="tg-0lax w-1/2">{{definedAddress.fuel}}</td>
                </tr>
            </tbody>
        </table>
    
    
        <div class="mx-auto">
            <div class="text-center">Smart Contract Address: {{scAddress}} </div>
            <div class="text-center text-blue-600 tracking-[1px]"><a target="_blank" class="border-[1px] border-blue-300" :href="`https://testnet.bscscan.com/address/${scAddress}`">Explore</a></div>
            <div class="text-center">Decimal Points: {{scDecimal}}</div>
        </div>
        <div class="flex flex-col justify-center h-full">
            <div>
                <h1 class="text-4xl text-center font-bold p-[25px]">Navigate to...</h1>
            </div>
            <div class="flex flex-wrap justify-around p-[25px]">
                <router-link to='/Admin' class="text-center text-[20px] w-[120px] tracking-[1px] grid place-content-center p-[3px] hover:cursor-pointer rounded-[15px] bg-[#ff0059]/[0.5] hover:bg-[#ff0059]">Admin</router-link>
                <router-link to='/Water' class="text-center text-[20px] w-[120px] tracking-[1px] grid place-content-center p-[3px] hover:cursor-pointer rounded-[15px] bg-[#0075ff]/[0.5] hover:bg-[#0075ff]">Water</router-link>
                <router-link to='/Electricity' class="text-center text-[20px] w-[120px] tracking-[1px] grid place-content-center p-[3px] hover:cursor-pointer rounded-[15px] bg-[#ebff00]/[0.5] hover:bg-[#ebff00] ">Electricity</router-link>
                <router-link to='/Hydrogen' class="text-center text-[20px] w-[120px] tracking-[1px] grid place-content-center p-[3px] hover:cursor-pointer rounded-[15px] bg-[#61ff00]/[0.5] hover:bg-[#61ff00]">Hydrogen</router-link>
                <router-link to='/FillingStation' class="text-center text-[20px] w-[120px] tracking-[1px] grid place-content-center p-[3px] hover:cursor-pointer rounded-[15px] bg-[#9011ff]/[0.5] hover:bg-[#9011ff]">Filling Station</router-link>
            </div>
        </div>
    
        <table class="tg w-2/3 mx-auto m-[25px]">
            <thead>
                <tr>
                    <th class="tg-baqh" colspan="3">Index Information and Current Amount:</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="tg-lqy6 w-1/3">H<sub>2</sub>O Producer:<br></td>
                    <td class="tg-0lax w-1/3">{{definedIndex.water}}</td>
                    <td class="tg-0lax w-1/3">{{definedPrice.water}} Liters<br></td>
                </tr>
                <tr>
                    <td class="tg-lqy6 w-1/3">Electricity Producer:</td>
                    <td class="tg-0lax w-1/3">{{definedIndex.electricity}}<br></td>
                    <td class="tg-0lax w-1/3">{{definedPrice.electricity}} KhW<br></td>
                </tr>
                <tr>
                    <td class="tg-lqy6 w-1/3">H<sub>2</sub> Producer:<br><br></td>
                    <td class="tg-0lax w-1/3">{{definedIndex.fuel}}</td>
                    <td class="tg-0lax w-1/3">10000 Kg<br></td>
                </tr>
            </tbody>
        </table>
        <!-- </div> -->
    </div>

    </div>
</template>

<script>
import {
    mapState,
    mapActions
} from 'pinia'

import {
    useInfo
} from '../stores/info'

import {
    useUser
} from '../stores/user'

export default {
    name: 'Home',
    components: {

    },
    data() {
        return {
            Loaded: false,
            roles: {

            }
        }
    },
    beforeMount() {
        this.environmentsetup()
        const page = 'main'
        this.updatePage(page);
        this.Loaded = this.Loading
    },
    computed: {
        ...mapState(useInfo, ['definedAddress', 'infoLoaded', 'definedIndex', 'definedPrice', 'scAddress', 'scDecimal']),
        ...mapState(useUser,['login'])
    },
    methods: {
        ...mapActions(useInfo, ['environmentsetup']),
        ...mapActions(useUser, ['updatePage']),
    }
}
</script>

<style scoped>
* {
    /* border: 1px solid black; */
}

.tg {
    border-collapse: collapse;
    border-spacing: 0;
}

.tg td {
    border-color: black;
    border-style: solid;
    border-width: 1px;
    font-family: Arial, sans-serif;
    font-size: 14px;
    overflow: hidden;
    padding: 10px 5px;
    word-break: normal;
}

.tg th {
    border-color: black;
    border-style: solid;
    border-width: 1px;
    font-family: Arial, sans-serif;
    font-size: 14px;
    font-weight: normal;
    overflow: hidden;
    padding: 10px 5px;
    word-break: normal;
}

.tg .tg-baqh {
    text-align: center;
    vertical-align: top
}

.tg .tg-lqy6 {
    text-align: right;
    vertical-align: top
}

.tg .tg-0lax {
    text-align: left;
    vertical-align: top
}
</style>
