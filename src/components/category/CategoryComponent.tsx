import CardComponent from "../card/CardComponent";

export default function CategoryComponent() {
  return (
    <div>
      <div className="category-header-container">
        <h1>CATEGORY</h1>
        <p>We Offer Best Services</p>
      </div>
      <div className="category-container">
        <CardComponent>
          <h2>Category Title</h2>
          <p>Category Description</p>
        </CardComponent>
      </div>
    </div>
  );
}