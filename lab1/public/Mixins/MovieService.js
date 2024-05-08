import axios from 'axios';

export default {
	
	methods: {
		async getAllMovie() {
			let Movies = await axios.get(`http://localhost:3000/Movies`);
			Movies = await Movies.data;
			return Movies;
		},
		async getMovie(id) {
			let Movie = await axios.get(`http://localhost:3000/Movies/${id}`);
			Movie = await Movie.data;
			return Movie;
		},
		async addMovie(MovieData){
			await axios.post(`http://localhost:3000/Movies`,MovieData)
			.then(res=> {
				console.log(res.data);
			})
			.catch(err=>{
				console.error(err);
			})
		},
		async deleteMovie(id){
			await axios.delete(`http://localhost:3000/Movies/${id}`)
			.then(res=> {
				console.log("Movie Deleted Successfully", res.data);
			})
			.catch(err=>{
				console.error(err);
			})
		},
		async updateMovie(id,newMovie){
			await axios.put(`http://localhost:3000/Movies/${id}`,newMovie)
			.then(res=> {
				console.log("Movie Updated Successfully", res.data);
			})
			.catch(err=>{
				console.error(err);
			})
		}

	
	},
};