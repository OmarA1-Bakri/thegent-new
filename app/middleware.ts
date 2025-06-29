import { createAuthMiddleware } from '@/lib/auth-middleware';
import { config as authConfig, authPaths } from '@/config';
const protectedRoutes: string[] = [



];
export const middleware = createAuthMiddleware({
  protectedRoutes,
  loginPath: authPaths.signIn,
  clientId: authConfig.clientId,
  authServiceUrl: authConfig.authServiceUrl,
});
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|api/|login|callback|auth/|images/|fonts/|static/|public/|favicon.ico).*)',
  ]
};
