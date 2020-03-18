<template>
    <div>
        <h1>Add</h1>
        <form>
            <input type="text" v-model="name">
            <button type="submit">Add</button>
        </form>
        {{name}}
    </div>
</template>

<script>
export default {
    name: 'Add',
    data() {
        return {
            name: ''
        }
    }
}
</script>