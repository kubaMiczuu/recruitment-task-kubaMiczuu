import React, { useState, useEffect } from 'react'
import providedData from '../data.json'
import SalesByCategoryChart from "../components/SalesByCategoryChart.jsx";
import PriceSpentAnalysisChart from "../components/PriceSpentAnalysisChart.jsx";
import CustomerRetentionChart from "../components/CustomerRetentionChart.jsx";

function Dashboard() {

  const [data, setData] = useState([]);
  const [openChart, setOpenChart] = useState(0);

  useEffect(() => {
    setData(providedData.orders);
  }, [])

  const buttonStyle = `border rounded-lg bg-blue-600 hover:bg-blue-700 hover:scale-105 p-3 text-white w-3/5 transition cursor-pointer`;

  const handleClick = (chartNumber) => {
      setOpenChart(chartNumber);
  }

  return (
    <>
      <h1 className={`text-center text-5xl mt-10 mb-20`}>Sales data analysis by charts</h1>

      <div className="flex flex-row gap-x-2 w-full">

          <div className="flex flex-col items-center w-1/3 gap-4">

            <span className={`text-3xl`}>Choose one from below charts:</span>

            <button onClick={() => handleClick(1)} className={`${buttonStyle}`}>Sales structure by category</button>
            <button onClick={() => handleClick(2)} className={`${buttonStyle}`}>Average price spent</button>
            <button onClick={() => handleClick(3)} className={`${buttonStyle}`}>New and returning customers in sales</button>

          </div>

          <div className="flex flex-col items-center justify-center w-2/3 gap-2">

              {openChart === 1 && (
                  <SalesByCategoryChart data={data} />
              )}

              {openChart === 2 && (
                  <PriceSpentAnalysisChart data={data} />
              )}

              {openChart === 3 && (
                  <CustomerRetentionChart data={data} />
              )}

          </div>

      </div>
    </>
  )
}

export default Dashboard
