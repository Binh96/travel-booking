import CardComponent from "../card/CardComponent";
import "./BookingComponent.css";

export default function BookingComponent() {

  return (
    <div className="booking-container">
      <div className="booking-left">
        <p className="booking-subtitle">Easy and Fast</p>

        <h2 className="booking-title">
          Book Your Next Trip
          <br />
          In 3 Easy Steps
        </h2>

        <div className="steps">
          <ul className="steps-list">
            <li className="step-item">
              <img src="/image/Rectangle 21.png" alt="" />
              <div className="step-content">
                <h4 className="step-title">Choose Destination</h4>
                <p className="step-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
                </p>
              </div>
            </li>
            <li className="step-item">
              <img src="/image/Rectangle 22.png" alt="" />
              <div className="step-content">
                <h4 className="step-title">Make Payment</h4>
                <p className="step-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
                </p>
              </div>
            </li>
            <li className="step-item">
              <img src="/image/Rectangle 23.png" alt="" />
              <div className="step-content">
                <h4 className="step-title">Reach Airport on Selected Date</h4>
                <p className="step-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* RIGHT */}
      <div className="booking-right">
        <CardComponent id={1} className="rectangle-card">
          <img src="/image/Rectangle 17.png" alt="" />
          <div className="trip-content">
            <h4>Trip To Greece</h4>
            <p className="trip-meta">14–29 June | by Robbin jr</p>

            <div className="trip-icons">
              <img src="/image/LEAF.png" alt="" />
              <img src="/image/map icon.png" alt="" />
              <img src="/image/send.png" alt="" />
            </div>

            <div className="trip-footer">
              <span>
                <img src="/image/vector.png" alt="" />
                 24 people going</span>
              <span>♡</span>
            </div>
          </div>
        </CardComponent>

        {/* Floating card */}
        <div className="ongoing-card">
          <div className="ongoing-left">
            <img src="/image/image_32.png" alt="" />
          </div>
          <div className="ongoing-right">
            <p className="ongoing-label">Ongoing</p>
            <h5>Trip to rome</h5>
            <p className="progress-text"><span>40%</span> completed</p>
            <div className="progress-bar">
              <span style={{ width: "40%" }} />
            </div>
          </div>
        </div>
      </div>
      <div style={{height: '300px'}}></div>
    </div>
  );
}
