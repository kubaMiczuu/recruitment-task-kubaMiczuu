import React, {useState, useEffect} from "react";
import {ResponsiveContainer, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, ReferenceLine} from "recharts";

const PriceSpentAnalysisChart = ({ data }) => {

    const [prices, setPrices] = useState([]);
    const [averagePrice, setAveragePrice] = useState(null);
    const [medianPrice, setMedianPrice] = useState(null);

    useEffect(() => {
        let prices = new Map();
        let totalSum = 0;
        let allPrices = [];

        data.forEach((order) => {
            const price = order.unitPrice * order.quantity;
            allPrices.push(price);
            const id = order.orderId;
            prices.set(id, price);
            totalSum+=price;
        })

        const average = data.length > 0 ? totalSum / data.length : 0;

        const sorted = [...allPrices].sort((a, b) => a - b);
        const middleValue = Math.floor(sorted.length / 2);
        let median;

        if(sorted.length%2 === 0) {
            median = (sorted[middleValue-1]+sorted[middleValue])/2;
        } else median = sorted[middleValue];

        setPrices(Array.from(prices, ([name, value]) => ({name: name, value: value})));
        setAveragePrice(average);
        setMedianPrice(median);

    }, [data]);

    return (
        <div className={`flex flex-col active:outline-none w-full items-center justify-center `}>
            <span className={`text-xl mb-5`}>Price spent on order analysis</span>
            <ResponsiveContainer width="95%" height={600}>
                <BarChart data={prices} >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip cursor={{fill: 'transparent'}} />
                    <Legend/>
                    <Bar dataKey="value" fill={"#00F629"}/>
                    <ReferenceLine y={averagePrice} stroke="red" strokeDasharray="3 3" label="Average price" />
                    <ReferenceLine y={medianPrice} stroke="red" strokeDasharray="3 3" label="Median price" />
                </BarChart>
            </ResponsiveContainer>
        </div>
        )
}
export default PriceSpentAnalysisChart