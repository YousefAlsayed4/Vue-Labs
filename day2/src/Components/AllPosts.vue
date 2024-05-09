<template>
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-4" v-for="post in Posts" :key="post.id">
          <div class="card h-100">
            <div class="card-header">
              <h5 class="card-title">{{ post.title }}</h5>
            </div>
            <div class="card-body">
              <p class="card-text">{{ post.body }}</p>
            </div>
            <div class="card-footer d-flex align-items-center">
              <router-link :to="'/post/' + post.id" class="text-info text-decoration-none me-3">Show</router-link>
              <router-link :to="'/edit/' + post.id" class="text-warning text-decoration-none me-3">Edit</router-link>
              <a type="button" @click="DeletePost(post.id)" class="text-danger text-decoration-none">Delete</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AllPosts",
    computed: {
      Posts() {
        return this.$store.state.Posts;
      }
    },
    methods: {
      async DeletePost(id) {
        await this.$store.dispatch("DeletePost", id);
      }
    },
    created() {
      this.$store.dispatch("GetAllPosts");
    }
  };
  </script>
  
  <style scoped>
  .card {
    height: 100%;
  }
  </style>
  