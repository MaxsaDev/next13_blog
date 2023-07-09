import {Metadata} from "next";

export async function generateMetadata({params: {id}}: Props): Promise<Metadata> {
    const post = await getData(id);
    return {
        title: `${post.title} | Maxsa App`,
        description: `${post.title} description`,
    }
}

async function getData(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60
        }
    });
    return response.json();
}

type Props = {
    params: {
        id: string;
    }
}






const Post = async ({params: {id}}: Props) => {
    const post = await getData(id);
    return (
        <>
            <h1> {post.title} </h1>
            <p>
                {post.body}
            </p>
        </>
    );
};

export default Post;