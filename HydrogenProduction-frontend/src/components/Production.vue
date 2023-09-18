<template>
    <div class="">
        <div class="flex flex-col justify-between mx-auto p-[10px]">
    
            <div class="flex justify-center">
                <ConnectWallet :user_role='user_role'/>
            </div>
    
            <div v-if="login">
                <!-- Input Amount: Not for Hydrogen -->
                <div v-if='!isHydrogen' class="bg-[#F1BBBB] flex flex-col justify-between p-[20px] m-[10px]">
                    <!-- input -->
                    <div class="flex justify-around">
                        <input v-if='!minting' type="text" class="w-[400px] tracking-[5px] text-[25px] text-center rounded-[25px] p-[5px] m-[10px]" placeholder="0.0000" v-model="mintAmount">
                        <input v-if='minting' type="text" class="w-[400px] tracking-[5px] text-[25px] text-center rounded-[25px] p-[5px] m-[10px] hover: cursor-not-allowed" :placeholder="mintAmount" disabled>
                    </div>
    
                    <!-- Mint -->
                    <div class="flex justify-around">
                        <button v-if='!minting' @click="mintValue(mintAmount)" class="w-[400px] text-center rounded-[25px] bg-[#ffad39] hover:bg-[#c28b3e]  text-[25px] tracking-[5px] border-[1px] border-black p-[5px] m-[10px]">Mint</button>
                        <button v-if='minting' class="w-[400px] text-center rounded-[25px] bg-[#c3842b] text-[25px] tracking-[5px] border-[1px] border-black p-[5px] m-[10px] hover:cursor-wait">Minting ...</button>
                    </div>
                </div>
    
                <!-- Input Amount: For Hydrogen -->
                <div v-else class="bg-[#F1BBBB] flex flex-col justify-between pt-[64px] pb-[26px]">
                    <!-- input -->
                    <div class="flex justify-around text-[32px] tracking-[5px] text-center">
                        Balance Water: {{balanceW/scDecimal}} Liter(s)
                    </div>
    
                    <div class="flex justify-around text-[32px] tracking-[5px] text-center">
                        Balance Electricity: {{balanceE/scDecimal}} KWh(s)
                    </div>
                    <!-- Mint -->
                    <div class="flex justify-around">
                        <button v-if='!minting' @click="mint()" class="w-[400px] text-center rounded-[25px] bg-[#ffad39] hover:bg-[#c28b3e]  text-[25px] tracking-[5px] border-[1px] border-black p-[5px] m-[10px]">Mint H2</button>
                        <button v-if='minting' class="w-[400px] text-center rounded-[25px] bg-[#c3842b] text-[25px] tracking-[5px] border-[1px] border-black p-[5px] m-[10px] hover:cursor-wait">Minting H2...</button>
                    </div>
                </div>
    
    
                <!-- Balance Amount -->
                <div class="bg-[#F1BBBB] flex flex-col justify-between p-[20px] m-[10px]">
                    <!-- shows balance -->
                    <div class="text-[25px] tracking-[5px] text-center">
                        Balance: {{balance/scDecimal}} {{unit}}
                    </div>
                    <!-- input -->
                    <div class="flex justify-around">
                        <input v-if='!transferring' type="text" class="w-[400px] tracking-[5px] text-[25px] text-center rounded-[25px] p-[5px] m-[10px]" placeholder="0" v-model="transferAmount">
                        <input v-if='transferring' type="text" class="w-[400px] tracking-[5px] text-[25px] text-center rounded-[25px] p-[5px] m-[10px] hover: cursor-not-allowed" :placeholder="transferAmount" disabled>
                    </div>
                    <!-- Transfer -->
                    <div class="flex justify-around">
                        <button @click="transferValue(transferAmount)" class="w-[400px] text-center rounded-[25px] bg-[#ffad39] hover:bg-[#c28b3e]  text-[25px] p-[5px] m-[10px] tracking-[5px] border-[1px] border-black">Transfer</button>
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
    useUser
} from '../stores/user'

import {
    useInfo
} from '../stores/info'


export default {
    name: 'production',
    components: {
        ConnectWallet
    },
    props: {
        isHydrogen: Boolean,
        balance: Number,
        unit: String,
        mint: Function,
        transfer: Function,
        balanceE: Number,
        balanceW: Number,
        user_role: String
    },
    data() {
        return {
            mintAmount: null,
            transferAmount: null
        }
    },
    computed: {
        ...mapState(useUser, ['login', 'minting', 'transferring']),
        ...mapState(useInfo,['scDecimal'])
    },
    methods: {
        async mintValue(mintAmount){
            await this.mint(mintAmount),
            this.mintAmount = null
        },
        
        async transferValue(transferAmount) {
            await this.transfer(transferAmount)
            this.transferAmount = null
        }
    }
}
</script>

<style scoped>
* {
    /* border: 1px solid black; */
}
</style>