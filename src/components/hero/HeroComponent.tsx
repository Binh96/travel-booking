import ButtonComponent from '../button/ButtonComponent';
import './HeroComponent.css';

const HeroComponent = () => {
  return (
    <div className="hero-container">
      <div className="hero-content-left">
        <h1 className='hero-slogan'>BEST DESTINATIONS AROUND THE WORLD</h1>
        <div className="hero-heading-container">
          <span>Travel, <span>enjoy</span></span>
          <br />
          <span>and live a new </span>
          <br />
          <span>and full life</span>
        </div>
        <div className="hero-body-container">
          <p>Buit Wicket longer admire do barton vanity itself do in it.</p>
          <p>Preferred to sportsmen it engrossed listening. Park gate</p>
          <p>sell they west hard for the.</p>
        </div>
        <div className="hero-btn">
          <ButtonComponent 
            label='Find out more'
            backgroundColor='#F1A501'
            fontFamily='Google Sans'
            fontSize='18px'
            fontWeight='700'
            padding='19px 26px 18px'
            borderRadius='10px'
            color='white'
            border='none'
            onClick={() => {}}
          />
          <div className="play-btn-container">
            <span className='play-icon'></span>
            <ButtonComponent 
              label='Play Demo'
              fontFamily='Poppins'
              fontSize='17px'
              fontWeight='500'
              color='#686D77'
              border='none'
              backgroundColor='#ffffff'
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
      <div className="hero-content-right">
        <img src={process.env.PUBLIC_URL + "/image/Traveller 1.png"} alt="" />
      </div>
    </div>
  );
}

export default HeroComponent;
