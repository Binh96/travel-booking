import ButtonComponent from '../button/ButtonComponent';
import './NavigationComponent.css';

export const NavigationComponent = () => {
  return (
    <nav className="navigation">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/destinations">Destinations</a></li>
        <li><a href="/hotels">Hotels</a></li>
        <li><a href="/flights">Flights</a></li>
        <li><a href="/bookings">Bookings</a></li>
        <li><a href="/login">Login</a></li>
        <li>
          <a href="/register">
            <ButtonComponent 
              label="Sign Up" 
              padding='9px 21px'
              borderRadius='5px'
              border='1px solid #000'
              onClick={() => {}}
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}