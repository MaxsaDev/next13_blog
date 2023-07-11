'use client';
import Posts from "@/components/Posts";
import PostSearch from "@/components/PostSearch";
import {usePosts} from "@/store";
import {shallow} from "zustand/shallow";
import {useEffect} from "react";

const Blog = () => {
    const [posts, loading, getAllPosts] = usePosts((state) => [
        state.posts,
        state.loading,
        state.getAllPosts
    ], shallow);

    useEffect(() => {
        getAllPosts();

    }, [getAllPosts]);

    return (
        <>
            <h1> Blog Page </h1>
            <PostSearch />
            {
                loading
                    ? (
                        <p>Loading...</p>
                    )
                    : (
                        <Posts posts={posts}/>
                    )
            }

        </>
    );
};

export default Blog;