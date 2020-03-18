<template>
  <div>
    <h1>Editar</h1>
    <form @submit.prevent="editTask(task)">
        {{id}} - {{task}}
      <input type="text" v-model="task.name" />
      <button type="submit">Edit</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Edit",
  data() {
    return {
      id: this.$route.params.id
    };
  },
  methods: {
    ...mapActions(["getTask", "editTask"])
  },
  created() {
    this.getTask(this.id);
  },
  computed: {
    ...mapState(["task"])
  }
};
</script>
