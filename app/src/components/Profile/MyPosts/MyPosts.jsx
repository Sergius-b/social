import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postElement = props.postData.map(post => <Post message={post.message} likesCount={post.likesCount} />)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button className={s.post_button} onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div key={postElement.id} className={s.post}>
                {postElement}
            </div>
        </div>
    )
}

export default MyPosts;