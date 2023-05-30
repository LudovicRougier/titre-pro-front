import { Path } from "@/shared/enums/path";
import { getToken } from "next-auth/jwt";
import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from "next/server";

export default function withAuthorization(
  middleware: NextMiddleware,
  requireAuth: string[] = []
) {
  return async (request: NextRequest, next: NextFetchEvent) => {
    const { pathname } = request.nextUrl;
    if (requireAuth.some((path) => pathname.startsWith(path))) {
      const token = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET,
      });
      if (!token) {
        const url = new URL(Path.SIGNIN, request.url);
        url.searchParams.set("callbackUrl ", encodeURI(request.url));
        return NextResponse.redirect(url);
      }
    }
    return middleware(request, next);
  };
}
