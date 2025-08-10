import ButtonComponent from '../button/ButtonComponent';
import './NavigationComponent.css';

export const NavigationComponent = () => {
  return (
    <nav className="navigation">
      <ul>
        <li className='navigation-item'><a className="navigation-item-link" href="/">Home</a></li>
        <li className='navigation-item'><a className="navigation-item-link" href="/destinations">Destinations</a></li>
        <li className='navigation-item'><a className="navigation-item-link" href="/hotels">Hotels</a></li>
        <li className='navigation-item'><a className="navigation-item-link" href="/flights">Flights</a></li>
        <li className='navigation-item'><a className="navigation-item-link" href="/bookings">Bookings</a></li>
        <li className='navigation-item'><a className="navigation-item-link" href="/login">Login</a></li>
        <li className='navigation-item'>
          <a href="/register">
            <ButtonComponent 
              label="Sign Up" 
              padding='9px 21px'
              borderRadius='5px'
              border='1px solid #000'
              fontSize='12px'
              onClick={() => {}}
            />
          </a>
        </li>
        <li className='navigation-item'>
          <span>EN</span>
        </li>
      </ul>
    </nav>
  );
}