'use client';
import {FormEvent, useState} from "react";
// import {usePosts} from "@/store";
import useSWR from "swr";
import {getPostsBySearch} from "@/services/getPosts";


const PostSearch = () => {
    const { mutate } = useSWR('posts');
    const [search, setSearch] = useState<string>('');
    // const getPostsBySearch = usePosts(state => state.getPostsBySearch);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const posts = await getPostsBySearch(search);
        mutate(posts);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='search'
                   placeholder='Search Posts...'
                   value={search}
                   onChange={(e) => setSearch(e.target.value)}
            />
            <button type='submit'>Search</button>
        </form>
    );
};

export default PostSearch;