import cn from "classnames";
import styles from "./DetailsCollection.module.sass";
import Icon from "@/components/Icon";

type DetailsType = {
    label: string;
    value: string;
};

type DetailsProps = {
    details: DetailsType[];
};

const Details = ({ details }: DetailsProps) => {
    return (
        <div className={styles.details}>
            <div className={styles.head}>
                <div className={styles.box}>
                    <div className={cn("h2", styles.user)}>LiveTheLife</div>
                    <div className={styles.line}>
                        <div className={styles.category}>CUTE</div>
                        <div className={styles.code}>
                            0xE5A1....D0306
                            <button className={styles.copy}>
                                <Icon name="copy" />
                            </button>
                        </div>
                    </div>
                </div>
                <button
                    className={cn(
                        "button-stroke-grey button-medium",
                        styles.button
                    )}
                >
                    <span>edit</span>
                    <Icon name="edit" />
                </button>
            </div>
            <div className={styles.list}>
                {details.map((item, index) => (
                    <div className={styles.item} key={index}>
                        <div className={styles.label}>
                            <Icon name="profile-fat" />
                            {item.label}
                        </div>
                        <div className={cn("h4", styles.value)}>
                            {item.value}
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.foot}>
                <div className={styles.stage}>Description</div>
                <div className={styles.content}>
                   CREATE / CURATE / COLLECT. 
                   Turn creators into curators & collectors into co-owners. 
                   It's the Renaissance but onchain! Life is not fungible. 
                   We’re all an ERC-721.
                </div>
            </div>
        </div>
    );
};

export default Details;
