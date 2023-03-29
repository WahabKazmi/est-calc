import "./style.scss";
interface PropType {
    name: string;
    radio: {
        name: string;
        price: string;
    }[] | unknown
}

const RadioSelector = ({ name, radio }: PropType) => {
    return (
        <div className="radio-selector">
            <p className="lead">{name}</p>
            <div className="radio-wrapper">
                {radio?.map(radio => {
                    return (
                        <div className="radio">
                            <input type="radio" id={radio.name} name="radio-group" checked />
                            <label htmlFor={radio.name}>{radio.name}</label>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default RadioSelector;