import {createClient} from '@sanity/client'

// export default async function Sanity() {
//   const client = createClient({
//     projectId: 'au6d1rq5',
//     dataset: 'work',
//     useCdn: false, // set to `true` to fetch from edge cache
//     apiVersion: '2023-02-17', // use current date (YYYY-MM-DD) to target the latest API version
//   })
// }

const client = createClient({
  projectId: 'au6d1rq5',
  dataset: 'work',
  useCdn: false, // set to `true` to fetch from edge cache
  apiVersion: '2022-01-12', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

// const builder = ImageUrlBuilder(client);
// export const urlFor = (source) => builder.image(source);

export default client;