import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";
import log from "./util/print-log";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const response = NextResponse.next();

  const allCookies = req.cookies.getAll()
  const isNextjs = req.cookies.has('nextjs')
  response.headers.set("x-modified-edge", "true");
  
  log.info(`执行请求中间件: ${allCookies.length} ${isNextjs}`)

  return response;
}

export const config = {
  matcher: ['/'],
}