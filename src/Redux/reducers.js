const posts = (state = [], action) => {

    switch (action.type) {
        case 'FETCH_POSTS_SUCCESS':
            return action.payload.posts
        case 'SEARCHED_POST':
            return action.data
        default:
            return state
    }
}

export default posts