import * as api from '../api'

//Create action creators which returns actions for reducers
export const getPosts=() => async (dispatch) => {

    try {

        const {data}=await api.fetchPosts()
        dispatch({type: 'FETCH_ALL', payload: data})

    } catch (error) {

        console.log(error.message)

    }
}

export const createPost=(post) => async (dispatch) => {
    try {
        const {data}=await api.newPost(post)
        dispatch({type: 'CREATE', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}