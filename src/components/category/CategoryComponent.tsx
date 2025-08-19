import CardComponent from "../card/CardComponent";
import "./CategoryComponent.css";

export default function CategoryComponent() {
  const categories = [
    {
      title: "Calculated Weather",
      description: "Description for Category 1",
      path: "/image/Group_48.png",
      style: { 
        width: "92px",
        height: "78px",
      }
    },
    {
      title: "Best Flights",
      description: "Description for Category 2",
      path: "/image/Group_51.png",
      style: {
        width: "166.87px",
        height: "153.33px",
      }
    },
    {
      title: "Local Events",
      description: "Description for Category 3",
      path: "/image/Group_50.png",
      style: {
        width: "67px",
        height: "75px",
      }
    },
    {
      title: "Customization",
      description: "Description for Category 4",
      path: "/image/Group_49.png",
      style: {
        width: "77px",
        height: "66px",
      }
    }
  ];

  return (
    <div>
      <div className="category-header-container">
        <h1>CATEGORY</h1>
        <p>We Offer Best Services</p>
      </div>
      <div className="category-container">
        { categories.map((category) => (
            <CardComponent margin="17px" padding="0 42px 45px" borderRadius="36px">
              <img src={category.path} alt="" style={category.style} />
              <h2>{category.title}</h2>
              <p>{category.description}</p>
            </CardComponent>
        ))}
      </div>
    </div>
  );
}