import Link from "next/link";
import cn from "classnames";
import styles from "./CreatePage.module.sass";
import Layout from "@/components/Layout";
import LayoutCreate from "@/components/LayoutCreate";
import Arrow from "@/components/Arrow";
import Icon from "@/components/Icon";

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
                    <div className={styles.counter}>0</div>
                </div>
                <Link href="/create/step-1">
                    <a className={styles.add}>
                        <div className={styles.plus}></div>
                        <div className={styles.info}>Create new collection</div>
                        <div className={styles.text}>GM ANON LFG</div>
                    </a>
                </Link>
                <div className={styles.list}>
                    {Array.from(Array(3).keys()).map((x) => (
                        <div className={styles.item} key={x}>
                            <div className={styles.preview}>
                                <Icon name="picture" />
                            </div>
                            <div className={styles.lines}></div>
                        </div>
                    ))}
                </div>
                <div className={styles.foot}>
                    <Link href="/article">
                        <a className={styles.link}>
                            Read more on the Ikigai Editorial
                        </a>
                    </Link>
                </div>
            </LayoutCreate>
        </Layout>
    );
};

export default CreatPage;
