<template>
  <div class='container'>
    <div class='row justify-content-lg-center'>
      <div class='col-lg-6 '>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="exampleInputEmail1">Login</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-primary">Sign In</button>
        </form>
        <div v-show="error" class="alert alert-danger" role="alert">
          Incorrect username or password!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  props: {
    msg: String
  },

  data () {
    return {
      error: false
    }
  },
  methods: {
    handleSubmit ({ target }) {
      if (target[0].value === 'root' && target[1].value === 'root') {
        this.error = false
        this.$router.push('list')
      } else {
        this.error = true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .col-lg-6 {
    text-align: left;
  }
  .alert-danger {
    margin-top: 20px;
  }
</style>
