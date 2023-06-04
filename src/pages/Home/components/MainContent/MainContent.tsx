import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import './main.scss';

export function MainContent() {
  return (
    <div className="main">
      <div style={{ width: '600px', height: '100px' }}>
        <Carousel
          infiniteLoop
          autoPlay
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          interval={1500}
        >
          <div>
            <img src="image4.jpg" width={100} height={300} />
          </div>
          <div>
            <img src="image2.jpg" width={100} height={300} />
          </div>
          <div>
            <img src="image3.jpg" width={100} height={300} />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
