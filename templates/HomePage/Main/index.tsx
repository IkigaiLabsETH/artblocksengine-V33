import cn from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import styles from "./Main.module.sass";
import Arrow from "@/components/Arrow";
import Item from "./Item";

const list = [
    {
        title: "Ikigai Labs.",
        collection: "LFG II",
        price: "6.9 ETH",
        reserve: "4.20 ETH",
        image: "/images/main-pic-1.jpg",
    },
    {
        title: "Ikigai Labs.",
        collection: "LFG I",
        price: "6.9 ETH",
        reserve: "4.20 ETH",
        image: "/images/main-pic-2.jpg",
        color: "#BCE6EC",
    },
    {
        title: "Ikigai Labs.",
        collection: "LFG III",
        price: "6.9 ETH",
        reserve: "4.20 ETH",
        image: "/images/auction-pic-2.jpg",
        color: "#B9A9FB",
    },
];

import { Navigation, Scrollbar } from "swiper";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

type MainProps = {};

const Main = ({}: MainProps) => (
    <>
        <div className={styles.row}>
            <div className={styles.col}>
                <h1 className={cn("hero", styles.title)}>ArtBlocks Engine 🐻⛓️</h1>
                <Arrow className={styles.arrow} />
            </div>
            <div className={styles.col}>
                <div className={styles.content}>
                   Life is not fungible. We’re all an ERC-721. Finding Ikigai.
                </div>
                <Link href="/discover">
                    <a className={cn("button-empty", styles.search)}>
                        start your odyssey
                    </a>
                </Link>
            </div>
        </div>
        <div className={styles.wrapper}>
            <Swiper
                navigation={true}
                loop={false}
                modules={[Navigation, Scrollbar]}
                className="vertical-swiper"
                direction="vertical"
                scrollbar={{
                    hide: true,
                }}
                speed={700}
                breakpoints={{
                    320: {
                        direction: "horizontal",
                    },
                    1024: {
                        direction: "vertical",
                    },
                }}
            >
                {list.map((x, index) => (
                    <SwiperSlide key={index}>
                        <Item item={x} key={index} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </>
);

export default Main;
