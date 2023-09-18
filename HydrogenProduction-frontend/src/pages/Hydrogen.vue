<template>
    <div class="container mx-auto  flex-col justify-between h-screen p-5">
        <div class="bg-no-repeat md:bg-[url('@/assets/Images/background/bg_hydrogen.svg')] h-full grid place-content-center">
            
            <div id="hydrogen">
                <Production :isHydrogen ='true' :balanceE="balanceElectricity" :balanceW="balanceWater" :balance="balanceFuel" :mint='mintFuel' :transfer="transferFuel" unit="Kg(s)" user_role = 'fuel'/>
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
    useFuel
} from '../stores/roles/fuel'

import {
    useUser
} from '../stores/user'

export default {
    name: 'hydrogen',
    components: {
        Production
    },
    data() {
        return{
            // connected: true
        }
    },
    beforeMount() {
        const page = 'fuel'
        this.updatePage(page);
        if (this.login == true) {
            alert('Connected Wallet is not authorised for this page!')
            history.back()
        }
    },
    computed: {
        ...mapState(useFuel, ['balanceElectricity','balanceWater','balanceFuel']),
        ...mapState(useUser, ['login']),
    },
    methods: {
        ...mapActions(useFuel, ['mintFuel','transferFuel']),
        ...mapActions(useUser, ['updatePage']),

    }

}
</script>

<style scoped>
#hydrogen{
    background-color: rgba(97,255,0,0.5);
}
</style>