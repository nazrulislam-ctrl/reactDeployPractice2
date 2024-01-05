import { useState } from "react";

function Card() {
  const[counter, setCount]= useState(0);
  const increment=()=>{
    setCount(counter+1);
  }
  const decrement=()=>{
    if(counter>0){
      setCount(counter-1);
    }
  }
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button onClick={increment} className="btn btn-success">+</button>
            <button className="btn btn-primary">{counter} Items</button>
            <button onClick={decrement} className="btn btn-error">-</button>
            <button className="btn btn-info ml-5">Order Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
