import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export function MainContent() {

  const items = [
    <img src="miniplaceholder.svg" className="w-48" alt="" />,
    <img src="miniplaceholder.svg" className="w-48" alt="" />,
    <img src="miniplaceholder.svg" className="w-48" alt="" />,
    <img src="miniplaceholder.svg" className="w-48" alt="" />,
  ];
  return (
    <>
      <div>
        <AliceCarousel
          autoPlay
          autoPlayInterval={2000}
          disableButtonsControls
          infinite
          mouseTracking
          items={items}
        />
      </div>
    </>
  );
}
