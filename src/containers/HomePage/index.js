import { H1 } from '../../styles/typography';
import {
  LottieHoverControl,
  LottieClickControl
} from '../../components/lottie';
import Particles from '../../components/particles';

import Loader from '../../lotties/hamburger-menu.json';

const HomePage = (props) => {
  return (
    <div>
      <H1 textAlign="center">Home page</H1>
      {/* <div style={{ border: '1px solid grey' }}>
        <LottieHoverControl
          loop={false}
          autoplay={false}
          animationData={Loader}
        />
      </div>
      <div style={{ border: '1px solid grey' }}>
        <LottieClickControl
          loop={false}
          autoplay={false}
          animationData={Loader}
        />
      </div> */}
      <div style={{ width: '800px', height: '500px' }}>
        <Particles />
      </div>
    </div>
  );
};

export default HomePage;
