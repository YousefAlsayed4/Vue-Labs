<template>
  <div class="row mt-2">
      <div class="col-12 d-flex flex-column justify-content-center align-items-center">
          <h1 style="color: #FFF8DC;">{{ mode === 'add' ? 'Add Movie' : 'Update Movie' }}</h1>
          <div class="card" style="max-width: 700px;">
              <div class="card-body d-flex flex-column justify-content-center align-items-center">
                  <form class="row g-3" @submit="submitData($event)">
                      <div class="col-md-6">
                        <label for="title" class="form-label">Title</label>
                        <input type="text" v-model="moive.movie" class="form-control" id="title" placeholder="Enter Title" required>
                      </div>
                      <div class="col-md-6">
                        <label for="Rate" class="form-label">Rate</label>
                        <input type="number" v-model="moive.rating" class="form-control" id="Rate" required>
                      </div>
                      <div class="col-md-6">
                        <label for="image" class="form-label">Link Image</label>
                        <input type="text" v-model="moive.image" class="form-control" id="image" required>
                      </div>
                        
                      <div class="col-md-6">
                        <label for="link" class="form-label">Link</label>
                        <input type="text" v-model="moive.imdb_url" class="form-control" id="link" required>
                      </div>
                        
      
                      
                      <div class="col-12">
                        <button class="btn" style="background-color: #000; color: #FFF8DC;">{{ mode === 'add' ? 'Add' : 'Update' }}</button>
                      </div>
                    </form>
              </div>
          </div>          
      </div>
  </div>
</template>

<script>
import MovieService from '../../../public/Mixins/MovieService.js';

export default {
  name: "addMovie",
  mixins: [MovieService],
  data() {
      return {
          id: '',
          mode: 'add', // 'add' or 'update'
          moive: {
              movie: '',
              rating: '',
              image: '',
              imdb_url: ''
          },
      }
  },
created() {
      this.id = this.$route.params.id;
      if (this.id) {
          this.mode = 'update';
          this.GetMovieByID();
      }
  },
  methods: {
      async submitData(e) {
          e.preventDefault();
          if (this.mode === 'add') {
              await this.addMovie(this.moive);
          } else {
              await this.updateMovie(this.id, this.moive);
          }
          this.$router.push("/Movies");
      },
      async GetMovieByID() {
          const movie = await this.getMovie(this.id);
          this.moive.movie = movie.movie;
          this.moive.rating = movie.rating;
          this.moive.image = movie.image;
          this.moive.imdb_url = movie.imdb_url;
      }
  }
}
</script>

<style scoped>
</style>




















  // {
  //   "id": "10",
  //   "movie": "Inception",
  //   "rating": 8.8,
  //   "image": "https://m.media-amazon.com/images/I/91HaVHbnZoL._AC_UF894,1000_QL80_.jpg",
  //   "imdb_url": "https://www.imdb.com/title/tt1375666/"
  // },
  // {
  //   "id": "11",
  //   "movie": "Interstellar",
  //   "rating": 8.6,
  //   "image": "images/interstellar.jpg",
  //   "imdb_url": "https://www.imdb.com/title/tt0816692/"
  // },
  // {
  //   "id": "12",
  //   "movie": "The Matrix",
  //   "rating": 8.7,
  //   "image": "images/matrix.jpg",
  //   "imdb_url": "https://www.imdb.com/title/tt0133093/"
  // },
  // {
  //   "id": "13",
  //   "movie": "Schindler's List",
  //   "rating": 8.9,
  //   "image": "images/schindlers_list.jpg",
  //   "imdb_url": "https://www.imdb.com/title/tt0108052/"
  // },
  // {
  //   "id": "14",
  //   "movie": "The Silence of the Lambs",
  //   "rating": 8.6,
  //   "image": "images/silence_lambs.jpg",
  //   "imdb_url": "https://www.imdb.com/title/tt0102926/"
  // },
  // {
  //   "id": "15",
  //   "movie": "Star Wars: Episode V - The Empire Strikes Back",
  //   "rating": 8.7,
  //   "image": "images/empire_strikes_back.jpg",
  //   "imdb_url": "https://www.imdb.com/title/tt0080684/"
  // },
  // {
  //   "id": "16",
  //   "movie": "Saving Private Ryan",
  //   "rating": 8.6,
  //   "image": "images/saving_private_ryan.jpg",
  //   "imdb_url": "https://www.imdb.com/title/tt0120815/"
  // },
  // {
  //   "id": "17",
  //   "movie": "Parasite",
  //   "rating": 8.6,
  //   "image": "images/parasite.jpg",
  //   "imdb_url": "https://www.imdb.com/title/tt6751668/"
  // },
  // {
  //   "id": "18",
  //   "movie": "Gladiator",
  //   "rating": 8.5,
  //   "image": "images/gladiator.jpg",
  //   "imdb_url": "https://www.imdb.com/title/tt0172495/"
  // },
  // {
  //   "id": "19",
  //   "movie": "Jurassic Park",
  //   "rating": 8.1,
  //   "image": "images/jurassic_park.jpg",
  //   "imdb_url": "https://www.imdb.com/title/tt0107290/"
  // },
  // {
  //   "id": "20",
  //   "movie": "The Lion King",
  //   "rating": 8.5,
  //   "image": "images/lion_king.jpg",
  //   "imdb_url": "https://www.imdb.com/title/tt0110357/"
  // },
  // {
  //   "id": "21",
  //   "movie": "Blade Runner 2049",
  //   "rating": 8,
  //   "image": "images/blade_runner_2049.jpg",
  //   "imdb_url": "https://www.imdb.com/title/tt1856101/"
  // },
  // {
  //   "id": "22",
  //   "movie": "The Prestige",
  //   "rating": 8.5,
  //   "image": "images/the_prestige.jpg",
  //   "imdb_url": "https://www.imdb.com/title/tt0482571/"
  // },
  // {
  //   "id": "23",
  //   "movie": "Mad Max: Fury Road",
  //   "rating": 8.1,
  //   "image": "images/mad_max_fury_road.jpg",
  //   "imdb_url": "https://www.imdb.com/title/tt1392190/"
  // }