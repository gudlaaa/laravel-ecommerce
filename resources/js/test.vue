<template>
    <div>
         <h1>this is the TEST vue file</h1>
         <h1>{{$store.state.name}}</h1>
         <h1>{{getModuleName}}</h1>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    created(){
        console.log(this.$state)
    },
    computed: {
        ...mapGetters({
            'getModuleName' : 'accountsStore/getModuleName'
        })
    }
}
</script>>