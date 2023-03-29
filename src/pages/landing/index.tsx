import Tab from '../../components/Tab';
import './style.scss';

const LandingPage = () => {
    return (
        <div className="page">
            <div className="container">
                <div className="info">
                    <h1 className='title text-center'>HOW MUCH WILL MY PROJECT COST?</h1>
                    <p className='lead text-center'>We wanted to make it easy for you to estimate the cost of working with us.</p>
                    <p className='lead text-center'>This is the same tool we use internally to provide general estimates and is usually quite close to our final quoted price. Of course, no one project is the same so there may be exceptions.</p>
                </div>
                <Tab />
            </div>
        </div>
    )
}

export default LandingPage;