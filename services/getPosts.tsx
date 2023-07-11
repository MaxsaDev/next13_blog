export const getAllPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!response.ok) throw new Error('Unable to fetch posts.');

    return response.json();
}

export const getPostsBySearch = async (search: string) => {
    const responce = await fetch (`https://jsonplaceholder.typicode.com/posts?q=${search}`);

    if (!responce.ok) throw new Error('Unable to fetch posts.');

    return responce.json();
}