import jwt from "jsonwebtoken";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Define the protected routes
  const protectedRoutes = ["/blog", "/dashboard"];

  // Retrieve the JWT token from the request
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // Check if the token is present
  const isAuthenticated = !!token;

  // Checking user is admin or not
  const adminMiddleware = () => {
    if (token?.accessToken) {
      const decodedToken = jwt.decode(token.accessToken);
      return decodedToken && decodedToken.role === "admin";
    }
    return false;
  };

  const isAdmin = adminMiddleware();

  // Redirect non-admin users trying to access admin-protected routes
  if (pathname.startsWith("/dashboard") && !isAdmin) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // If user is not authenticated and trying to access a protected route, redirect to login
  if (
    !isAuthenticated &&
    protectedRoutes.some((route) => pathname.startsWith(route))
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If user is authenticated and trying to access the login page, redirect to the dashboard
  if (isAuthenticated && pathname === "/login") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Allow the request to proceed
  return NextResponse.next();
}
