<template>
  <div class="d-flex flex-column align-items-center">
    <h1 class="mb-4">Home</h1>
    <div class="card col-6 flex-d align-items-center">
      <form>
        <div class="form-group d-flex flex-row align-items-center mb-3 mt-2">
          <label for="name ">Name:</label>
          <input
            type="text"
            class="form-control"
            id="name"
            v-model="FormData.name"
          />
        </div>

        <div class="form-group d-flex flex-row align-items-center mb-3 mt-2">
          <label for="age ">Age:</label>
          <input
            type="number"
            class="form-control"
            id="age"
            v-model="FormData.age"
          />
        </div>

        <div class="form-group d-flex flex-row align-items-center mb-3 mt-2">
          <label for="role ">Role:</label>
          <select class="form-control" id="role" v-model="FormData.role">
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
        <button
          type="submit"
          class="btn btn-primary m-4"
          @click.prevent="submitForm()"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
  <buttons @flagChanged="updateFlag"></buttons>
  <users-table :flag="flag"></users-table>
</template>

<script>
import buttons from "./buttons.vue";
import usersTable from "./usersTable.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "home",
  components: { buttons, usersTable },
  data() {
    return {
      FormData: {
        name: "",
        age: "",
        role: "",
      },
      users: [
        { id: 1, name: "John Doe", age: 25, role: "admin" },
        { id: 2, name: "Jane Doe", age: 23, role: "user" },
        { id: 3, name: "John Smith", age: 30, role: "user" },
      ],
      flag: null,
    };
  },
  provide() {
    return {
      users: this.users,
    };
  },
  methods: {
    submitForm() {
      this.users.push({
        id: this.users.length + 1,
        name: this.FormData.name,
        age: this.FormData.age,
        role: this.FormData.role,
      });
      console.log(this.users);
      this.FormData.name = "";
      this.FormData.age = "";
      this.FormData.role = "";
    },
    updateFlag(newFlag) {
      this.flag = newFlag;
    },
  },
};
</script>

<style scoped></style>
