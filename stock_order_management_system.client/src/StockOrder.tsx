import React, {useEffect, useState } from 'react';
import './StockOrder.css';
import './App.css';

interface StockOrderProps {
  stockSymbol: string;
}

const StockOrder: React.FC<StockOrderProps> = ({ stockSymbol }) => {
  const [orderType, setOrderType] = useState<'buy' | 'sell'>('buy');
  const [chooseStock, setChooseStock] = useState<'TATA' | 'Relaince' |'LG'>('TATA');
  const [quantity, setQuantity] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

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
    const apiUrl = '';

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        debugger;
        setOptions(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h2>Place Order for {stockSymbol}</h2>
      <form className ="stock-order-form" onSubmit={handleSubmit}>
        <div>
          <label  htmlFor="orderType">Order Type:</label>
          <select id="orderType" value={orderType} onChange={handleOrderTypeChange}>
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
          </select>
        </div>
        <div>
        <label htmlFor="dropdown">Choose an Stock:</label>
      <select id="dropdown" value={selectedOption} onChange={handleChange}>
      <option value="TATA">TATA</option>
      <option value="Relaince">Relaince</option>
      <option value="Relaince">LG</option>
        {/* <option value="" disabled>Select an option</option>
        {options.map((option) => (
          <option key={option} value={option.value}>
            {option.label}
          </option>
        ))}  */}
      </select>
        </div>
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price per Share:</label>
          <input
            type="number"
            id="price"
            readOnly
            value={price}
            onChange={handlePriceChange}
            step="0.01"
            min="0"
            required
          />
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default StockOrder;
