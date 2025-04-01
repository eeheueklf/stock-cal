import { useState } from "react";
import DividendForm from "./DividendForm";
import DividendResult from "./DividendResult";

const DividendCalculator = () => {
    const [result, setResult] = useState(null);

    const handleCalculate = async (formData) => {
        const response = await fetch("http://localhost:8080/api/dividends/calculate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        const data = await response.json();
        setResult(data);
    };

    return (
        <div>
            <h1>배당 재투자 계산기</h1>
            <DividendForm onCalculate={handleCalculate} />
            {result && <DividendResult data={result} />}
        </div>
    );
};

export default DividendCalculator;
