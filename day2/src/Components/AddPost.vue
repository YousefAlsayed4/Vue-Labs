<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-6 offset-md-3">
                <div class="card shadow">
                <div class="card-header bg-success text-light text-center">
                    <h2>Add Post</h2>
                </div>
            <div class="card-body p-0">
              <form class="m-4">
                <div class="mb-3">
                  <label for="title" class="form-label">Title</label>
                  <input id="title" class="form-control" type="text" v-model="title" placeholder="Enter title" required>
                </div>
                <div class="mb-3">
                  <label for="body" class="form-label">Body</label>
                  <textarea id="body" class="form-control" v-model="body" rows="5" placeholder="Enter body" required></textarea>
                </div>
            </form>
            <div class="card-footer text-center">
                <button class="btn btn-outline-success" @click="AddPost" type="submit">Add</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AddPost",
    data() {
      return {
        title: "",
        body: ""
      };
    },
    methods: {
      async AddPost() {
        await this.$store.dispatch("AddNewPost", {
          title: this.title,
          body: this.body
        });
        this.title = "";
        this.body = "";
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  