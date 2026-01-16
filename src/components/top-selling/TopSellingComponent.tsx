import CardComponent from "../card/CardComponent";
import "./TopSellingComponent.css";

export default function TopSellingComponent() {
  const categories = [
    {
      id: 1,
      path: "/image/rome.png",
      desc: {
        place: "Rome, Italy",
        price: "$5,42k",
        date: "10 Days Trip"
      }
    },
    {
      id: 2,
      path: "/image/london.png",
      desc: {
        place: "London, UK",
        price: "$4,2k",
        date: "12 Days Trip"
      }
    },
    {
      id: 3,
      path: "/image/istanbul.png",
      desc: {
        place: "Full Europe",
        price: "$15k",
        date: "28 Days Trip"
      }
    }
  ];

  return (
    <div>
      <div className="top-selling-header-container">
        <h1>Top Selling</h1>
        <p>Top Destinations</p>
      </div>
      <div className="top-selling-container">
        { categories.map((category, index) => (
            <CardComponent 
              id={category.id}
              className="destination-item col-3"
              boxShadow="0px 22px 17px rgba(0, 0, 0, 0.06)"
            >
              <img 
                src={category.path} 
                alt=""
                className="destination-image"
              />
              <div className="destination-desc">
                <div className="place-price">
                  <p className="destination-place">{category.desc.place}</p>
                  <p className="destination-price">{category.desc.price}</p>
                </div>
                <p className="destination-date">
                  <img src="/image/navigation 1.png" alt="" />
                  {category.desc.date}
                </p>
              </div>
            </CardComponent>
        ))}
      </div>
      <div style={{height: '300px'}}></div>
    </div>
  );
}