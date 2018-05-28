<template>
  <div class='container'>
    <div class='row justify-content-lg-center'>
      <div class='col-lg-6 '>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="exampleInputEmail1">ISBN </label>
            <input v-model="item.isbn" type="text" class="form-control" placeholder="Enter ISBN">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Title</label>
            <input v-model="item.title" type="text" class="form-control" required placeholder="Enter Title">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Author</label>
            <select v-model="item.author" class="form-control" >
              <option v-for="author in authors" v-bind:key="author" v-bind:value="author">{{ author }}</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Description</label>
            <textarea v-model="item.description" type="text" class="form-control" placeholder="Enter Description "></textarea>
          </div>
          <button type="submit" class="btn btn-primary">{{ this.$route.params.id ? 'Edit' : 'Add' }}</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditPage',
  props: {
    msg: String
  },
  data () {
    return {
      item: {},
      authors: []
    }
  },
  methods: {
    handleSubmit() {
      if (this.$route.params.id) {
        this.$store.dispatch('edit', this.item)
      } else {
        this.$store.dispatch('add', this.item)
      }
      this.$router.push('/list')
    }
  },
  mounted() {
    if (this.$route.params.id) {
      
      this.item = this.$store.getters.getList.find(i => i.id == this.$route.params.id)
    }
    this.authors = this.$store.getters.getAuthors
  }
}
</script>

<style scoped>
  .col-lg-6 {
    text-align: left;
  }
  .alert-danger {
    margin-top: 20px;
  }
</style>
