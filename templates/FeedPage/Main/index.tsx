import { Swiper, SwiperSlide } from "swiper/react";
import cn from "classnames";
import styles from "./Main.module.sass";
import Arrow from "@/components/Arrow";
import Item from "./Item";

const list = [
    {
        title: "Ikigai",
        image: "/images/main-pic-2.jpg",
        photo: "/images/balls.jpg",
        category: "GEN-ART",
        login: "livethelifetv",
        avatar: "/images/artists/artist-3.jpg",
        url: "/collection",
    },
    {
        title: "Ikigai II",
        image: "/images/main-pic-1.jpg",
        photo: "/images/avatar-1.jpg",
        category: "GEN-ART",
        login: "livethelifetv",
        avatar: "/images/artists/artist-4.jpg",
        color: "#BCE6EC",
        url: "/collection",
    },
    {
        title: "Ikigai",
        image: "/images/auction-pic-2.jpg",
        photo: "/images/cute-planet.jpg",
        category: "GEN-ART",
        login: "delsaux",
        avatar: "/images/artists/artist-5.jpg",
        color: "#DBFF73",
        url: "/collection",
    },
];

import { Navigation } from "swiper";
import "swiper/css/navigation";

type MainProps = {};

const Main = ({}: MainProps) => (
    <>
        <div className={styles.row}>
            <div className={styles.wrap}>
                <h1 className={cn("hero", styles.title)}>
                    ArtBlocks <br></br>Engine 🐻⛓️
                </h1>
                <Arrow className={styles.arrow} color="#DBFF73" />
            </div>
            <div className={styles.box}>
                <div className={cn("h4", styles.info)}>Price from</div>
                <div className={cn("h2", styles.price)}>1.00 ETH</div>
            </div>
        </div>
        <div className={styles.wrapper}>
            <Swiper
                navigation={true}
                loop={true}
                modules={[Navigation]}
                className="vertical-swiper"
                direction="vertical"
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
