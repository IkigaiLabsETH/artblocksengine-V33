import Layout from "@/components/Layout";
import Main from "./Main";
import Collections from "./Collections";
import Auctions from "@/components/Auctions";
import Spotlight from "./Spotlight";
import Newsletter from "@/components/Newsletter";

import { auctions } from "@/mocks/auctions";

const HomePage = () => {
    return (
        <Layout layoutNoOverflow noRegistration>
            <Main />
            <Collections />
            <Auctions items={auctions} />
            <Spotlight />
            <Newsletter />
        </Layout>
    );
};

export default HomePage;
