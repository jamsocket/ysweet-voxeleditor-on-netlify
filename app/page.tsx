import { VoxelEditor } from "./VoxelEditor";
import { YDocProvider } from "@y-sweet/react";
import { getOrCreateDocAndToken } from "@y-sweet/sdk";
import { CONNECTION_STRING } from "./lib/config";

type HomeProps = {
  // searchParams is an object provided by Next.js containing URL parameters.
  // See: https://nextjs.org/docs/app/api-reference/file-conventions/page
  searchParams: Record<string, string>;
};

export default async function Home({ searchParams }: HomeProps) {
  const clientToken = await getOrCreateDocAndToken(
    CONNECTION_STRING,
    searchParams.doc,
  );

  return (
    <YDocProvider clientToken={clientToken} setQueryParam="doc">
      <VoxelEditor />
    </YDocProvider>
  );
}
