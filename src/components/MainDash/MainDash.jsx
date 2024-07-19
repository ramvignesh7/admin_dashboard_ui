import { cardsData } from '../../Data/data';
import Card from '../Card/Card';
import BasicTable from '../Table/Table';
import './MainDash.css';

const MainDash = () => {
    return (
        <div className='mainDash'>
            <h1>Dashboard</h1>
            <div className="cards">
                {cardsData.map((data, index) => {
                    return (
                        <div key={index} className="cardContainer">
                            <Card 
                                title={data.title}
                                color={data.color}
                                barValue={data.barValue}
                                value={data.value}
                                png={data.png}
                                series={data.series}
                            />
                        </div>
                    )
                })}
            </div>
            <BasicTable/>
        </div>
    )
}

export default MainDash;
