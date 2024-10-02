import { VoxelEditor } from "./VoxelEditor";
import { YDocProvider } from "@y-sweet/react";

function randomDocId() {
  return Math.random().toString(36).substring(2, 10);
}

export default async function Home(props: { searchParams: { doc: string } }) {
  const docId = props.searchParams.doc || randomDocId();
  return (
    <YDocProvider
      docId={docId}
      authEndpoint="/.netlify/functions/ysweet-auth"
      setQueryParam="doc"
    >
      <VoxelEditor />
    </YDocProvider>
  );
}
