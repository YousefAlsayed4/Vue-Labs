<template>
    <div class="row mt-2">
        <div class="col-12  d-flex flex-column justify-content-center align-items-center">
            <h1 style="color: #FFF8DC;">Add User</h1>
            <div class="card" style="max-width: 700px;">
                <div class="card-body d-flex flex-column justify-content-center align-items-center">
                    <form class="row g-3" @submit="submitData($event)">
                        <div class="col-md-6">
                          <label for="name" class="form-label">Name</label>
                          <input type="text" v-model.trim.lazy="FormValues.name" class="form-control" id="name" placeholder="Enter Name">
                        </div>
                        <div class="col-md-6">
                          <label for="age" class="form-label">Age</label>
                          <input type="number" v-model.trim.lazy.number="FormValues.age" class="form-control" id="age" placeholder="Enter Age">
                        </div>
                          
                        <div class="col-12">
                          <label for="role" class="form-label">Role</label>
                          <select id="role" v-model="FormValues.role" class="form-select">
                            <option value="user">user</option>
                            <option value="admin">admin</option>
                          </select>
                        </div>
                        
                        
                        <div class="col-12">
                          <button  class="btn" style="background-color: #000; color: #FFF8DC;"> Add </button>
                        </div>
                      </form>
                </div>
            </div>
            
            <div class="d-flex  justify-content-between align-items-center gap-5 mt-5">
             <button class="btn"  @click="flag=true" style="background-color: #000; color: #FFF8DC;"> Admin </button>             
             <button class="btn px-3" @click="flag=false"  style="background-color: #000; color: #FFF8DC;"> User  </button>  
            </div>           
            <adminComponent v-if="flag"  @delete-admin="handledelete"/>    
            <userComponent v-if="!flag" @delete-user="handledelete" />
        </div>
    </div>
</template>

<script>
import adminComponent from './adminComponent';
import userComponent from './UserComponent';

    export default {
        name:'HomeCompnent',
        components:{
            adminComponent,
            userComponent
        },
        data(){
            return {
                FormValues:{
                    name:'',
                    age:'',
                    role:'user'
                },
                Users:[
                    {id:1,"name":"yousef","age":22,"role":"admin"},
                    {id:2,"name":"ali","age":21,"role":"user"},
                    {id:3,"name":"omar","age":23,"role":"admin"},
                    {id:4,"name":"mohamed","age":25,"role":"user"},
                ],

                flag:false,
                
            };
        },
        methods:{
            submitData(e){
                e.preventDefault();
                if(this.FormValues.name!='' & this.FormValues.age!=''){
                    let user={id:this.Users.length+1, "name":this.FormValues.name,"age":this.FormValues.age,"role":this.FormValues.role};
                      this.Users.push(user)
      
                      console.log(this.userData);
                }
            },

            handledelete(id) {
            const index = this.Users.findIndex(user => user.id === id);
            if (index !== -1) {
                this.Users.splice(index, 1);
            }
         },
       
        } ,
        provide(){
            return {
                users:this.Users,

            }
        }
    
    }
</script>

<style scoped>

</style>