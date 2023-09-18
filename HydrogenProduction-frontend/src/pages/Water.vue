<template>
    <div class="container mx-auto  flex-col justify-between h-screen p-5">
        <div class="bg-no-repeat md:bg-[url('@/assets/Images/background/bg_water.svg')] h-full grid place-content-center">
            <!-- When connected is true -->
            <div id="water">
            <!-- <div v-if="login" id="water"> -->
                <Production :balance = 'balanceWater' :mint="mintWater" :transfer='transferWater' unit="liter(s)" user_role = 'water'/>
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
    useWater
} from '../stores/roles/water'


export default {
    name: 'Water',
    components: {
        Production
    },
    data() {
        return {
            
        }
    },
    beforeMount() {
        const page = 'water'
        this.updatePage(page);
        // If Not connected correct wallet. Alert and go back, it will require login == true
        if (this.login == true) {
                alert('Connected Wallet is not authorised for this page!')
                history.back()
        }
    },
    computed: {
        ...mapState(useWater, ['balanceWater']),
        ...mapState(useUser, ['login']),
    },
    methods: {
        ...mapActions(useWater, ['mintWater','transferWater']),
        ...mapActions(useUser, ['updatePage']),

    }

}
</script>

<style scoped>
#water {
    background-color: rgba(0, 117, 255, 0.5);
}
</style>