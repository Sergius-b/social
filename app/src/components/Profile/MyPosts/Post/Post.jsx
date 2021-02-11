import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://cdn.freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg?mt=c7bcef8b' />
            {props.message}
            <div className={s.like}>
                <span><img src="https://img.icons8.com/fluent/48/000000/like.png"/></span>
            </div>
        </div>
    )
}

export default Post;