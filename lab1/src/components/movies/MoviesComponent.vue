<template>
    <div class="row mt-5">
        <div class="col-4 col-md-6 col-lg-4 mt-5 mb-5" v-for="movie in movies" :key="movie.id">
            <div class="card" style="width: 18rem;height: 400px; background-color: #FFF8DC">
                <img :src="movie.image" class="card-img-top" height="200px" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ movie.movie }}</h5>
                    <p class="card-text">Rating: {{ movie.rating }}</p>
                    
                     <a :href="movie.imdb_url" target="_blank" rel="noopener noreferrer" class="btn mx-1" style="background-color: #6C0345; color: #FFF8DC;">Watch Movie</a>
 
                  <router-link class="btn" style="background-color: #000; color: #FFF8DC;"  :to="`/Movies/${movie.id}`">More Details</router-link>
                   
                 
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
            movies:{},
        };
    },
    mounted() {
		this.getMoives();
	},
    methods: {
		async getMoives() {
			this.movies = await this.getAllMovie();
		},
    }
};
</script>

<style scoped>
@media screen and (max-width: 767px) {
    .col-lg-4 {
        margin-left: 40px;
        flex: 0 0 100%;
        max-width: 100%;
    }
}
</style>
