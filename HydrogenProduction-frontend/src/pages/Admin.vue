<template>
    <div class="container mx-auto  flex-col justify-between h-screen p-5">
        <div class="bg-no-repeat h-full grid place-content-center">
            <!-- When connected is False -->
            <div class="flex justify-center">
                <ConnectWallet user_role = 'admin'/>
            </div>
            <!-- When connected is true -->
            <div v-if="login" id="electricity" class="w-[400px]">
                <div class="text-center">
                    <div class="p-[5px] tracking-[2px]">
                        Set New Entities
                    </div>
                    <!-- Set Water -->
                    <div class="flex">
                        <input v-model="newWater" type="text" class="w-3/4 text-center p-[5px] m-[10px] rounded-[5px] border-[2px]" placeholder="Input New Water Address ">
                        <div class="flex flex-col justify-center w-1/4 p-[5px]">
                            <button v-if="!setting" @click='setNewWater(newWater.toString())' class="h-[35px] rounded-[5px] bg-[#ff0059]/[0.5] hover:bg-[#ff0059]">Set</button>
                            <button v-if="setting" class="h-[35px] rounded-[5px] bg-[#ff0059] cursor-progress">Setting</button>
                        </div>
                    </div>
    
                    <!-- Set Electricity -->
                    <div class="flex">
                        <input v-model="newElectricity" type="text" class="w-3/4 text-center p-[5px] m-[10px] rounded-[5px] border-[2px]" placeholder="Input New Electricity Address ">
                        <div class="flex flex-col justify-center w-1/4 p-[5px]">
                            <button v-if="!setting" @click='setNewElectricity(newElectricity.toString())' class="h-[35px] rounded-[5px] bg-[#ff0059]/[0.5] hover:bg-[#ff0059]">Set</button>
                            <button v-if="setting" class="h-[35px] rounded-[5px] bg-[#ff0059] cursor-progress">Setting</button>
                        </div>
                    </div>
    
                    <!-- Set Hydrogen -->
                    <div class="flex">
                        <input v-model="newHydrogen" type="text" class="w-3/4 text-center p-[5px] m-[10px] rounded-[5px] border-[2px]" placeholder="Input New Fuel Address ">
                        <div class="flex flex-col justify-center w-1/4 p-[5px]">
                            <button v-if="!setting" @click='setNewHydrogen(newHydrogen.toString())' class="h-[35px] rounded-[5px] bg-[#ff0059]/[0.5] hover:bg-[#ff0059]">Set</button>
                            <button v-if="setting" class="h-[35px] rounded-[5px] bg-[#ff0059] cursor-progress">Setting</button>
                        </div>
                    </div>
                </div>
            
            <div @click="Reset()" class="text-center tracking-[2px] text-blue-600 p-[5px] hover:cursor-pointer">
                Reset 
            </div>
            </div>
            
        </div>
    </div>
</template>


<script>
import ConnectWallet from '../components/ConnectWallet.vue'


import {
    mapState,
    mapActions
} from 'pinia'

import {
    useUser
} from '../stores/user'

import {
    useInfo
} from '../stores/info'

import {
    useAdmin
} from '../stores/roles/admin'



export default {
    name: 'electricity',
    components: {
        ConnectWallet,
    },
    data() {
        return {
            newWater: '',
            newElectricity: '',
            newHydrogen: ''
        }
    },
    beforeMount() {
        const page = 'admin'
        this.updatePage(page);
        if (this.login == true) {
            alert('Connected Wallet is not authorised for this page!')
            history.back()
        }
    },
    computed: {
        ...mapState(useUser, ['login']),
        ...mapState(useInfo, ['contractOwner']),
        ...mapState(useAdmin, ['setting'])
    },
    methods: {
        ...mapActions(useAdmin, ['setNewWater', 'setNewElectricity', 'setNewHydrogen']),
        ...mapActions(useUser, ['updatePage']),
        Reset() {
            this.newWater = '',
            this.newElectricity = '',
            this.newHydrogen = ''
        }
    }

}
</script>

<style scoped>
* {
    /* border: 1px solid */
}
</style>