import { createFileRoute, useRouter } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";
import * as fs from "node:fs";
const filePath = "count.txt";

async function readCount() {
  return parseInt(
    await fs.promises.readFile(filePath, "utf8").catch(() => "0")
  );
}

const getCount = createServerFn({ method: "GET" }).handler(readCount);
const updateCount = createServerFn({ method: "POST" })
  .validator((d: number) => d)
  .handler(async ({ data }) => {
    const count = await readCount();
    await fs.promises.writeFile(filePath, (count + data).toString());
  });

export const Route = createFileRoute("/")({
  component: Home,
  loader: async () => await getCount(),
});
function Home() {
  const router = useRouter();
  const state = Route.useLoaderData();
  return (
    <button
      type="button"
      onClick={() => updateCount({ data: 1 }).then(() => router.invalidate())}
    >
      Add 1 to {state}?
    </button>
  );
}
