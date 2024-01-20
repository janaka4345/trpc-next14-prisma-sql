import { z } from "zod";
import { publicProcedure, router } from "./trpc";
import { prisma } from "./prismaclient";

export const userRoute = router({
    users: publicProcedure
        // .input(z.string())
        .query(async () => {
            const allUsers = await prisma.User.findMany()
            await prisma.$disconnect()
            return allUsers;
        }),
});