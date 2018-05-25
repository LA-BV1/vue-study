<template>
  <div class="container">
    <div class="row justify-content-lg-center">
      <div class="col-lg-10">
        <h1>Library page</h1>
        <button class="btn btn-primary" @click="handleCreate">Create</button>
        
        <ul class="list-group">
          <li v-for="item in list" class="list-group-item" v-bind:key="item.id" >
            <div class="col-xs-6 content">
              <li class="list-group-item list-group-item-primary">ID: {{ item.id }}</li>
              <li class="list-group-item list-group-item-secondary">ISBN: {{ item.isbn }}</li>
              <li class="list-group-item list-group-item-info">Author: {{ item.author }}</li>
              <li class="list-group-item list-group-item-primary">Title: {{ item.title }}</li>
              <li class="list-group-item list-group-item-danger">Description: {{ item.description }}</li>
              <li class="list-group-item list-group-item-warning">Date: {{ item.date }}</li>
            </div>
            <div class="buttons">
              <button class="btn btn-success" @click="handleEdit(item.id)">edit</button>
              <button class="btn btn-danger" @click="handleDelete(item.id)">delete</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListPage',
  computed: {
    list() {
      return this.$store.getters.getList
    }
  },
  methods: {
    handleEdit(id) {
      this.$router.push(`/edit/${id}`)
    },
    handleDelete(id) {
      this.$store.dispatch('delete', id)
    },
    handleCreate() {
      this.$router.push(`/create`)
    }
  }
}
</script>

<style scoped>
  .col-lg-6 {
    text-align: left;
  }
  .alert-danger, .list-group-item, .buttons {
    margin-top: 20px;
    text-align: left;
  }
</style>
