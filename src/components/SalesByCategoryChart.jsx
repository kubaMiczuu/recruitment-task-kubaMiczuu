import React, {useState, useEffect} from "react";
import {PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend} from "recharts";

const SalesByCategoryChart = ({data}) => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const uniqueCategories = new Map();
        data.forEach(order => {
            const category = order.category;
            if (uniqueCategories.has(category)) uniqueCategories.set(category, uniqueCategories.get(category)+1);
            else uniqueCategories.set(category, 1);
        })

       setCategories(Array.from(uniqueCategories, ([name, value]) => ({name: name, value: value})));

    },[data])

    const colors = ["#00F629", "#FCF774", "#FCC574"];

    return (
        <div className={`flex flex-col active:outline-none w-full items-center justify-center `}>
            <span className={`text-xl mb-5`}>Sales structure by category</span>
            <ResponsiveContainer width="95%" height={600}>
                <PieChart width="100%">
                    <Pie data={categories} cx="50%" cy="50%" dataKey="value" label={({name, percent}) => `${name} ${(percent*100).toFixed(0)}%`}>
                        {categories.map((category, index) => (
                            <Cell key={index} fill={colors[index%colors.length]} stroke={'white'} strokeWidth={'5px'} />
                        ))}
                    </Pie>
                    <Tooltip/>
                    <Legend verticalAlign={'bottom'} height={50}/>
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}
export default SalesByCategoryChart;