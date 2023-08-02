import { useState } from "react";
import cn from "classnames";
import styles from "./Newsletter.module.sass";
import Icon from "@/components/Icon";
import Field from "@/components/Field";

type NewsletterProps = {};

const Newsletter = ({}: NewsletterProps) => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    return (
        <div className={styles.row}>
            <div className={styles.col}>
                <div className={cn("h2", styles.title)}>Editorial</div>
                <div className={styles.content}>
                    All collections on Ikigai Labs XYZ are
                    erc-721a creator-owned smart contracts. 
                </div>
                <div className={styles.btns}>
                    <a
                        className={cn("button-large", styles.button)}
                        href="https://livethelife.tv/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>live the life</span>
                        <Icon name="apple" />
                    </a>
                    <a
                        className={cn(
                            "button-white button-large",
                            styles.button
                        )}
                        href="https://livethelife.tv/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>good vibes</span>
                        <Icon name="google-play" />
                    </a>
                </div>
            </div>
            <div className={styles.col}>
                <div className={cn("h2", styles.title)}>Newsletter</div>
                <div className={styles.info}>
                    Get the latest Ikigai Labs XYZ updates
                </div>
                <form
                    className={styles.form}
                    action=""
                    onSubmit={() => console.log("Submit")}
                >
                    <div className={styles.fieldset}>
                        <Field
                            className={styles.field}
                            inputClassName={styles.input}
                            placeholder="Name"
                            icon="profile"
                            value={name}
                            onChange={(e: any) => setName(e.target.value)}
                            light
                            required
                        />
                        <Field
                            className={styles.field}
                            inputClassName={styles.input}
                            placeholder="Email"
                            type="email"
                            icon="email"
                            value={email}
                            onChange={(e: any) => setEmail(e.target.value)}
                            light
                            required
                        />
                    </div>
                    <button
                        className={cn(
                            "button-white button-large",
                            styles.button
                        )}
                        type="submit"
                    >
                        SUBSCRIBE NOW
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;
