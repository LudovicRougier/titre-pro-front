import withAuthorization from "@/middlewares/withAuthorization";
import { NextMiddleware, NextResponse } from "next/server";

const mainMiddleware: NextMiddleware = () => NextResponse.next();
export default withAuthorization(mainMiddleware, ["/home"]);
