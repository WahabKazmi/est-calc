import { InputHTMLAttributes } from "react";
import "./style.scss";
interface PropType {
  name: string;
  group: string;
  radio: {
    name: string;
    value: string;
    price: number;
    checked: boolean;
  }[];
}

const RadioSelector = ({ name, radio, group }: PropType) => {
  // console.log(group)
  const handleChange = (e: any) => {
    console.log(e.target.value);
  };
  return (
    <div className="radio-selector">
      <p className="lead">{name}</p>
      <div className="radio-wrapper">
        {radio?.map(({ name, value, checked }) => {
          return (
            <div className="radio" key={name}>
              <input
                type="radio"
                id={group}
                name={group}
                value={value}
                checked={checked}
                onChange={handleChange}
              />
              <label htmlFor={group}>{name}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default RadioSelector;
