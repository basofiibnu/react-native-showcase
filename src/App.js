import { Fragment } from 'react';
import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/global';

const App = () => {
  return (
    <Fragment>
      <SectionWrapper
        title="Your own store of Nifty NFTs. Start Selling & Growing"
        description="Buy, store, collect NFTs, exchange & earn crypto. Join 25+ million people using ProNef Marketplace"
        showBtn
        mockupImage={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a buttery UI of ProNef NFT Marketplace. Smooth constant of a fluent UI design"
        mockupImage={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="ProNeft is built using Expo which runs natively on all user's devices. You can easily get your app into people's hands"
        mockupImage={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT."
        mockupImage={assets.mockup}
        banner="banner02"
      />
      <Download />
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with love by{' '}
          <span className="font-bold">basofiibnu</span>
        </p>
      </div>
    </Fragment>
  );
};

export default App;
