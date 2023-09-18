<template>
    <div class="container mx-auto  flex-col justify-between h-screen p-5">
        <div class="bg-no-repeat md:bg-[url('@/assets/Images/background/bg_filling.svg')] h-full grid place-content-center">
            <!-- When connected is False -->
            <div class="flex justify-center">
                <ConnectWallet user_role = 'fillingStation'/>
            </div>
    
            <!-- When connected is true -->
            <div v-if="login" id="electricity">
                <div class="">
                    <div class="md:w-[664px] flex flex-col justify-between mx-auto p-[20px]">    
                        <!-- Balance Amount -->
                        <div class=" h-full bg-[#9011ff]/[0.5] flex flex-col justify-between p-[20px] m-[10px]">
                            <!-- shows balance -->
                            <div class="text-[32px] tracking-[5px] text-center">
                                Balance Hydrogen: {{balanceFuel/scDecimal}} Kg(s)
                            </div>
                            <!-- Fill Car -->
                            <div class="flex justify-around">
                                <button @click='fillCar()' class="w-[300px] h-[50px] text-center grid place-content-center rounded-[20px] bg-[#ffad39] hover:bg-[#c28b3e] m-[10px] text-[25px] tracking-[5px] border-[1px] border-black">Fill Car</button>
                            </div>

                            <!-- Fill Bus -->
                            <div class="flex justify-around">
                                <button @click='fillBus()' class="w-[300px] h-[50px] text-center grid place-content-center rounded-[20px] bg-[#ffad39] hover:bg-[#c28b3e] m-[10px] text-[25px] tracking-[5px] border-[1px] border-black">Fill Bus</button>
                            </div>

                            <!-- Fill Truck -->
                            <div class="flex justify-around">
                                <button @click='fillTruck()' class="w-[300px] h-[50px] text-center grid place-content-center rounded-[20px] bg-[#ffad39] hover:bg-[#c28b3e] m-[10px] text-[25px] tracking-[5px] border-[1px] border-black">Fill Truck</button>
                            </div>
                        </div>
    
                    </div>
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
    useFilling
} from '../stores/roles/fillingStation'

import {
    useUser
} from '../stores/user'

import {
    useInfo
} from '../stores/info'


export default {
    name: 'fillingStation',
    components: {
        ConnectWallet,
    },
    data() {
        return {
            // connected: true
        }
    },
    beforeMount() {
        const page = 'fillingStation'
        this.updatePage(page);
        if (this.login == true) {
            alert('Connected Wallet is not authorised for this page!')
            history.back()
        }
    },
    computed: {
        ...mapState(useUser,['login','transferring']),
        ...mapState(useFilling, ['balanceFuel']),
        ...mapState(useInfo,['scDecimal'])
    },
    methods: {
        ...mapActions(useFilling, ['fillCar','fillBus','fillTruck']),
        ...mapActions(useUser, ['updatePage']),
    }

}
</script>

<style scoped>
*{
    /* border: 1px solid black; */
}
</style>