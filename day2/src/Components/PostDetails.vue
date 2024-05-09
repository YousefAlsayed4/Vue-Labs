<template>
    <div class="container w-25" v-if="CurrentPost">
        <h1 class="text-center details text-dark mb-5"><i>Post Details</i></h1>
      <div class="card">
        <div class="card-header">
          <h5 class="card-title">{{ CurrentPost.title }}</h5>
        </div>
        <div class="card-body">
          <p class="card-text">{{ CurrentPost.body }}</p>
        </div>
        <div class="card-footer d-flex align-items-center">
          <router-link :to="'/edit/' + CurrentPost.id" class="text-warning text-decoration-none me-3">Edit</router-link>
          <a type="button" @click="DeletePost(CurrentPost.id)" class="text-danger text-decoration-none">Delete</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "PostDetails",
    computed: {
      CurrentPost() {
        return this.$store.state.CurrentPost;
      }
    },
    methods: {
      async GetPost() {
        await this.$store.dispatch("GetPostById", this.$route.params.id);
      },
      async DeletePost(id) {
        await this.$store.dispatch("DeletePost", id);
        this.$router.push("/");
      }
    },
    mounted() {
      this.GetPost();
    }
  };
  </script>
  
  <style scoped>
  .details {
    font-family: 'Courier New', Courier, monospace;
    transition: 0.5s;
  }
  .details:hover {
    letter-spacing: 5px;
  }
  </style>
  