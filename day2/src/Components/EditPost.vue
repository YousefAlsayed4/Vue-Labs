<template>
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-6 offset-md-3">
          <div class="card shadow">
            <div class="card-header bg-warning text-light text-center">
              <h2>Edit Post</h2>
            </div>
            <div class="card-body">
              <form>
                <div class="mb-3">
                  <label for="title" class="form-label">Title</label>
                  <input class="form-control" type="text" placeholder="Title" v-model="title">
                </div>
                <div class="mb-3">
                  <label for="body" class="form-label">Body</label>
                  <input class="form-control" type="text" placeholder="Body" v-model="body">
                </div>
              </form>
            </div>
            <div class="card-footer text-center">
              <button class="btn btn-outline-warning" @click="UpdatePost" type="submit">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "EditPost",
    data() {
      return {
        title: "",
        body: ""
      };
    },
    mounted() {
      this.getPostById();
    },
    methods: {
      async getPostById() {
        const postId = this.$route.params.id;
        await this.$store.dispatch("GetPostById", postId);
        const post = this.$store.state.Posts.find(post => post.id === postId);
        if (post) {
          this.title = post.title;
          this.body = post.body;
        }
      },
      async UpdatePost() {
        await this.$store.dispatch("EditPost", {
          id: this.$route.params.id,
          title: this.title,
          body: this.body
        });
        this.$router.push('/');
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  