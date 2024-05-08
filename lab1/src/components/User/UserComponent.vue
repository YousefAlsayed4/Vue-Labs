<template>
    <div class="row">
      <div class="col-12 ">
        <div class="card mt-5 mb-5 " style="width: 700px;">
          <div class="card-body d-flex flex-column justify-content-center align-items-center">
          <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Role</th>
                  <th scope="col">Action</th>
  
                </tr>
              </thead>
              <tbody>
                <tr v-for="(user,index) in usersData" :key="index">
                  <th scope="row">{{index+1}}</th>
                  <td>{{user.name}}</td>
                  <td>{{user.age}}</td>
                  <td>{{user.role}}</td>
                  <td>
                      <button class="btn btn-danger" @click="deleteuser(user.id)">Delete</button>
                  </td>
  
                </tr>
              
              </tbody>
            </table>
      </div>
     </div>
      </div>
    </div>

</template>

<script>
    export default {
        name:'userComponent',
        inject:['users'],
        computed:{
         usersData(){
           return this.users.filter(d => d.role === 'user');
         }
       },
       methods:{
        deleteuser(id){
          this.$emit('delete-user',id);
        }
       }
        
    }
</script>

<style scoped>

</style>