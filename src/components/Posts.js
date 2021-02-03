import React from 'react'
import Post from './Post'

// We can destructure props
const Posts = (props) => {

    const posts = [{ title: 'React', content: 'I love Facebook' }, { title: 'Angular', content: 'I am ok ig' }, { title: 'Vue', content: 'New Framework' }]

    return (
        <div>
            {/* <h1>Posts</h1>
            <section>
                <h3>{props.article}</h3>
            Run: <code>{props.code}</code>
            </section>
            <p>I have {posts.length} posts</p> */}

            {posts.map(post => (
                <Post title={post.title} content={post.content} />
            ))}

        </div>
    )
}

export default Posts;