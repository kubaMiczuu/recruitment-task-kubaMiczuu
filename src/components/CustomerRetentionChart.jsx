import React, {useState, useEffect} from 'react';
import {PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend} from "recharts";

const CustomerRetentionChart = ({data}) => {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const uniqueCustomerType = new Map();
        data.forEach(order => {
            const customerType = order.customerType;
            if(uniqueCustomerType.has(customerType)) uniqueCustomerType.set(customerType, uniqueCustomerType.get(customerType)+1);
            else uniqueCustomerType.set(customerType, 1);
        })

        setCustomers(Array.from(uniqueCustomerType,([name, value]) => ({name: name, value: value})));

    }, [data])

    const colors = ["#00F629", "#FCC574"];

    return (
        <div className={`flex flex-col active:outline-none w-full items-center justify-center `}>
            <span className={`text-xl mb-5`}>Customer retention</span>
            <ResponsiveContainer width="95%" height={600}>
                <PieChart width="100%">
                <Pie data={customers} innerRadius={130} outerRadius={250} cx="50%" cy="50%" dataKey="value" label={({name, percent}) => `${name} ${(percent*100).toFixed(0)}%`}>
                    {customers.map((customer, index) => (
                        <Cell key={index} fill={colors[index%colors.length]} stroke={'white'} strokeWidth={'15px'} />
                    ))}
                </Pie>
                <Tooltip/>
                <Legend verticalAlign={'bottom'} height={50}/>
            </PieChart>
            </ResponsiveContainer>
        </div>
    )
}
export default CustomerRetentionChart