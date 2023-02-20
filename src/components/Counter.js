import React from 'react';
import Button from './Button';
import Count from './Count';

function Counter({ id, increment, decrement, count }) {

  return (
    <>
      <div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <Count count={count}></Count>
        <div class="flex space-x-3">
          <Button handler={() => increment(id)}>Increment</Button>
          <Button handler={() => decrement(id)}>Decrement</Button>
        </div>
      </div>
    </>
  );
}

export default Counter;