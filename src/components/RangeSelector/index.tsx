import { useState } from "react";
import "./style.scss";
import React from "react";

interface PropType {
  max: number;
  min: number;
  price: number;
  name: string;
  handleChange: (prevValue: number, newValue: number) => void;
}

const RangeSelector = ({ max, min, price, name, handleChange }: PropType) => {
  const [value, setValue] = useState(0);

  const rangeRange = (value: number) => {
    setValue((prev) => {
      handleChange(prev * price, value * price);
      return value;
    });
  };

  return (
    <div className="range-selector">
      <p className="lead">{name}</p>
      <div className="range-wrapper">
        <div>
          <p>{min}</p>
        </div>
        <input
          type="range"
          style={{ width: "100%" }}
          step={1}
          min={0}
          max={max}
          value={value}
          onChange={(e) => rangeRange(+e?.target?.value)}
        />
        <div>
          <p>{max}</p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(RangeSelector);
