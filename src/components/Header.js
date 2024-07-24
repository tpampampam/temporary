import { useState } from 'react';

const Header = () => {
  const [count, setCount] = useState(0);

  const changeCount = num => {
    setCount(count => count + num);
  };
  return (
    <div>
      <button onClick={() => changeCount(-1)}>decrement</button>
      <button onClick={() => changeCount(1)}>increment</button>
      <div>Header</div>
    </div>
  );
};
