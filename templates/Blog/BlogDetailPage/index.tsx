import Layout from "@/components/Layout";
import Main from "@/components/Main";
import Article from "./Article";
import BlogList from "./BlogList";
import Newsletter from "@/components/Newsletter";
// import GhostContentAPI from '@tryghost/content-api'
// const {slugify} = require('@tryghost/string');
// const slug = slugify('你好 👋!'); // slug === "ni-hao"

// import {tags, readingTime} from '@tryghost/helpers'
// // Outputs e.g. A 5 minute read.
// posts.forEach((post) => {
//    readingTime(post, {minute: 'A 1 minute read.', minutes: 'A % minute read.'});
// });
// Outputs e.g. Posted in: New Things, Releases, Features.
// posts.forEach((post) => {
//     tags(post, {prefix: 'Posted in: ', suffix: '.'});
// });

// DOCS https://ghost.org/docs/content-api/javascript/

import { blogSlider } from "@/mocks/blog";

const BlogDetailPage = () => {
    return (
        <Layout layoutNoOverflow>
            <Main
                classTitle="h1"
                image="/images/blog-detail.jpg"
                title="Metaverse Fine Art Gallery"
                info="Digital Collectibles"
            />
            <Article />
            <BlogList items={blogSlider} />
            <Newsletter />
        </Layout>
    );
};

export default BlogDetailPage;
