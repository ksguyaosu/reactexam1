import React from 'react';
import Privet from "./postItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, title, remove}) => {

    if(!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>Посты не найдены!</h1>
        )
    }

    return (
        <div>
            <h1>{title}</h1>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                    <Privet remove={remove} number={index + 1} post={post} key={post.id}/>
                    </CSSTransition>
                )}
            </TransitionGroup>

        </div>
    );
};

export default PostList;