import imageUrlBuilder from '@sanity/image-url';
import sanity from "@sanity/client";

export const sanity = sanityClient({
  projectId: '49cceih7',
  dataset: 'production',
  apiVersion: '2022-05-01', 
  useCdn: true, 
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN, 
});



export const urlFor = (source) => createImageUrlBuilder(config).image(source)
export const sanityClient = createClient(config)