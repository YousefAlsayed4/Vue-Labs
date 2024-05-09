import { createStore } from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";

let store = createStore({
    state() { 
        return {
            Posts:[],
            CurrentPost: null
        }
    },
    mutations: {
        GetPosts(state, post) {
            state.Posts = post
        },
        AddPost(state, post) {
            state.Posts.unshift(post)
        },
        DeletePost(state, id) {
            state.Posts = state.Posts.filter(post => post.id !== id)
        },
        EditPost(state, editedPost) {
            const index = state.Posts.findIndex(post => post.id === editedPost.id);
            if (index !== -1) {
                state.Posts.splice(index, 1, editedPost);
            }
        },
        GetPostById(state, id) {
            state.CurrentPost = state.Posts.find(post => post.id === id);
          },          
    },
    actions: {
       async GetAllPosts({ commit }) {
           await axios.get("http://localhost:3000/posts").
                then(res => { commit("GetPosts", res.data) }).
                catch(err => { console.log(err) });
        },
        async AddNewPost({ commit }, post) {
            await axios.post("http://localhost:3000/posts", post).
                then(() => {
                    commit("AddPost", post)
                    console.log("Post added successfully");
                 }).
                catch(err => { console.log(err) });
        },
        async DeletePost({ commit }, id) {
            await axios.delete(`http://localhost:3000/posts/${id}`).
                then(() => {
                    commit("DeletePost", id)
                    console.log("Post deleted successfully")
                }).
                catch(err => { console.log(err) });
        },
        async EditPost({ commit }, post) {
                await axios.put(`http://localhost:3000/posts/${post.id}`, post).then(() => {
                commit("EditPost", post);
                    console.log("Post updated successfully");
                }).catch(err => { console.log(err) });
        },
        async GetPostById({ commit }, id) {
            await axios.get(`http://localhost:3000/posts/${id}`).
                then(() => { commit("GetPostById", id) }).
                catch(err => { console.log(err) });
        }
    },
    getters: {},
    plugins: [createPersistedState()]

});

export default store;