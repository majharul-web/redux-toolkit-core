import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "./postSlice";

function PostView(props) {
    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    const dispatch = useDispatch();
    const {isLoading, posts, error} = useSelector((state) => state.post);
    return (
        <div>
            <p>Post View</p>
            {isLoading && <p>{isLoading}</p>}
            {error && <p>{error}</p>}
            <section>
                {
                    posts && posts.map(post => {
                        return <article key={post.id}>
                            <h5>{post.title}</h5>
                            <p>{post.body}</p>
                        </article>
                    })
                }
            </section>
        </div>
    );
}

export default PostView;