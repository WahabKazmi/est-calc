import { useState } from "react";
import "./style.scss";
interface PropType {
  name: string;
  group: string;
  handleChange: (prevValue: number, newValue: number) => void;
  radio: {
    name: string;
    value: string;
    price: number;
    checked: boolean;
  }[];
}

const RadioSelector = ({ name, radio, group, handleChange }: PropType) => {
  const [prevPrice, setPrevPrice] = useState(0);
  const [selectedValue, setSelectedValue] = useState(
    radio.find((item) => item.checked === true)
  );

  return (
    <div className="radio-selector">
      <p className="lead">{name}</p>
      <div className="radio-wrapper">
        {radio?.map(({ name, value, checked, price }) => {
          return (
            <div className="radio" key={name}>
              <input
                type="radio"
                id={`${group}-${value}`}
                name={group}
                value={value}
                checked={selectedValue?.value === value}
                onChange={(e) => {
                  setSelectedValue((prev) => {
                    setPrevPrice(prev?.price as number);
                    return {
                      name,
                      value: e?.target?.value,
                      price,
                      checked: true,
                    };
                  });
                  handleChange(
                    selectedValue ? +selectedValue?.price : 0,
                    +price
                  );
                }}
              />
              <label htmlFor={`${group}-${value}`}>{name}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default RadioSelector;
