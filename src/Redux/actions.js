import axios from 'axios'

//synchronous action creator
const fetchPostsSuccess = posts => ({
    type: 'FETCH_POSTS_SUCCESS',
    payload: { posts }
})

/*asynchronous thunk action creator
  calls the api, then dispatches the synchronous action creator
*/
export const fetchPosts = () => {
    return async dispatch => {
        try {
            let posts = await axios.get('https://raw.githubusercontent.com/Lokenath/MyRepo/master/Test/package.json')
            dispatch(fetchPostsSuccess(posts.data.pics)) //store first five posts
        }
        catch (e) {
            console.log(e)
        }
    }
}

export const searchedPosts = (data) => {
    return (dispatch, getState) => {
        dispatch({ type: 'SEARCHED_POST', data })
    }
}
