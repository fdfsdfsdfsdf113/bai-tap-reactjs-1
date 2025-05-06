import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [input, setInput] = useState('');
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  
  
  useEffect(() => {
    let timer: number;
    if (isCounting && count > 0) {
      timer = setTimeout(() => {
        setCount(prev => prev - 1);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [isCounting, count]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleStart = () => {
    const seconds = parseInt(input);
    if (!isNaN(seconds) && seconds > 0) {
      setCount(seconds);
      setIsCounting(true);
    }
  };

  const handleReset = () => {
    setInput('');
    setCount(0);
    setIsCounting(false);
  };

  return (
    <div>
      <h2>Đếm ngược</h2>
      <input
        type="number"
        value={input}
        onChange={handleInputChange}
        disabled={isCounting}
        placeholder="Nhập số giây"
      />
      <button onClick={handleStart} disabled={isCounting || !input}>Bắt đầu</button>
      <button onClick={handleReset}>Reset</button>

      <div style={{ marginTop: '20px' }}>
        {isCounting && count > 0 && <p>{count} giây</p>}
        {isCounting && count === 0 && <p>Hết giờ!</p>}
      </div>
    </div>
  );
};

export default CountdownTimer;
