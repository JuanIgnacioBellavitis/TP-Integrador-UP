import { Carousel } from 'react-bootstrap';

interface CarouselProps {
  activeIndex: number;
  handleSelect: (selectedIndex: number) => void,
  list: string[],
}

export const CarouselComponent = (props: CarouselProps) => {

  const {activeIndex, handleSelect, list} = props;

  return (
    <div style={{ border: "2px solid black" }}>
      <Carousel activeIndex={activeIndex} onSelect={handleSelect} data-bs-theme="dark" slide={false} indicators={false}>
        {
          list.map((item: any, index: number) => (
            <Carousel.Item style={{ height: "5rem", width: "5rem" }} key={index}>
              <img style={{ height: "75%", width: "auto" }} src={item} />
            </Carousel.Item>
          ))
        }
      </Carousel>
    </div>
  )
}
