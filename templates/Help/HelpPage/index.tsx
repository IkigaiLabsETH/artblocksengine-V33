import { useState } from "react";
import cn from "classnames";
import styles from "./HelpPage.module.sass";
import Layout from "@/components/Layout";
import Form from "@/components/Form";
import Category from "./Category";

import { help } from "@/mocks/help";

const HelpPage = () => {
    const [search, setSearch] = useState<string>("");

    return (
        <Layout layoutNoOverflow footerHide>
            <div className={styles.row}>
                <div className={styles.col}>
                    <div className={styles.wrap}>
                        <div className={cn("hero", styles.title)}>
                            Help center
                        </div>
                        <div className={styles.content}>
                        Art Blocks Engine to build on the momentum of generative minting. Our team can focus on storytelling, community, and culture. Art Blocks Engine does the magic in the backend.{" "}
                        </div>
                        <Form
                            className={styles.form}
                            placeholder="Search topics"
                            value={search}
                            setValue={setSearch}
                            onSubmit={() => console.log("Submit")}
                            buttonRight
                        />
                    </div>
                </div>
                <div className={styles.col}>
                    {help.map((category, index) => (
                        <Category item={category} key={index} />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default HelpPage;
