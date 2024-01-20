import { publicProcedure, router } from './trpc';
import { z } from 'zod'
import { userRoute } from './userRoute';

export const appRouter = router({
    user: userRoute
});

// Export type router type signature,
// NOT the router itself.
// export type AppRouter = typeof appRouter;