import prisma from "./prisma";

export async function getPosts () {
    try {
        const posts = await prisma.post.findMany({
            orderBy : [
                {id: "desc"}
            ]
        })
        return { posts }
    } catch(error) {
        return {error}
    }
}