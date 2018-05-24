<template>
  <div class="container">
    <div class="row justify-content-lg-center">
      <div class="col-lg-10">
        <h1>Library page</h1>
        <ul class="list-group">
          <li v-for="item in list" class="list-group-item" v-bind:key="item.id" >
            <div class="col-xs-6 content">
              {{item.name}}
              <p>{{item.description}}</p>
            </div>
            <div class="buttons">
              <button class="btn btn-success" @click="handleEdit(item)">edit</button>
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
  data () {
    return {
      list: [
        { id: 1, name: 'first book', cash: false,  description: 'Aorem Ipsum is simply dummy text of the printing and trem Ipsum.' },
        { id: 2, name: 'first book 2', cash: true,  description: 'Borem 3 IpsumCreate app with login page and  page where user can add invoice by adding its name in input field and clicking on button. Page must include invoices list with search field to search invoice(search should be debounced). Invoice list should be scrollable(search field should always be on top) and each invoice item in list must haves settings(right aligned icon) with delete and duplicate options.is simply dummy text of the printing and trem Ipsum.' },
        { id: 3, name: 'first book 3', cash: false,  description: 'Lorem 2 Ipsum is simply dummy text of the printing and trem Ipsum.' },
        { id: 4, name: 'first book 4', cash: true,  description: 'Lorem Ipsum is simply dummy text of the printing and trem Ipsum.' },
        { id: 5, name: 'first book 5', cash: true,  description: 'corem Ipsum is simply dummy text of the printing and trem Ipsum.' }
      ]
    }
  },
  methods: {
    handleEdit(item) {

    },
    handleDelete(id) {
      this.list = this.list.filter(i => i.id !== id)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .col-lg-6 {
    text-align: left;
  }
  .alert-danger, .list-group-item {
    margin-top: 20px;
    text-align: left;
  }
</style>
