import Layout from "@/components/Layout";
import Description from "@/components/Description";
import Details from "./Details";

const statistics = [
    {
        label: "Created by",
        avatar: "/images/avatar.jpg",
        history: true,
        title: "Ikigai",
        login: "livethelifetv",
    },
    {
        label: "Collection",
        image: "/images/balls.jpg",
        title: "Cute Planet",
        category: "cute",
    },
];

const MintNFTPage = () => {
    return (
        <Layout layoutNoOverflow headerHide footerHide>
            <Description
                exit
                image="/images/main-pic-1.jpg"
                title="LiveTheLifeTV"
                date="Minted on Aug 18, 2023"
                statistics={statistics}
                content={
                    <>
                        <p>
                            CREATE / CURATE / COLLECT. 
                            Turn creators into curators & collectors into co-owners. 
                            It's the Renaissance but onchain! 
                            Life is not fungible. 
                            We’re all an ERC-721
                        </p>
                        <p>Website: livethelife.tv</p>
                    </>
                }
            >
                <Details />
            </Description>
        </Layout>
    );
};

export default MintNFTPage;
