import Link from "next/link";
import cn from "classnames";
import styles from "./CreateWithCollectionPage.module.sass";
import Layout from "@/components/Layout";
import LayoutCreate from "@/components/LayoutCreate";
import Arrow from "@/components/Arrow";
import Image from "@/components/Image";

const list = [
    {
        title: "Good Vibes",
        price: "69 NFT",
        image: "/images/cute-planet.jpg",
        url: "/collection",
    },
    {
        title: "Ikigai",
        price: "420 NFT",
        image: "/images/escape.jpg",
        url: "/collection",
    },
];

const CreatPage = () => {
    return (
        <Layout layoutNoOverflow footerHide emptyHeader>
            <LayoutCreate
                left={
                    <>
                        <div className={cn("h1", styles.title)}>
                            Create on <br></br>IKIGAI.
                        </div>
                        <Arrow className={styles.arrow} />
                        <div className={styles.content}>
                        Art Blocks Engine to build on the momentum of generative minting. Our team can focus on storytelling, community, and culture. Art Blocks Engine does the magic in the backend.
                        </div>
                    </>
                }
            >
                <div className={styles.head}>
                    <div className={styles.subtitle}>Your collection</div>
                    <div className={styles.counter}>2</div>
                </div>
                <Link href="/create/step-1">
                    <a className={styles.add}>
                        <div className={styles.plus}></div>
                        Create new collection
                    </a>
                </Link>
                <div className={styles.list}>
                    {list.map((item, index) => (
                        <Link href={item.url} key={index}>
                            <a className={styles.item}>
                                <div className={styles.preview}>
                                    <Image
                                        src={item.image}
                                        layout="fill"
                                        objectFit="cover"
                                        alt="NFTs"
                                    />
                                </div>
                                <div className={styles.details}>
                                    <div className={styles.info}>
                                        {item.title}
                                    </div>
                                    <div className={styles.price}>
                                        {item.price}
                                    </div>
                                </div>
                            </a>
                        </Link>
                    ))}
                </div>
                <div className={styles.foot}>
                    <Link href="/">
                        <a className={styles.link}>
                            Read on the Ikigai Editorial
                        </a>
                    </Link>
                </div>
            </LayoutCreate>
        </Layout>
    );
};

export default CreatPage;
