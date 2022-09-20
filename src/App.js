import './App.css';
import Plus from './Assets/Plus';
import Substract from './Assets/Substract';

function App() {
  return (
    <div className="App">
      <h1>CashTracker</h1>
      <div className="total_cash">
        <div className="in_bank">
          <p className='tot_cash_title'>In Bank</p>
          <p className="ruppes">1000</p>
          <div className="add_sub_btns">
            <p className="add"><Plus /> </p>
            <p className="sub"><Substract /></p>
          </div>
        </div>
        <div className="in_hand">
          <p className='tot_cash_title'>In Hand</p>
          <p className="ruppes">1000</p>
          <div className="add_sub_btns">
            <p className="add"><Plus /></p>
            <p className="sub"><Substract /></p>
          </div>
        </div>
      </div>

      <div className="cash_uses">
        <div className="use">
          <div className="date_and_month">
            <div className="dateandmonth">
              <p className="date">12</p>
              <p className="month">sep</p>
            </div>
          </div>
          <div className="use_reason">
            <div className="cash_type">Bank</div>
            <input type="text" placeholder='Enter the details' />
          </div>
          <div className="use_ruppes">
            <p className="used_cash">200</p>
          </div>
        </div>
      </div>

      <div className="cash_uses">
        <div className="use">
          <div className="date_and_month">
            <div className="dateandmonth">
              <p className="date">12</p>
              <p className="month">sep</p>
            </div>
          </div>
          <div className="use_reason">
            <div className="cash_type">Bank</div>
            <input type="text" placeholder='Enter the details' />
          </div>
          <div className="use_ruppes">
            <p className="used_cash">200</p>
          </div>
        </div>
      </div>

      <div className="cash_uses">
        <div className="use">
          <div className="date_and_month">
            <div className="dateandmonth">
              <p className="date">12</p>
              <p className="month">sep</p>
            </div>
          </div>
          <div className="use_reason">
            <div className="cash_type">Bank</div>
            <input type="text" placeholder='Enter the details' />
          </div>
          <div className="use_ruppes">
            <p className="used_cash">200</p>
          </div>
        </div>
      </div>

      <div className="cash_uses">
        <div className="use">
          <div className="date_and_month">
            <div className="dateandmonth">
              <p className="date">12</p>
              <p className="month">sep</p>
            </div>
          </div>
          <div className="use_reason">
            <div className="cash_type">Bank</div>
            <input type="text" placeholder='Enter the details' />
          </div>
          <div className="use_ruppes">
            <p className="used_cash">200</p>
          </div>
        </div>
      </div>

      <div className="cash_uses">
        <div className="use">
          <div className="date_and_month">
            <div className="dateandmonth">
              <p className="date">12</p>
              <p className="month">sep</p>
            </div>
          </div>
          <div className="use_reason">
            <div className="cash_type">Bank</div>
            <input type="text" placeholder='Enter the details' />
          </div>
          <div className="use_ruppes">
            <p className="used_cash">200</p>
          </div>
        </div>
      </div>

      <div className="cash_uses">
        <div className="use">
          <div className="date_and_month">
            <div className="dateandmonth">
              <p className="date">12</p>
              <p className="month">sep</p>
            </div>
          </div>
          <div className="use_reason">
            <div className="cash_type">Bank</div>
            <input type="text" placeholder='Enter the details' />
          </div>
          <div className="use_ruppes">
            <p className="used_cash">200</p>
          </div>
        </div>
      </div>

      <div className="cash_uses">
        <div className="use">
          <div className="date_and_month">
            <div className="dateandmonth">
              <p className="date">12</p>
              <p className="month">sep</p>
            </div>
          </div>
          <div className="use_reason">
            <div className="cash_type">Bank</div>
            <input type="text" placeholder='Enter the details' />
          </div>
          <div className="use_ruppes">
            <p className="used_cash">200</p>
          </div>
        </div>
      </div>

      <div className="cash_uses">
        <div className="use">
          <div className="date_and_month">
            <div className="dateandmonth">
              <p className="date">12</p>
              <p className="month">sep</p>
            </div>
          </div>
          <div className="use_reason">
            <div className="cash_type">Bank</div>
            <input type="text" placeholder='Enter the details' />
          </div>
          <div className="use_ruppes">
            <p className="used_cash">200</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
