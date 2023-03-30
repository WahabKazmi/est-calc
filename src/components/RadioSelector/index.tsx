import "./style.scss";
interface PropType {
    name: string;
    radio: {
        name: string;
        price: number;
    }[]
}

const RadioSelector = ({ name, radio }: PropType) => {
    return (
        <div className="radio-selector">
            <p className="lead">{name}</p>
            <div className="radio-wrapper">
                {radio?.map(({name}) => {
                    return (
                        <div className="radio" key={name}>
                            <input type="radio" id={name?.toLocaleLowerCase()?.replaceAll(' ', '-')} name="radio-group" />
                            <label htmlFor={name?.toLocaleLowerCase()?.replaceAll(' ', '-')}>{name}</label>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default RadioSelector;