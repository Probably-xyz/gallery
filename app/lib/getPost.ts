// import prisma from "./prisma";

 
// interface IParams {
//   postId: string;

// }

// export default async function getPostById(
//   params: IParams
// ) {
//   try {
//     const { postId} = params;

//     const post = await prisma.post.findUnique({
//       where: {
//        id: postId
//       },
//     });

//     if (!post) {
//       return null;
//     }

//     return {
//       ...post,
     
      
//     };screen
//   } catch (error: any) {
//     throw new Error(error);
//   }
// }