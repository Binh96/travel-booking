import { NavigationComponent } from "../navigation/NavigationComponent";
import './HeaderComponent.css'; 

const HeaderComponent: React.FC = () => {
  return (
    <header className="header-container">
      <h1>Travel Booking</h1>
      <NavigationComponent />
    </header>
  );
}

export default HeaderComponent;