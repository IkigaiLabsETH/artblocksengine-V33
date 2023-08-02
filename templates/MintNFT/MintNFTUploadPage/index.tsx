import { useState } from "react";
import Layout from "@/components/Layout";
import LayoutCreate from "@/components/LayoutCreate";
import Form from "./Form";
import Upload from "./Upload";

const MintNFTPage = () => {
    const [title, setTitle] = useState<string>("Cedric Delsaux");
    const [description, setDescription] = useState<string>(
        "CREATE / CURATE / COLLECT. Turn creators into curators & collectors into co-owners. It's the Renaissance but onchain! Life is not fungible. We’re all an ERC-721"
    );

    return (
        <Layout layoutNoOverflow footerHide emptyHeader>
            <LayoutCreate
                left={
                    <Form
                        title={title}
                        setTitle={setTitle}
                        description={description}
                        setDescription={setDescription}
                    />
                }
            >
                <Upload title={title} />
            </LayoutCreate>
        </Layout>
    );
};

export default MintNFTPage;
