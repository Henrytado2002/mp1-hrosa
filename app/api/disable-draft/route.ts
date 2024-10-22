import { draftMode } from "next/headers";

// eslint-disable-next-line
export async function GET(request: Request) {
  draftMode().disable();
  return new Response("Draft mode is disabled");
}
