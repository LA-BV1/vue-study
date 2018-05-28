<template>
  <div class="container">
    <div class="row justify-content-lg-center">
      <div class="col-lg-10">
        <h1>Library page</h1>
        <div class="row">
          <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
            <input class="form-control mr-sm-2" type="search" v-model="search" placeholder="Search" aria-label="Search">
          </div>
          <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
            <button @click="handleClearSearch" class="btn btn-success">clear search</button>        
          </div>
        </div>
        <div class="buttons">
          <button class="btn btn-primary" @click="handleCreate">Create</button>
        </div>
        {{ list.length ? '' : 'Not found'}}
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
        <button class="btn btn-primary margin" v-show="loadMoreVisible" @click="handleLoadMore">load more</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListPage',
  computed: {
    list() {
      return this.$store.getters.getList.filter((i, index) => (~i.title.toLowerCase().indexOf(this.search.toLowerCase())) && (index < this.count))
    },
    loadMoreVisible() {
      return this.count < this.$store.getters.getList.length
    }
  },
  data() {
    return {
      search: '',
      count: 5
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
    },
    handleClearSearch() {
      this.search = ''
    },
    handleLoadMore() {
      this.count += 5
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
  .margin {
    margin-top: 20px;    
  }
  .container {
    margin-bottom: 40px;
  }
</style>
