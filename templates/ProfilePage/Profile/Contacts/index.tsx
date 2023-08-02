import Link from "next/link";
import styles from "./Contacts.module.sass";
import Icon from "@/components/Icon";

type LinksType = {
    title: string;
    icon: string;
    url: string;
};

type SocialsType = {
    icon: string;
    url: string;
};

type ContactsProps = {
    links: LinksType[];
    socials: SocialsType[];
};

const Contacts = ({ links, socials }: ContactsProps) => (
    <div className={styles.contacts}>
        <div className={styles.description}>
            <div className={styles.item}>
                <div className={styles.category}>bio</div>
                <div className={styles.content}>
                Art Blocks Engine to build on the momentum of generative minting. Our team can focus on storytelling, community, and culture. Art Blocks Engine does the magic in the backend. Art Blocks Engine allows the generative NFT minting technology used by artists at Art Blocks to be integrated with Ikigai Labs XYZ. Engine allows to release generative outputs using AB smart contracts and rendering infrastructure resulting in Ikigai Labs XYZ generative projects. We will own our smart contracts and can use them to release new gen art series. We will do a collab with https://journal.artfora.com/ so that we can offer plotter prints. Time to reach out to info@artblocks.io Ikigai Labs XYZ may soon launch a Dutch auction format. The sale will inaugurate the launch of an auction house’s Gen Art Program powered by Art Blocks’ Art Blocks Engine — the company’s generative art solutions platform that provides technical infrastructure support for brands looking to expand their generative minting capabilities. The sale will be conducted entirely on-chain via Ikigai Labs. It will feature an exclusive series of 99 unique artworks that build LTL's early forays into algorithmic art. The integration of the Art Blocks Engine is a new avenue for generative artists to bring primary market works to sale. The Gen Art Program will highlight artists. Ikigai Labs will explore Dutch auctions. This method, which has been used by Art Blocks since its inception in 2021, starts at a fixed initial price and decreases at set increments until the first bid is placed. The ceiling price is set at x ETH. The format is perfect for price discovery. Several Web3 platforms have experimented with the Dutch auction format. Most recently, the NFT marketplace Foundation announced a dynamic pricing feature for NFTs that utilizes the method to better reflect market sentiment and remove the guesswork when it comes to an artist pricing their pieces.
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.category}>links</div>
                <div className={styles.links}>
                    {links.map((link, index) => (
                        <Link href={link.url} key={index}>
                            <a className={styles.link}>
                                <Icon name={link.icon} />
                                {link.title}
                            </a>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
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
                </a>
            ))}
        </div>
    </div>
);

export default Contacts;
