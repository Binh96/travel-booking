import CategoryComponent from '../components/category/CategoryComponent';
import HeaderComponent from '../components/header/HeaderComponent';
import HeroComponent from '../components/hero/HeroComponent';
import TopSellingComponent from '../components/top-selling/TopSellingComponent';
import './MainPageComponent.css';

const MainPageComponent = () => {
  return (
    <div className="main-container">
      <div className="decore-wrapper">
        <img src="/image/decore.png" alt="" />
      </div>
      <div className="inner-wrapper">
        <HeaderComponent />
        <HeroComponent />
        <CategoryComponent />
        <TopSellingComponent />
      </div>
    </div>
  );
}

export default MainPageComponent;