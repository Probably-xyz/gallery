import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { InvestorEmail } from '@/lib/emails/InvestorEmail';



const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET(
    request: Request,
    { params }: { params: { id: string, name: string} }
  ) {

    const session = await getServerSession(authOptions);

  try {
    const data = await resend.emails.send({
      from: 'Prbly <no-reply@prbly.xyz>',
      to: `${session?.user.email}`,
      subject: `Request for ${params.name}`,
      html: "<div> <p> Email for</p> </div>",
      react: InvestorEmail()
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}