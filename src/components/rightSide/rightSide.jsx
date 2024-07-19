import { UpdatesData } from '../../Data/data';
import CustomerReview from '../CustomerReview/CustomerReview';
import './rightSide.css';

const RightSide = () => {
    return (
        <div className='rightSide'>
            <div className='updateContainer'>
                <h3>Updates</h3>
                <div className="update">
                    {UpdatesData.map((data) => {
                        return (
                            <div className='updates'>
                                <img src={data.img} />
                                <div className='noti'>
                                    <div>
                                        <span>{data.name} </span>
                                        <span>{data.noti}</span>
                                    </div>
                                    <span>{data.time}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div>
                <h3>Customer Review</h3>
                <CustomerReview />
            </div>
        </div>
    )
}

export default RightSide;
