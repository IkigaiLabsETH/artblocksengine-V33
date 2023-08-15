import cn from "classnames";
import styles from "./Article.module.sass";
import Image from "@/components/Image";
import Icon from "@/components/Icon";
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

// const api = new GhostContentAPI({
//    url: 'https://livethelifetv.ghost.io',
//    key: '',
//    version: "v5.0"
//  });

// DOCS https://ghost.org/docs/content-api/javascript/

const socials = [
    {
        title: "Instagram",
        icon: "instagram",
        url: "https://www.instagram.com/livethelife.tv/",
    },
    {
        title: "Twitter",
        icon: "twitter",
        url: "https://twitter.com/livethelifetv",
    },
    {
        title: "Facebook",
        icon: "facebook",
        url: "https://www.facebook.com/LiveTheLife/",
    },
];

type ArticleProps = {};

const Article = ({}: ArticleProps) => (
    <div className={styles.article}>
        <div className={cn("content", styles.content)}>
            <h3>Introducing Ikigai Labs the operating system for web3.</h3>
            <h5>
                Web3 is the next evolution of the internet built on open
                infrastructure where information, code, and objects are free to
                travel.
            </h5>
            <p>
                Art Blocks Engine to build on the momentum of generative minting. Our team can focus on storytelling, community, and culture. Art Blocks Engine does the magic in the backend.
            </p>
            <p>
            Art Blocks Engine allows the generative NFT minting technology used by artists at Art Blocks to be integrated with Ikigai Labs XYZ. Engine allows to release generative outputs using AB smart contracts and rendering infrastructure resulting in Ikigai Labs XYZ generative projects. 
            </p>
            <p>
            We will own our smart contracts and can use them to release new gen art series. We will do a collab with https://journal.artfora.com/ so that we can offer plotter prints. Time to reach out to info@artblocks.io Ikigai Labs XYZ may soon launch a Dutch auction format.
            </p>
            <p>
            The sale will be conducted entirely on-chain via Ikigai Labs. It will feature an exclusive series of 99 unique artworks that build LTL's early forays into algorithmic art. The integration of the Art Blocks Engine is a new avenue for generative artists to bring primary market works to sale. 
            </p>
        </div>
        <div className={styles.photo}>
            <Image
                src="/images/content-pic-1.jpg"
                width={1440}
                height={848}
                alt="Content"
            />
        </div>
        <div className={cn("content", styles.content)}>
            <h3>The Art Blocks Engine is Pure Bliss.</h3>
            <h5>
            The Gen Art Program will highlight artists. Ikigai Labs will explore Dutch auctions. This method, which has been used by Art Blocks since its inception in 2021, starts at a fixed initial price and decreases at set increments until the first bid is placed. The ceiling price is set at x ETH. The format is perfect for price discovery. 
            </h5>
            <figure>
                <Image
                    src="/images/content-pic-2.jpg"
                    width={960}
                    height={600}
                    alt="Content"
                />
            </figure>
            <p>
                Art Blocks Engine to build on the momentum of generative minting. Our team can focus on storytelling, community, and culture. Art Blocks Engine does the magic in the backend.
            </p>
            <p>
            Several Web3 platforms have experimented with the Dutch auction format. Most recently, the NFT marketplace Foundation announced a dynamic pricing feature for NFTs that utilizes the method to better reflect market sentiment and remove the guesswork when it comes to an artist pricing their pieces.
            </p>
            <p>
            Several Web3 platforms have experimented with the Dutch auction format. Most recently, the NFT marketplace Foundation announced a dynamic pricing feature for NFTs that utilizes the method to better reflect market sentiment and remove the guesswork when it comes to an artist pricing their pieces.
            </p>
            <p>
            Several Web3 platforms have experimented with the Dutch auction format. Most recently, the NFT marketplace Foundation announced a dynamic pricing feature for NFTs that utilizes the method to better reflect market sentiment and remove the guesswork when it comes to an artist pricing their pieces.
            </p>
            <ul>
                <li>Connect your wallet to ikigai</li>
                <li>Guide to collection NFT artworks on ikigai</li>
                <li>Marketplace balance</li>
                <li>Marketplace fees</li>
                <li>What is offer price?</li>
            </ul>
        </div>
        <div className={styles.share}>
            <div className={styles.info}>share this post</div>
            <div className={styles.socials}>
                {socials.map((social, index) => (
                    <a
                        className={styles.social}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={index}
                    >
                        <Icon name={social.icon} />
                        {social.title}
                    </a>
                ))}
            </div>
        </div>
    </div>
);

export default Article;
