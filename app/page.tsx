import { VoxelEditor } from './VoxelEditor'
import { YDocProvider } from '@y-sweet/react'
import { getOrCreateDocAndToken } from '@y-sweet/sdk'

type HomeProps = {
  // searchParams is an object provided by Next.js containing URL parameters.
  // See: https://nextjs.org/docs/app/api-reference/file-conventions/page
  searchParams: Record<string, string>
}

// ****************************************************************
// ** TO DO: Replace this with your quickstart connection string **
// ****************************************************************
// For simplicity, we are hard-coding the connection string in the
// file. In a real app, you should instead pass this in through a
// secret store or environment variable.
const CONNECTION_STRING = process.env.Y_SWEET_CONNECTION_STRING ?? ""

export default async function Home({ searchParams }: HomeProps) {
  const clientToken = await getOrCreateDocAndToken(CONNECTION_STRING, searchParams.doc)

  return (
    <YDocProvider clientToken={clientToken} setQueryParam="doc">
      <VoxelEditor />
    </YDocProvider>
  )
}
