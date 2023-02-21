import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Sanexen365',

  projectId: 'au6d1rq5',
  dataset: 'work',
  document: {
    // prev is the result from previous plugins and thus can be composed
    productionUrl: async (prev, context) => {
      // context includes the client and other details
      const {client, dataset, document} = context

      if (document._type === 'post') {
        const slug = await client.fetch(
          `*[_type == 'routeInfo' && post._ref == $postId][0].slug.current`,
          {postId: document._id}
        )

        const params = new URLSearchParams()
        params.set('preview', 'true')
        params.set('dataset', dataset)

        return `https://my-site.com/posts/${slug}?${params}`
      }

      return prev
    },
  },

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
