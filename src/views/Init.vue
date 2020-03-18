<template>
    <div>
        <h1>Task List</h1>
        <router-link :to="{ name: 'Add' }">
        <button>Add</button>
        </router-link>
        <ul>
            <li v-for="task of tasks" :key="task.id">
                {{ task.name }} - {{ task.id }}
                <router-link :to="{ name: 'Edit', params: { id: task.id } }">
                    <button>Edit</button>
                </router-link>
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