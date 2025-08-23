import CardComponent from "../card/CardComponent";
import "./CategoryComponent.css";

export default function CategoryComponent() {
  const categories = [
    {
      id: 1,
      title: "Calculated Weather",
      description: "Built Wicket longer admire do barton vanity itself do in it",
      path: "/image/Group_48.png",
      style: { 
        width: "92px",
        height: "78px",
      },
    },
    {
      id: 2,
      title: "Best Flights",
      description: "Engrossed listening. Park gate sell they west hard for the.",
      path: "/image/Group_51.png",
      style: {
        width: "166.87px",
        height: "153.33px",
      }
    },
    {
      id: 3,
      title: "Local Events",
      description: "Barton vanity itself do in it. Preferd to men it engrossed listening.",
      path: "/image/Group_50.png",
      style: {
        width: "67px",
        height: "75px",
      }
    },
    {
      id: 4,
      title: "Customization",
      description: "We deliver outsourced aviation services for military customers",
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
        { categories.map((category, index) => (
            <CardComponent 
              margin="17px" 
              padding="0 42px 45px" 
              borderRadius="36px" 
              textAlign="center" 
              id={category.id}
            >
              {category.id !== 2 ? (<div style={{ height: "40px" }}></div>) : ("")}
              <img 
                src={category.path} 
                alt="" 
                style={category.style} 
              />
              <h2 style={{ marginTop: category.id !== 2 ? "37px" : "0" }}>{category.title}</h2>
              <p className="category-item-description">{category.description}</p>
            </CardComponent>
        ))}
      </div>
    </div>
  );
}