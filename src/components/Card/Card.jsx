import { useState } from 'react';
import './Card.css';
import { motion, LayoutGroup } from 'framer-motion';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { UilTimes } from '@iconscout/react-unicons';
import Chart from 'react-apexcharts';
const Card = (props) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <LayoutGroup>
            {
                expanded ?
                    <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
                    :
                    <CompactCard param={props} setExpanded={() => setExpanded(true)} />

            }
        </LayoutGroup>
    )
}
const CompactCard = ({ param, setExpanded }) => {
    const Png = param.png;
    return (
        <div className="compactCard"
            style={{ background: param.color.backGround, boxShadow: param.color.boxShadow }}
            onClick={setExpanded}
            layoutId="expandableCardContent"
        >
            <div className="radialCard">
                <CircularProgressbar
                    value={param.barValue}
                    text={`${param.barValue}%`}
                />
                <span>{param.title}</span>
            </div>
            <div className="detail">
                <Png />
                <span>$ {param.value}</span>
                <span>Last 24 hours</span>
            </div>
        </div>
    )
}
//expanded card
const ExpandedCard = ({ param, setExpanded }) => {
    const data = {
        options: {
            chart: {
                type: 'area',
                height: "auto",
            },
            dropShadow: {
                enabled: false,
                top: 1,
                left: 1,
                blur: 3,
                color: '#000',
                opacity: 0.45
            },
            fill: {
                colors: ["#fff"],
                type: 'gradient',
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'smooth',
                colors: "#fff",
            },
            tooltip: {
                x: {
                    format: 'dd MMM',
                },
            },
            grid: {
                show: true,
            },
            xaxis: {
                type: 'category',
            }
        }
    }
    return (
        <div className="expandedCard"
            style={{
                background: param.color.backGround, boxShadow: param.color.boxShadow
            }}
            layoutId="expandableCardContent"
        >
            <div className='closeIcon'>
                <UilTimes onClick={setExpanded} />
            </div>
            <span>{param.title}</span>
            <div className='chartContainer'>
                <Chart series={param.series} type="area" options={data.options} />
            </div>
            <span>Last 24 hours</span>
        </div >
    )
}
export default Card;
