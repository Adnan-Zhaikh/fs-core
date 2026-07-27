interface Post {
    id: number;
    title: string;
    content: string;
    published: boolean;
}

type PostPreview = Pick<Post, "id" | "title">;

function updatePost(post: Partial<Post>) {
    console.log(post);
}

updatePost({ title: "Utility"});

type PostById = Record<number, Post>;

const posts: PostById = {
    1: { id: 1, title: "First", content: "...", published: true },
    2: { id: 2, title: "Second", content: "...", published: false }
};