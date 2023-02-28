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
  useCdn: true, // set to `true` to fetch from edge cache
  apiVersion: '2022-01-12', // use current date (YYYY-MM-DD) to target the latest API version
  token: 'skUBh3JKQ191tr06COu1dDW7YALDr1qKMHD5mOIfM3EGM2nVhmQQNI24szOQNuQyCguejyUHHbdVKtFRkC2N74Yj3IctfN3Lj8zDi4FgQ5KIaQ19jDjQUAQxmyI6vxSZYvEQJVz9jtwbOR5Ygl0Z8w2gOguSwsS8T45kE2JqWmpo5hMXPmuh'
})

// const builder = ImageUrlBuilder(client);
// export const urlFor = (source) => builder.image(source);

export default client;