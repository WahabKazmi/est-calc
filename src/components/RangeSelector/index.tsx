import { useEffect, useState } from 'react';
import { Range } from 'react-range';
import "./style.scss";

interface PropType {
    max: number;
    min: number;
    price: number;
    name: string;
    handleChange: (action: 'INC' | 'DEC', v: number, minusby: number) => void;
}

const RangeSelector = ({ max, min, price, name, handleChange }: PropType) => {
    const [value, setValue] = useState(0);


    const rangeRange = (value: number) => {
        console.log({value})
        const formula = price * +value
        setValue(prev => {
            if (prev < value) handleChange('INC', formula, 0)
            else handleChange('DEC', formula, prev * price)
            return value;
        });
    }

    return (
        <div className="range-selector">
            <p className="lead">{name}</p>
            {price * +value}

            <div className="range-wrapper">
                <div>
                    <p>{min}</p>
                </div>
                <input
                    type="range"
                    style={{width: '100%'}}
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
    )
}

export default RangeSelector;