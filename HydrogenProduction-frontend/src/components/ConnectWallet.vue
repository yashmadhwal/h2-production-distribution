<template>
    <div class="flex">
        <div class="w-[300px] pl-[5px] pr-[5px] mr-[10px]">
            <div @click="connectMetamask()" v-if='!loading && !login' class="mt-[10px] mb-[10px] h-[50px] bg-[#ffad39] hover:bg-[#c28b3e] rounded-[30px] grid place-content-center cursor-pointer">
                Connect MetaMask</div>
            <div v-if='loading ' class="mt-[10px] mb-[10px] h-[50px] bg-[#ffad39] rounded-[30px] grid place-content-center cursor-progress">
                <div v-if='loading' class="flex"><img src="../assets/Images/Icons/loaging.png" alt="" class="motion-reduce:hidden animate-spin dark:invert">&nbsp;&nbsp;Loading...</div>
            </div>
            
            <div v-if='login && !loading' class="mt-[10px] mb-[10px] h-[50px] bg-[#c3842b] rounded-[30px] grid place-content-center cursor-not-allowed">Connected: {{shortWallet}}</div>
        </div>
    </div>
</template>

<script>

import {
    mapActions,
    mapState
} from 'pinia'

import {
    useUser
} from '../stores/user'

import {
    useInfo
} from '../stores/info'

export default {
    name: 'ConnectWallet',
    props: {
        // Remove user role later 
        user_role: String
    },
    computed: {
        ...mapState(useUser, ['shortWallet', 'loading', 'login','userRole']),
        ...mapState(useInfo, ['infoLoaded'])
        
    },
    methods: {
        ...mapActions(useUser, ['connectMetamask']),
    }

}
</script>