'use client';

import { useEffect, useState } from "react";
import Posts from "@/components/Posts";
import { getAllPosts } from "@/services/getPosts";
import PostSearch from "@/components/PostSearch";

const Blog = () => {
    const [posts, setPosts] = useState<any []>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        getAllPosts()
            .then((data) => setPosts(data))
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            <h1> Blog Page </h1>
            <PostSearch onSearch={setPosts}/>
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