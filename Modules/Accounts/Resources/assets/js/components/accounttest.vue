<template>
    <div>
        <h1>This is coming from account modules</h1>
        <h3>{{$store.state.name}}</h3>
        <h3>{{$store.state.accountsStore.accountModule}}</h3>
        <h3>{{getModuleName}}</h3>
    </div>
</template>>
<script>
import {mapGetters} from 'vuex'
export default {
    created(){
        console.log(this.$store)
    },
    computed: {
        ...mapGetters({
            'getModuleName' : 'accountsStore/getModuleName'
        })
    }
}
</script>