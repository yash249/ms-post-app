import React, { Component } from 'react'
import Card from '../../Components/Card/Card'
import { connect } from 'react-redux'
import './PostsPage.css'

class PostsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            picsData: [],
            imageClickedUrl: null,
            outsideImageClicked: false
        }
    }

    onLikeClicked = (id) => {
        let newData = this.props.picsData.map(item => {
            if (id === item.id && item.liked !== true) {
                let currentItem = item
                currentItem.likes = item.likes + 1
                currentItem.liked = true
                return currentItem
            }
            if (id === item.id && item.liked === true) {
                let currentItem = item
                currentItem.likes = item.likes - 1
                currentItem.liked = false
                return currentItem
            }
            else {
                return item;
            }
        })

        this.setState(prevState => {
            return {
                ...prevState,
                picsData: newData
            }
        })
    }

    onCommentChange = (event, id) => {
        this.setState({ newComment: event.target.value })
    }

    onPostClicked = (id, comment) => {
        let newData = this.props.picsData.map(item => {
            if (id === item.id) {
                let currentItem = item
                item.comments.push(comment)
                currentItem = item
                return currentItem
            }
            else {
                return item;
            }
        })
        if (this.props.picsData !== newData) {
            this.setState({ picsData: newData })
        }
    }

    filterByMostLiked = () => {
        let sortedByLikes = this.props.picsData.sort(function (a, b) {
            return a.likes - b.likes;
        }).reverse();

        this.setState({ picsData: sortedByLikes }, () => { console.log("sortedByLikes") })
    }

    filterByMostCommented = () => {
        let sortedByLikes = this.props.picsData.sort(function (a, b) {
            return a.comments.length - b.comments.length;
        }).reverse();

        this.setState({ picsData: sortedByLikes }, () => { console.log("sortedByLikes") })
    }

    onSearchTermEntered = (event) => {
        const results = this.props.picsData.filter(item =>
            item.category.toLowerCase().includes(event.target.value)
        );

        this.setState({ picsData: results })
    }

    onImageClick = (url) => {
        this.setState({ imageClickedUrl: url })
    }

    onDeleteClick = (CardId, CommentKey) => {
        console.log(CardId, CommentKey)

        let newData = this.props.picsData.map(item => {
            if (CardId === item.id) {
                let currentItem = item
                item.comments.splice(CommentKey, 1);
                currentItem = item
                return currentItem
            }
            else {
                return item;
            }
        })

        if (this.props.picsData !== newData) {
            this.setState({ picsData: newData })
        }
    }

    render() {
        return (
            <>
                <div style={{ display: this.state.imageClickedUrl ? "block" : "none" }} id="overlay" onClick={() => { this.setState({ imageClickedUrl: null }) }}>
                    <div>
                        <img className="overlayImageStyle" src={this.state.imageClickedUrl} onClick='disabled click' alt="Avatar" style={{ width: "500px" }}></img>
                    </div>
                </div>
                <div>
                    <div className="Header">
                        <div className="filter" onClick={this.filterByMostLiked}>Most Liked</div>
                        <div className="filter">|</div>
                        <div className="filter" onClick={this.filterByMostCommented}>Most Commented</div>
                        <input type="search" onChange={this.onSearchTermEntered} placeholder="Search Images"></input>
                    </div>
                    <div className="Cards">
                        {this.props.picsData.map(item => <Card onDeleteClick={this.onDeleteClick} onImageClick={this.onImageClick} onPostClicked={this.onPostClicked} onCommentChange={this.onCommentChange} onLikeClicked={this.onLikeClicked} {...item} />)}
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    picsData: state,
});

export default connect(mapStateToProps)(PostsPage);