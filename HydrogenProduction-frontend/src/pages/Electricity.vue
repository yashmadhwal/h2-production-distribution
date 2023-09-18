<template>
    <div class="container mx-auto  flex-col justify-between h-screen p-5">
        <div class="bg-no-repeat md:bg-[url('@/assets/Images/background/bg_electricity.svg')] h-full grid place-content-center">
            <div id="electricity">
                <Production :balance = 'balanceElectricity' :mint="mintElectricity" :transfer='transferElectricity' unit='KWh' user_role = 'electricity'/>
            </div>
        </div>
    </div>
</template>

<script>
import Production from '../components/Production.vue'

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
    useElectricity
} from '../stores/roles/electricity'

export default {
    name: 'electricity',
    components: {
        Production
    },
    data() {
        return{
            // connected: true
        }
    },
    beforeMount() {
        const page = 'electricity'
        this.updatePage(page);
        if (this.login == true) {
            alert('Connected Wallet is not authorised for this page!')
            history.back()
        }
    },
    computed: {
        ...mapState(useElectricity, ['balanceElectricity']),
        ...mapState(useUser, ['login']),
    },
    methods: {
        ...mapActions(useElectricity, ['mintElectricity','transferElectricity']),
        ...mapActions(useUser, ['updatePage']),
    }

}
</script>

<style scoped>
#electricity{
    background-color: rgba(235,255,0,0.5);
}
</style>