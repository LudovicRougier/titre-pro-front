import withAuthorization from "@/middlewares/withAuthorization";
import { Path } from "@/shared/enums/path";
import { NextMiddleware, NextResponse } from "next/server";

const protectedPaths = [Path.ACCOUNT_SETTINGS, Path.MOOD];

const mainMiddleware: NextMiddleware = () => NextResponse.next();
export default withAuthorization(mainMiddleware, protectedPaths);
