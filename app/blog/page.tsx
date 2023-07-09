import type { Metadata } from 'next'
import Link from "next/link";
export const metadata: Metadata = {
    title: 'Blog | Maxsa App',
    description: 'Blog description',
}

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
        next: {
            revalidate: 60
        }
    });

    return response.json();
}

const Blog = async () => {
    const post = await getData();
    return (
        <>
            <h1>
                Blog
            </h1>
            <ul>
                {post.map((post: any) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Blog;