import { useState } from 'react';
import { Range } from 'react-range';
import "./style.scss";

interface PropType {
    max: string;
    min: string;
    price: string;
    name: string;
}

const RangeSelector = ({ max = '10', min = '0', price, name }: PropType) => {
    const [value, setValue] = useState([0]);
    console.log(value)
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
                    max={+max}
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