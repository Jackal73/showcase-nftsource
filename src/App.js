import assets from "./assets";
import { Download, Features, SectionWrapper } from "./components";
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own store of cool NFTs. Start Selling and Growing!"
        description="Buy, store, and collect NFTs. Exchange and earn crypto. Join 2+ million people using NFTSource Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface, Incredible User Experience"
        description="Indulge in the buttery UI of NFTsource - NFT Marketplace. The smooth, constant colors of a fluent UI design."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="NFTsource is built using Expo, which runs natively on all user devices. This allows you to easily deliver your app into people's hands."
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase your store"
        description="This app contains two screens. The first screen lists all your NFTs, while the second shows the details of a specific."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made with UI/UX in mind by {" "}
        <a href="https://shawnkebel-portfolio.netlify.app/"><span className="bold hover:text-tertiary">ShawnKebel@kblDesigners</span></a>
        </p>
      </div>
    </>
  );
};

export default App;
