<template>
    <div class="row mt-5">
        <div class="col-12  ">
            <div class="card mb-3" >
                <div class="row">
                  <div class="col-md-6">
                    <img :src="movie.image" style="height: 450px; width: 500px;" class="img-fluid rounded-start" alt="..">
                  </div>
                  <div class="col-md-6" style="margin-top: 100px;">
                    <div class="card-body ">
                        <h5 class="card-title">{{ movie.movie }}</h5>
                        <p class="card-text">Rating: {{ movie.rating }}</p>
                        
                        <a :href="movie.imdb_url" target="_blank" rel="noopener noreferrer" class="btn mx-1" style="background-color: #000; color: #FFF8DC;">Watch Movie</a>
                        <button  class="btn mx-1" style="background-color: #000; color: #FFF8DC;"  @click="removeMovie(movie.id)">Delete</button>
                        <router-link class="btn" style="background-color: #000; color: #FFF8DC;"  :to="`/addmovie/${movie.id}`">Update</router-link>

                    </div>
    
                  </div>
                </div>
              </div>
        </div>
    </div>
</template>
<script>
import  MovieService  from '../../../public/Mixins/MovieService.js';

export default {
    name: "MoviesComponent",
    mixins: [MovieService],
    data() {
        return {
            id:'',
            movie:{},
        };
    },
    mounted() {
        this.id = this.$route.params.id;
        console.log(this.id);
		this.GetMovieByID();
  
	},
    methods: {
		async GetMovieByID() {
			this.movie = await this.getMovie(this.id);
		},
    async removeMovie(id){
      await this.deleteMovie(id)
      this.$router.push("/Movies")
  
      },
    },
};
</script>

<style scoped>

</style>