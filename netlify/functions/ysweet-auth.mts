import '@netlify/functions'
import { getOrCreateDocAndToken } from "@y-sweet/sdk";

export default async function handler(req: Request) {
  if (req.method !== 'POST') return new Response('Method not allowed', { status: 405 })

  let docId: string
  try {
    docId = (await req.json()).docId
    if (!docId || typeof docId !== 'string') throw new Error('docId must be a string')
  } catch {
    return new Response('Body must contain a docId string', { status: 400 })
  }

  const connectionString = Netlify.env.get("Y_SWEET_CONNECTION_STRING")
  if (!connectionString) return new Response('Y-Sweet connection string is not set', { status: 500 })

  // In a production environment, you would want to authenticate the user and check
  // that they are authorized to access the document.

  const clientToken = await getOrCreateDocAndToken(connectionString, docId)
  return Response.json(clientToken)
}
