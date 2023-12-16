import sanityClient from "@sanity/Client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
    projectId: '',
    dataset: '',
    apiVersion: '',
    useCdn: true,
    token: process.env.SANITY_TOKEN
});