import Layout from "@/components/Layout";
import Main from "@/components/Main";
import Articles from "./Articles";
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


import { blog } from "@/mocks/blog";

const HelpDetailPage = () => {
    return (
        <Layout layoutNoOverflow>
            <Main
                classTitle="hero"
                image="/images/blog.jpg"
                title="IKIGAI LABS XYZ"
                info="The Web3 Editorial"
            />
            <Articles items={blog} />
            <Newsletter />
        </Layout>
    );
};

export default HelpDetailPage;
