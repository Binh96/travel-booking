import CategoryComponent from '../components/category/CategoryComponent';
import HeaderComponent from '../components/header/HeaderComponent';
import HeroComponent from '../components/hero/HeroComponent';
import TopSellingComponent from '../components/top-selling/TopSellingComponent';
import BookingComponent from '../components/booking/BookingComponent';
import './MainPageComponent.css';

const MainPageComponent = () => {
  return (
    <div className="main-container">
      <div className="decore-wrapper">
        <img src={process.env.PUBLIC_URL + "/image/decore.png"} alt="" />
      </div>
      <div className="inner-wrapper">
        <HeaderComponent />
        <HeroComponent />
        <CategoryComponent />
        <TopSellingComponent />
        <BookingComponent />
        <div className="footer">
          <div className="footer-left">
            <h1>TRAVEL.</h1>
            <p>Book your trip in minute, get full</p>
            <p>Control your much longer</p>
          </div>
          <div className="footer-center">

            <h1>Company</h1>
          </div>
          <div className="footer-right"></div>
        </div>
      </div>
    </div>
  );
}

export default MainPageComponent;