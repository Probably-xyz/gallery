import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { RequestEmail } from '@/lib/emails/InvestorEmail';

const resend = new Resend(process.env.RESEND_API_KEY);



export async function GET() {

    const name = "Mirathi"
    const image = "https://uawwnkwoyhkmotmoncgk.supabase.co/storage/v1/object/sign/logo/1677856840938.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsb2dvLzE2Nzc4NTY4NDA5MzguanBlZyIsImlhdCI6MTY4NjI5MzkyMiwiZXhwIjoxNjg2ODk4NzIyfQ.7fkneI7FE4wK2y5vwZJj3hoUxTl0U2y5lQ7vMjXG_jw&t=2023-06-09T06%3A58%3A42.591Z"
    const email = "nabkan1998@gmail.com"

    const session = await getServerSession(authOptions);
    

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
  
    

   