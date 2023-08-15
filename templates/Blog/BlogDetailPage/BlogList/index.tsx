import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import cn from "classnames";
import styles from "./BlogList.module.sass";
import Image from "@/components/Image";

import { Navigation, Scrollbar } from "swiper";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

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

type BlogListProps = {
    items: any;
};

const BlogList = ({ items }: BlogListProps) => (
    <div className={styles.blog}>
        <div className={styles.wrapper}>
            <div className={cn("h2", styles.title)}>You may also like</div>
            <div className={styles.inner}>
                <Swiper
                    navigation={true}
                    loop={true}
                    modules={[Navigation, Scrollbar]}
                    className="blog-swiper"
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                    }}
                >
                    {items.map((item: any, index: number) => (
                        <SwiperSlide key={index}>
                            <Link href={item.url}>
                                <a className={styles.item}>
                                    <div className={styles.preview}>
                                        <Image
                                            src={item.image}
                                            layout="fill"
                                            objectFit="cover"
                                            alt="Blog"
                                        />
                                    </div>
                                    <div className={cn("h4", styles.subtitle)}>
                                        {item.title}
                                    </div>
                                    <div className={styles.content}>
                                        {item.content}
                                    </div>
                                </a>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    </div>
);

export default BlogList;
