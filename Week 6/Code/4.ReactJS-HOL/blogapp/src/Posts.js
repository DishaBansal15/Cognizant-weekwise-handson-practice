import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            hasError: false
        };
    }

    loadPosts = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => this.setState({ posts: data }))
            .catch(error => {
                console.error("Fetch error:", error);
                this.setState({ hasError: true });
            });
    }

    componentDidMount() {
        this.loadPosts();
    }

    componentDidCatch(error, info) {
        alert("An error occurred in the Posts component.");
        console.error("Error caught:", error, info);
    }

    render() {
        const { posts, hasError } = this.state;

        if (hasError) {
            return <h2>Something went wrong while fetching posts.</h2>;
        }

        return (
            <div>
                <h1>Blog Posts</h1>
                {posts.slice(0, 10).map(post => (
                    <Post key={post.id} title={post.title} body={post.body} />
                ))}
            </div>
        );
    }
}

export default Posts;
