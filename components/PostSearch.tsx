'use client';
import {FormEvent, useState} from "react";
import {usePosts} from "@/store";


const PostSearch = () => {
    const [search, setSearch] = useState<string>('');
    const getPostsBySearch = usePosts(state => state.getPostsBySearch);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await getPostsBySearch(search);
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