import React, {useEffect, useState } from 'react';
import './StockOrder.css';
import './App.css';
import { useParams } from 'react-router-dom';


const StockOrder = () => {
  const {id} = useParams();
  const [orderType, setOrderType] = useState<'buy' | 'sell'>('buy');
  const [chooseStock, setChooseStock] = useState<'TATA' | 'Relaince' |'LG'>('TATA');
  const [quantity, setQuantity] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  const [data, setData] = useState<any>();

  const handleOrderTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOrderType(event.target.value as 'buy' | 'sell');
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(event.target.value));
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(event.target.value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    console.log(`Order placed: ${orderType} ${quantity} shares of ${stockSymbol} at \$${price} each.`);
  };

  useEffect(() => {

    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    
    fetch(`https://localhost:7109/api/OrderPlacement/${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);
        console.log("data",data);
        setData(data);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h2>Place Order for</h2>
      <form className ="stock-order-form" onSubmit={handleSubmit}>
        <div>
          <label  htmlFor="orderType">Order Type:</label>
          <select id="orderType" value={orderType} onChange={handleOrderTypeChange}>
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
          </select>
        </div>
        <div>
        <label htmlFor="dropdown">Stock Name:</label>
        <input
            type="text"
            id="stockname"
            value={data?.company_Name}
            readOnly
          />
        </div>
        <div>
          <label htmlFor="quantity">Available Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={data?.number_Of_Stock}
            readOnly
          />
        </div>
        <div>
          <label htmlFor="price">Price per Share:</label>
          <input
            type="number"
            id="price"
            readOnly
            value={data?.stock_Price}
          />
        </div>
        <div>
          <label htmlFor="price">Qty Buy/Sell:</label>
          <input
            type="number"
            id="price"
            min={0}
            max={data?.number_Of_Stock}
          />
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default StockOrder;
