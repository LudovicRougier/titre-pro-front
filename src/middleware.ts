import withAuthorization from "@/middlewares/withAuthorization";
import { Path } from "@/shared/enums/path";
import { NextMiddleware, NextResponse } from "next/server";

const protectedPaths = [Path.HOME, Path.ACCOUNT_SETTINGS, Path.MOOD_HISTORY];

const mainMiddleware: NextMiddleware = () => NextResponse.next();
export default withAuthorization(mainMiddleware, protectedPaths);
