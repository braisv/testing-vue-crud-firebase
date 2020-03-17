<template>
    <div>
        <h1>Task List</h1>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'Init',
    methods: {
        ...mapActions(['getTasks'])
    },
    created() {
        this.getTasks( )
    }
}
</script>