import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'im2vpgla',
  dataset: 'production',
  apiVersion: '2024-06-16',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
