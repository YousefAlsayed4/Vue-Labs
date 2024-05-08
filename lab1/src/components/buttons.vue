<template>
  <div>
    <div class="d-flex justify-content-center">
      <button class="btn btn-success m-4" @click="ShowUsers()">User</button>
      <button class="btn btn-danger m-4" @click="ShowAdmin()">Admin</button>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "buttons",
  data() {
    return { flag: null };
  },
  methods: {
    ShowUsers() {
      this.$emit("flagChanged", "user");
    },
    ShowAdmin() {
      this.$emit("flagChanged", "admin");
    },
  },
  provide() {
    return {
      flag: this.flag,
    };
  },
};
</script>

<style lang="scss" scoped></style>
