import type { NextRequest } from "next/server";
import { getRequestContext } from "@cloudflare/next-on-pages";
import { createDb } from "@/app/db";

export const runtime = "edge";

type MyResponse = {
  message: string;
  tasks: [];
};

async function getTasks(request: NextRequest) {
  let responseText = "Hello World";

  const DB = getRequestContext().env.DB;

  const drizzleDB = createDb(DB);

  const tasks = await drizzleDB.query.tasks.findMany({
    with: { category: true },
    limit: 3,
  });

  //const tasks = await DB.prepare("select * from tasks").all();

  // In the edge runtime you can use Bindings that are available in your application
  // (for more details see:
  //    - https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/#use-bindings-in-your-nextjs-application
  //    - https://developers.cloudflare.com/pages/functions/bindings/
  // )
  //
  // KV Example:
  // const myKv = getRequestContext().env.MY_KV_NAMESPACE
  // await myKv.put('suffix', ' from a KV store!')
  // const suffix = await myKv.get('suffix')
  // responseText += suffix

  return new Response(
    JSON.stringify({ message: responseText, tasks: tasks })
  ) as Response & MyResponse;
}

const client = {
  getTasks: async () => {
    let result = await fetch("http://localhost:3000/api/hello");
    return result.json() as unknown as MyResponse;
  },
};

export { getTasks as GET };
