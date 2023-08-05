import { ThirdwebAuth } from "@thirdweb-dev/auth/next";
import { PrivateKeyWallet } from "@thirdweb-dev/auth/evm";
import { domainName } from "./constants/yourDetails";

const privateKey = process.env.THIRDWEB_AUTH_PRIVATE_KEY;

if (!privateKey || privateKey === "") {
    throw new Error("Private key is not set or invalid.");
}

const wallet = new PrivateKeyWallet(privateKey);

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuth({
  domain: domainName,
  wallet: wallet
});
