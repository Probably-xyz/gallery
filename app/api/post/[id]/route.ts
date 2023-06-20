import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const post = await prisma.post.findUnique({
    where: {
      id
    },
  });

  if (!post) {
    return new NextResponse("No user with ID found", { status: 404 });
  }

  return NextResponse.json(post);
}

