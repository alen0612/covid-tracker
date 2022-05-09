import React from "react";
import CountUp from "react-countup";
import "./Card.css";

function Card(props) {
  return (
    <div className="Card">
      <div className="Infected">
        <div className="Card-title">Infected</div>
        <div className="Card-value">
          <CountUp start={0} end={props.infected} duration={2} />
        </div>

        <div className="Card-description">
          Number of active cases from COVID-19
        </div>
        <div className="Color-bar"></div>
      </div>
      <div className="Recovered">
        <div className="Card-title">Recovered</div>
        <div className="Card-value">
          <CountUp start={0} end={props.recovered} duration={2} />
        </div>
        <div className="Card-description">
          Number of recoveries from COVID-19
        </div>
        <div className="Color-bar"></div>
      </div>
      <div className="Deaths">
        <div className="Card-title">Deaths</div>
        <div className="Card-value">
          <CountUp start={0} end={props.deaths} duration={2} />
        </div>
        <div className="Card-description">Number of deaths from COVID-19</div>
        <div className="Color-bar"></div>
      </div>
    </div>
  );
}

export default Card;
