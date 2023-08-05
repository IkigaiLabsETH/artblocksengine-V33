import { ConnectWallet, useAddress, Web3Button } from "@thirdweb-dev/react";


export default function Login() {
  const address = useAddress(); // Get the user's address

  return (
    <div >
      <h1>NFT Gated ABengine V33</h1>
      <p>
        Exclusive gen art series. NFT-gated to allow collectors who own an NFT from IkigaiLabsXYZ,
        to get early beta access to our gen art platform.
      </p>

      <p>
        You cannot access the ArtBlocks Engine V33
        unless you own an NFT from our collection.
      </p>

      <hr />

      <>
        {address ? (
          <p>
            Welcome, {address?.slice(0, 6)}...{address?.slice(-4)}
          </p>
        ) : (
          <p>Please connect your wallet to continue.</p>
        )}

        <ConnectWallet />
      </>
    </div>
  );
}
