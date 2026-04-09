import React from 'react';

const BlogsDetailPage = async ({params}) => {

    const blogs = [
        {
            id: 1,
            title: "Understanding React Context API",
            author: "Ayan Banerjee",
            date: "2026-04-01",
            category: "React",
            tags: ["react", "context", "frontend"],
            content: "React Context API helps you manage global state without prop drilling. It is useful for sharing data like user info, themes, or settings across components."
        },
        {
            id: 2,
            title: "Why MERN Stack is Still Relevant",
            author: "Ayan Banerjee",
            date: "2026-04-02",
            category: "MERN",
            tags: ["mongodb", "express", "react", "node"],
            content: "MERN stack remains popular because it uses JavaScript everywhere. It simplifies development and allows faster iteration for full-stack applications."
        },
        {
            id: 3,
            title: "Common Mistakes Beginners Make in React",
            author: "Ayan Banerjee",
            date: "2026-04-03",
            category: "React",
            tags: ["react", "mistakes", "learning"],
            content: "Beginners often misuse state, overcomplicate components, and ignore fundamentals like props and data flow. Fixing these early saves time later."
        },
        {
            id: 4,
            title: "How to Structure a Small Frontend Project",
            author: "Ayan Banerjee",
            date: "2026-04-04",
            category: "Frontend",
            tags: ["project", "structure", "best-practices"],
            content: "A good project structure keeps components, hooks, and context separated logically. Avoid unnecessary files and keep things simple in the beginning."
        }
    ];

    const {blogId} = await params;
    const blog = blogs.find(blog => blog.id === parseInt(blogId))
console.log(blog);
    return (
        <div>
            <h4 className="text-3xl font-bold">Blog Details are coming soon</h4>
            {
                blog && (
                    <div>
                    <p className="">
                            {blog.title}
                    </p>
                    </div>
                )
            }
        </div>
    );
};

export default BlogsDetailPage;