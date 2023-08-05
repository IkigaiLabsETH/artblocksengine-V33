import type { NextPage } from "next";
import HomePage from "@/templates/HomePage";

import React, { useEffect } from "react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { useLogout, useUser } from "@thirdweb-dev/react";
import { getUser } from "auth.config_FIX";
import checkBalance from "../util/checkBalance";
import { useRouter } from "next/router";

import { GetServerSidePropsContext } from 'next';

const Home: NextPage = () => {
    
  const { logout } = useLogout();
  const { isLoggedIn, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      router.push("/login");
    }
  }, [isLoading, isLoggedIn, router]);

  return (
    <HomePage />
  );
}

// This gets called on every request
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const user = await getUser(context.req);

  if (!user) {
    // handle the case when there's no user
  }

  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  // Ensure we are able to generate an auth token using our private key instantiated SDK
  const PRIVATE_KEY = process.env.THIRDWEB_AUTH_PRIVATE_KEY;
  if (!PRIVATE_KEY) {
    throw new Error("You need to add an PRIVATE_KEY environment variable.");
  }

  // Instantiate our SDK
  if (!process.env.THIRDWEB_AUTH_PRIVATE_KEY) {
    throw new Error('THIRDWEB_AUTH_PRIVATE_KEY is not set in environment variables.');
}
const sdk = ThirdwebSDK.fromPrivateKey(process.env.THIRDWEB_AUTH_PRIVATE_KEY, "arbitrum");
    "arbitrum"


  // Check to see if the user has an NFT
  const hasNft = await checkBalance(sdk, user.address);

  // If they don't have an NFT, redirect them to the login page
  if (!hasNft) {
    console.log("User", user.address, "doesn't have an NFT! Redirecting...");
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  // Finally, return the props
  return {
    props: {},
  };
}

export default Home;
