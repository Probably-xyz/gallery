import prisma from "./prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth";


async function getApproved () {
    const session = await getServerSession(authOptions)
    
    const email = session?.user.email

    const user = await prisma.user.findUnique({
        where: {
            email: email!
        }
    })

    const approvedUser = user?.approved
    const notApproved = !user?.approved

    return {approvedUser, notApproved}
}


