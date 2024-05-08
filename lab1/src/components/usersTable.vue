<template>
  <div>
    <div class="d-flex justify-content-center">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Role</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in filteredUsers" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.age }}</td>
            <td>{{ user.role }}</td>
            <td>
              <button class="btn btn-danger ms-3" @click="deleteUser(user.id)">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "usersTable",
  props: ["flag"],
  inject: ["users"],
  data() {
    return {};
  },
  watch: {
    flag(newVal) {
      console.log(newVal);
    },
  },
  computed: {
    filteredUsers() {
      if (!this.users) {
        return []; // Return an empty array if users is undefined
      }
      if (this.flag === "user") {
        return this.users.filter((user) => user.role !== "admin");
      } else if (this.flag === "admin") {
        return this.users.filter((user) => user.role === "admin");
      } else {
        return this.users;
      }
    },
  },
};
</script>

<style scoped></style>
