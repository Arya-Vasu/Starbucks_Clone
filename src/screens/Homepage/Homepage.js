import "./homepage.css";
import { SecondHeader } from "../../components/secondHeader/SecondHeader";
import { debuggerLog } from "../../utils/Logging.utils";
import { useRef } from "react";

export function Homepage() {
  const containerRef = useRef(null);

  // Function to handle the horizontal scroll
  const handleScroll = (scrollOffset) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <div className="homepage">
      <SecondHeader />
      <div className="h2HeadingContainer">
        <h2 className="h2Heading">Handcrafted Curations</h2>
      </div>
      <div className="circularCardContainer">
        {handcraftedCurations.data.map((item, index) => {
          return <CircularCard data={item} key={index} />;
        })}
      </div>
      <div className="recommendedTopContainer">
        <div className="h2HeadingContainer h2ExtraCSS">
          <h2 className="h2Heading">Barista Recommends</h2>
          <h6>View Menu</h6>
        </div>
        <div className="scrollRootContainer">
          <button onClick={() => handleScroll(-50)}>Scroll Left</button>
          <div ref={containerRef} className="scrollContainer">
            {Barista_Recommended_Data.data.map((item, index) => {
              return <RectangleCard data={item} key={index} />;
            })}
          </div>
          <button onClick={() => handleScroll(50)}>Scroll Right</button>
        </div>
      </div>
    </div>
  );
}

//TODO- need to separate this component
const CircularCard = ({ data }) => {
  // debuggerLog("CircularCard==>", data);
  return (
    <div
      style={{
        margin: 50,
      }}
    >
      <img
        src={data?.imgURL}
        style={{
          height: 108,
          width: 108,
          borderRadius: 100,
        }}
      />
      <h5>{data?.title}</h5>
    </div>
  );
};

const RectangleCard = ({ data }) => {
  return (
    <div
      style={{
        width: 290,
        height: 160,
        backgroundColor: "red",
        padding: 10,
        // paddingRight: 10,
        margin: 10,
        borderRadius: 15,
      }}
    >
      <div
        style={{
          backgroundColor: "orange",
          width: 270,
          height: 160,
          // width: "100%",
          // height: "100%",
        }}
      >
        {data?.title}
      </div>
    </div>
  );
};

//TODO- need to separate this JSON
const handcraftedCurations = {
  data: [
    {
      id: 1,
      title: "Bestseller",
      imgURL:
        "https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/Bestseller.jpg",
    },
    {
      id: 2,
      title: "Drinks",
      imgURL:
        "https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/Drinks.jpg",
    },
    {
      id: 3,
      title: "Food",
      imgURL:
        "https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/Food.jpg",
    },
    {
      id: 4,
      title: "Merchandise",
      imgURL:
        "https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/Merchandise.jpg",
    },
    {
      id: 5,
      title: "Coffee At Home",
      imgURL:
        "https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/CoffeeAtHome.jpg",
    },
    {
      id: 6,
      title: "Ready to Eat",
      imgURL:
        "https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/ReadyToEat.jpg",
    },
  ],
};

const Barista_Recommended_Data = {
  data: [
    {
      title: "one",
    },
    {
      title: "two",
    },
    {
      title: "three",
    },
    {
      title: "four",
    },
    {
      title: "five",
    },
    {
      title: "six",
    },
    {
      title: "seven",
    },
    {
      title: "eight",
    },
  ],
};
