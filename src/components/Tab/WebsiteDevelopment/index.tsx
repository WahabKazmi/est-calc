import RadioSelector from '../../RadioSelector';
import RangeSelector from '../../RangeSelector';
import data from './../../../data/tab/index.json';

const WebsiteDevelopment = () => {

    return (
        <div className="tab-body">
            <h2>Website development</h2>
            {data.tabs['website-development'].questions.map((question) => {
                return (
                    <>
                        {(question.type === 'slider') ?
                            <RangeSelector
                                min={question.min || '0'}
                                max={question.max || '10'}
                                price={question.price || '0'}
                                name={question.name}
                            />
                            : <RadioSelector
                                name={question.name}
                                radio={question.radio}
                            />}
                    </>
                )
            })}
        </div>
    )
}
export default WebsiteDevelopment;