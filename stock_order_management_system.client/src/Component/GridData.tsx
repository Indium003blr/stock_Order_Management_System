import {  useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Stock {
    id:number,
    company_Name: string;
    stock_Price: number;
    number_Of_Stock: number;
    buy_Sell_Status:number;
}

function GridData() {
    const [forecasts, setForecasts] = useState<Stock[]>([]);

    console.log("forecaset",forecasts);

    useEffect(() => {
    
        const requestOptions = {
          method: "GET",
          redirect: "follow"
        };
        
        fetch("https://localhost:7109/api/OrderPlacement", requestOptions)
          .then((response) => response.text())
          .then((result: any) => 
            setForecasts(JSON.parse(result))
          )
          .catch((error) => console.error(error));
      }, []);

    const contents = forecasts === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <table className="table table-striped" aria-labelledby="tableLabel">
            <thead>
                <tr>
                    <th>Company Name</th>
                    <th>Stock Price</th>
                    <th>Avl Stock</th>
                    <th>Buy/Sell</th>
                </tr>
            </thead>
            <tbody>
                {forecasts?.map(forecast =>
                    <tr key={forecast.company_Name}>
                        <td>{forecast.company_Name}</td>
                        <td>{forecast.stock_Price}</td>
                        <td>{forecast.number_Of_Stock}</td>
                        <td>
                          <Link to={`/stock/${forecast.id}`}>Buy</Link>&nbsp;
                          <Link to={`/stock/${forecast.id}`}>Sell</Link>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>;

    return (
        <div>
            {contents}
        </div>
    );
}

export default GridData;