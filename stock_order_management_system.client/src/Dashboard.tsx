import './assets/Dashboard.css';
import Header from './Components/Header';

function Dashboard()
{

return (
    <>
 
 <div>
 <Header />
  <div className="charts">
    <div id="Platinum" className="charts" />
    <div id="Palladium" className="charts" />
    <div id="Rhodium" className="charts" />
  </div>
  <div className="clocks">
    <h3 style={{color: 'white', fontFamily: '"Roboto", sans-serif', textAlign: 'center'}}>US</h3>
    <div className="clock-container">
      <div className="clock-col">
        <p className="clock-hours clock-timer">
        </p>
        <p className="clock-label">
          Hours
        </p>
      </div>
      <div className="clock-col">
        <p className="clock-minutes clock-timer">
        </p>
        <p className="clock-label">
          Minutes
        </p>
      </div>
      <div className="clock-col">
        <p className="clock-seconds clock-timer">
        </p>
        <p className="clock-label">
          Seconds
        </p>
      </div>
    </div>
    <h3 style={{color: 'white', fontFamily: '"Roboto", sans-serif', textAlign: 'center'}}>UK</h3>
    <div className="clock-container">
      <div className="clock-col">
        <p className="Ukclock-hours clock-timer">
        </p>
        <p className="clock-label">
          Hours
        </p>
      </div>
      <div className="clock-col">
        <p className="clock-minutes clock-timer">
        </p>
        <p className="clock-label">
          Minutes
        </p>
      </div>
      <div className="clock-col">
        <p className="clock-seconds clock-timer">
        </p>
        <p className="clock-label">
          Seconds
        </p>
      </div>
    </div>
  </div>
</div>

  </>
);
}
export default Dashboard;