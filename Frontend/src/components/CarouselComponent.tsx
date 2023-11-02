import { Carousel } from "react-bootstrap";

interface CarouselProps {
  activeIndex: number;
  handleSelect: (selectedIndex: number) => void;
  list: string[];
  carouselWidth: string;
  maxHeight?: string;
  marginTop?: string;
}

export const CarouselComponent = (props: CarouselProps) => {
  const {
    activeIndex,
    handleSelect,
    list,
    carouselWidth,
    marginTop,
    maxHeight,
  } = props;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Carousel
        activeIndex={activeIndex}
        onSelect={handleSelect}
        data-bs-theme="dark"
        slide={false}
        indicators={false}
        style={{ display: "flex", justifyContent: "center", width: "50%" }}
      >
        {list.map((item: any, index: number) => (
          <Carousel.Item style={{ height: "10rem", width: "100%" }} key={index}>
            <div
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                style={{
                  marginTop: marginTop ? marginTop : "0",
                  maxHeight: maxHeight ? maxHeight : "100%",
                  maxWidth: carouselWidth,
                }}
                src={item}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
