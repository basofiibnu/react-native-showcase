import { Fragment } from 'react';
import { Download, Features, SectionWrapper } from './components';
import assets from './assets';

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
    </Fragment>
  );
};

export default App;
