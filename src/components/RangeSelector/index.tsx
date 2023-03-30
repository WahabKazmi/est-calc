import { useState } from 'react';
import { Range } from 'react-range';
import "./style.scss";

interface PropType {
    max: number;
    min: number;
    price: number;
    name: string;
}

const RangeSelector = ({ max, min, price, name }: PropType) => {
    const [value, setValue] = useState([0]);
    return (
        <div className="range-selector">
            <p className="lead">How many minutes will the video be?</p>
            <div className="range-wrapper">
                <div>
                    <p>{min}</p>
                </div>
                <Range
                    step={1}
                    min={0}
                    max={max}
                    values={value}
                    onChange={(values) => setValue(values)}
                    renderTrack={({ props, children }) => (
                        <div
                            {...props}
                            className="track"
                        >
                            {children}
                        </div>
                    )}
                    renderThumb={({ props }) => (
                        <div {...props} className="thumb">{value}</div>
                    )}
                />
                <div>
                    <p>{max}</p>
                </div>
            </div>
        </div>
    )
}

export default RangeSelector;