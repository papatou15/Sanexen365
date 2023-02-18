import {createClient} from '@sanity/client'

export default async function Sanity() {
  const client = createClient({
    projectId: 'au6d1rq5',
    dataset: 'work',
    useCdn: false, // set to `true` to fetch from edge cache
    apiVersion: '2023-02-17', // use current date (YYYY-MM-DD) to target the latest API version
  })
}