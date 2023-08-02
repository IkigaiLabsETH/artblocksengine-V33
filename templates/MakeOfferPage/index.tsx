import { useState } from "react";
import Layout from "@/components/Layout";
import Description from "@/components/Description";
import Price from "@/components/Price";
import Details from "@/components/Details";

const statistics = [
    {
        label: "Created by",
        avatar: "/images/avatar.jpg",
        history: true,
        title: "Ikigai",
        login: "randomdash",
    },
    {
        label: "Collection",
        image: "/images/balls.jpg",
        title: "Escape",
        category: "cute",
    },
];

const links = [
    {
        title: "View on Etherscan",
        icon: "country",
        url: "https://livethelife.tv/",
    },
    {
        title: "View metadata",
        icon: "link",
        url: "https://livethelife.tv/",
    },
    {
        title: "View on IPFS",
        icon: "link",
        url: "https://livethelife.tvt/",
    },
];

const provenance = [
    {
        avatar: "/images/avatar.jpg",
        history: true,
        content: (
            <>
                Minted by <span>@livethelifetv</span>
            </>
        ),
        date: "Aug 18, 2023 at 18:80",
        url: "https://livethelife.tv/",
    },
];

const MakeOfferPage = () => {
    const [bid, setBid] = useState<string>("");
    return (
        <Layout layoutNoOverflow footerHide>
            <Description
                image="/images/main-pic-1.jpg"
                captionHide
                title="LiveTheLifeTV"
                date="Minted on Aug 18, 2023"
                statistics={statistics}
                links={links}
                addTags
                provenance={provenance}
                content="Turn creators into curators & collectors into co-owners. It's the Renaissance but onchain! Life is not fungible. We’re all an ERC-721."
            >
                <>
                    <Details
                        title="Make an offer"
                        content="Turn creators into curators & collectors into co-owners. It's the Renaissance but onchain! Life is not fungible. We’re all an ERC-721."
                        linkUrl="/article"
                        linkTitle="How to make an offer"
                    />
                    <Price
                        title="Total offer"
                        value={bid}
                        setValue={setBid}
                        buttonText="make offer"
                        content={
                            <>
                                <p>
                                    Placing this bid will start a 24 hour
                                    auction for the NFT.
                                </p>
                                <p>
                                    Once a bid is placed, it cannot be
                                    withdrawn.
                                </p>
                            </>
                        }
                    />
                </>
            </Description>
        </Layout>
    );
};

export default MakeOfferPage;
