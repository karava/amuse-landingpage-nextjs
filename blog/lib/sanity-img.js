import createImageUrlBuilder from '@sanity/image-url'

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({
  projectId: 'eh9ib995',
  dataset: 'production',
})

export const urlFor = (source) => {
  return builder.image(source)
}
