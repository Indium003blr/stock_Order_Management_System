import {  useState } from 'react';
import { Link } from 'react-router-dom';

interface Stock {
    companyName: string;
    StockPrice: number;
    AvlStock: number;
}

function GridData() {
    const [forecasts, setForecasts] = useState<Stock[]>([
      {companyName:"TATA",StockPrice:10,AvlStock:20},
      {companyName:"HCL",StockPrice:10,AvlStock:20},
      {companyName:"Tech M",StockPrice:10,AvlStock:20}
    ]);

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
                {forecasts.map(forecast =>
                    <tr key={forecast.companyName}>
                        <td>{forecast.companyName}</td>
                        <td>{forecast.StockPrice}</td>
                        <td>{forecast.AvlStock}</td>
                        <td>
                          <Link to='/stock'>Buy</Link>&nbsp;
                          <Link to='/stock'>Sell</Link>
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