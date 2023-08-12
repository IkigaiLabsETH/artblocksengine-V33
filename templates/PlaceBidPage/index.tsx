import { useState } from "react";
import Layout from "@/components/Layout";
import Description from "@/components/Description";
import Price from "@/components/Price";
import Details from "@/components/Details";

const statistics = [
    {
        label: "Created by", // {project.artistName}
        avatar: "/images/avatar.jpg", // 
        history: true,
        title: "Ikigai", // {project.name}
        login: "livethelifetv",
    },
    {
        label: "Collection",
        image: "/images/balls.jpg",
        title: "Ikigai",
        category: "cute",
    },
];

const links = [
    {
        title: "View on Etherscan",
        icon: "country",
        url: "https://etherscan.io/", // https://etherscan.io/token/${contractAddress?.toLowerCase()}?a=${token.tokenId}
    },
    {
        title: "View metadata",
        icon: "link",
        url: "https://livethelife.tv/", // https://opensea.io/assets/ethereum/${contractAddress?.toLowerCase()}/${token.tokenId}
    },
    {
        title: "View on IPFS",
        icon: "link",
        url: "https://livethelife.tv/",
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

const PlaceBidPage = () => {
    const [bid, setBid] = useState<string>("");
    return (
        <Layout layoutNoOverflow footerHide>
            <Description
                image="/images/main-pic-1.jpg"
                captionHide
                title="Ikigai" // {token.project.artistName}
                date="Minted on Aug 18, 2023" // Minted {moment.unix(token.createdAt).format("LL")}
                statistics={statistics}
                links={links}  // {project.website}
                addTags
                provenance={provenance}
                content="CREATE / CURATE / COLLECT. Turn creators into curators & collectors into co-owners. It's the Renaissance but onchain! Life is not fungible. We’re all an ERC-721." // {project.description}
            >
                <>
                    <Details
                        title="Place a bid"
                        bid="1.1 ETH"
                        price="$1,815.70"
                        time={20}                      // {startDate.isBefore() ? "Launched" : ""} {startDate.format("LL")}
                        linkUrl="/article"             
                        linkTitle="Learn how to place a bid"
                    />
                    <Price
                        title={
                            <>
                                You must bid at least <strong>1.1 ETH</strong>
                            </>
                        }
                        value={bid}
                        setValue={setBid}
                        placeholder="1.10"
                        buttonText="place bid"
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

export default PlaceBidPage;
