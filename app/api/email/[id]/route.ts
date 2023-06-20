
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { RequestEmail } from '@/lib/emails/InvestorEmail';
import prisma from '@/lib/prisma';

const resend = new Resend(process.env.RESEND_API_KEY);



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

  const name = post?.name
  const image = post?.logo

    

  const session = await getServerSession(authOptions);

  const email = `${session?.user.email}`
    

  try {
    const data = await resend.emails.send({
      from: "Probably <hello@prbly.xyz>",
      to: email,
      subject: `Information request for ${name}`,
      react: RequestEmail({
        image,
        email,
        name
      })
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }


}
  
    

   

   
  
    

   