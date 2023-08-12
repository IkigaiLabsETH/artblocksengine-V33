import React from "react";

const Footer: React.FC = ({ children }) => {
  return (
    <div className="footer">
      <div className="left">
        <a href={"/termsOfUse"}>Terms of Use</a>
        <a href={"/privacyPolicy"}>Privacy Policy</a>
      </div>
      <div className="center">
        <a
          href="https://www.instagram.com/livethelife.tv/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/icons/instagram.png" />
        </a>
        <a
          href="https://twitter.com/livethelifetv"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/icons/twitter.png" />
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/icons/github.png" />
        </a>
        <a
          href="https://discord.gg/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/icons/discord.png" />
        </a>
      </div>
      <div className="right">
        <a href="https://www.artblocks.io/" target="_blank" rel="noreferrer">
          Powered By ArtBlocks
        </a>
      </div>
    </div>
  );
};

export default Footer;
