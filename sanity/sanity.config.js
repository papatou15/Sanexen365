import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Sanexen365',

  projectId: 'au6d1rq5',
  dataset: 'work',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
