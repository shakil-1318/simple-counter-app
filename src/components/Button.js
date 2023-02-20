import React from 'react';

const Button = ({ handler, children }) => {
  return (
    <>
      <button
        onClick={handler}
        id="increment" class="bg-indigo-400 text-white px-3 py-2 rounded shadow">
        {children}
      </button>
    </>
  );
};

export default Button;