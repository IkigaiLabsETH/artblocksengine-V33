import Layout from "@/components/Layout";
import Description from "@/components/Description";
import Details from "./Details";

const statistics = [
    {
        label: "Created by",
        avatar: "/images/avatar.jpg",
        history: true,
        title: "GM",
        login: "gm",
    },
    {
        label: "Collection",
        image: "/images/robot.jpg",
        title: "Hasselblad",
        category: "cm500",
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
        url: "https://livethelife.tv/",
    },
];

const provenance = [
    {
        avatar: "/images/avatar.jpg",
        history: true,
        content: (
            <>
                Bid placed by <span>livethelifetv.eth</span>
            </>
        ),
        price: "4.20 ETH",
        date: "Aug 18, 2023 at 18:80",
        url: "https://livethelife.tv/",
    },
    {
        avatar: "/images/avatar.jpg",
        history: true,
        content: (
            <>
                Listed by <span>@randomdash</span>
            </>
        ),
        price: "4.20 ETH",
        date: "Aug 18, 2023 at 18:80",
        url: "https://livethelife.tv/",
    },
    {
        avatar: "/images/avatar.jpg",
        history: true,
        content: (
            <>
                Minted by <span>@randomdash</span>
            </>
        ),
        price: "4.20 ETH",
        date: "Aug 18, 2023 at 18:80",
        url: "https://livethelife.tv/",
    },
];

const tags = [
    "Velvia",
    "Blackmagic",
    "Hasselblad",
    "Soft Light",
    "Photogrammetry",
    "Animation",
    "Blender",
    "3D Mixed Media",
    "Photography",
    "Cinema 4D",
];

const MintNFTPage = () => {
    return (
        <Layout layoutNoOverflow footerHide>
            <Description
                image="/images/cute-planet-large.jpg"
                title="The Explorer"
                date="Minted on Aug 18, 2023"
                statistics={statistics}
                links={links}
                tags={tags}
                provenanceAction={{
                    avatar: "/images/avatar.jpg",
                    history: true,
                    content: (
                        <>
                            Auction won by <span>livethelifetv.eth</span>
                        </>
                    ),
                    title: (
                        <>
                            Sold for <span>4.20 ETH</span> $9,420.69
                        </>
                    ),
                    date: "Aug 18, 2023 at 18:80",

                    linkTitle: (
                        <>
                            Auction settled by <span>@Aloha</span>
                        </>
                    ),
                    linkUrl: "https://livethelife.tv/",
                }}
                provenance={provenance}
                content="CREATE / CURATE / COLLECT. Turn creators into curators & collectors into co-owners. It's the Renaissance but onchain! Life is not fungible. We’re all an ERC-721."
            >
                <Details />
            </Description>
        </Layout>
    );
};

export default MintNFTPage;
