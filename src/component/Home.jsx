import React, { useState } from "react";

export default function Home() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [result, setResult] = useState(0);

  const add = () => setResult(value1 + value2);
  const min = () => setResult(value1 - value2);
  const quarter = () => setResult(value1 * value2);
  const persent = () => setResult(value1 % value2);

  const increment1 = () => setValue1(value1 + 1);
  const decrement1 = () => setValue1(value1 - 1);

  const increment2 = () => setValue2(value2 + 1);
  const decrement2 = () => setValue2(value2 - 1);

  return (
    <div className="flex justify-center h-screen text-2xl bg-gray-300 items-center">
      <div className=" shadow-2xl p-5 rounded-4xl">
        <div className="w-full h-full flex flex-col justify-center items-center gap-5">
          <div className="flex items-center">
            <div className="flex gap-4">
              <div>القيمة الاولى: {value1} </div>
              <button
                className="w-12 bg-red-300 rounded-lg"
                onClick={decrement1}
              >
                -1
              </button>
              <button
                className="w-12 bg-green-300 rounded-lg"
                onClick={increment1}
              >
                +1
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-4">
              <div>القيمة الثانية : {value2} </div>
              <button
                className="w-12 bg-red-300 rounded-lg"
                onClick={decrement2}
              >
                -1
              </button>
              <button
                className="w-12 bg-green-300 rounded-lg"
                onClick={increment2}
              >
                +1
              </button>
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            <button className="w-14 bg-yellow-300 rounded-xl" onClick={add}>
              +
            </button>
            <button className="w-14 bg-yellow-300 rounded-xl" onClick={min}>
              -
            </button>
            <button className="w-14 bg-yellow-300 rounded-xl" onClick={quarter}>
              *
            </button>
            <button className="w-14 bg-yellow-300 rounded-xl" onClick={persent}>
              %
            </button>
          </div>

          <button className="w-14 bg-yellow-300 rounded-xl" onClick={result}>
            =
          </button>
          <div className="flex justify-center w-14 bg-white rounded-xl">
            {result}
          </div>
        </div>
      </div>
    </div>
  );
}
