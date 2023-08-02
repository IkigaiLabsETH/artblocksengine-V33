import Layout from "@/components/Layout";
import Main from "./Main";
import Collections from "./Collections";
import Auctions from "@/components/Auctions";
import Newsletter from "@/components/Newsletter";

import { auctions } from "@/mocks/auctions";

const HomePage = () => {
    return (
        <Layout layoutNoOverflow noRegistration>
            <Main />
            <Collections />
            <Auctions items={auctions} />
            <Newsletter />
        </Layout>
    );
};

export default HomePage;
