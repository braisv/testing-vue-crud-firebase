<template>
    <div>
        <h1>Task List</h1>
        <ul>
            <li v-for="task of tasks" :key="task.id">
                {{ task.name }} - {{ task.id }}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    name: 'Init',
    methods: {
        ...mapActions(['getTasks'])
    },
    created() {
        this.getTasks( )
    },
    computed: {
        ...mapState(['tasks'])
    }
}
</script>