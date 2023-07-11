'use client';
import {FormEvent, useState} from "react";
import {getPostsBySearch} from "@/services/getPosts";

type Props = {
    onSearch: (search: string[]) => void;
}

const PostSearch = ({onSearch}: Props) => {
    const [search, setSearch] = useState<string>('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const posts = await getPostsBySearch(search);
        onSearch(posts);
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