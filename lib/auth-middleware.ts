// Auth middleware placeholder
import { NextRequest, NextResponse } from 'next/server';

interface AuthMiddlewareConfig {
  protectedRoutes: string[];
  loginPath: string;
  clientId: string;
  authServiceUrl: string;
}

export function createAuthMiddleware(config: AuthMiddlewareConfig) {
  return function middleware(request: NextRequest) {
    // For now, just pass through all requests
    // Add authentication logic here when needed
    return NextResponse.next();
  };
}