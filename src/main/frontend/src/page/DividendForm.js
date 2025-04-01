import { useState } from "react";

const DividendForm = ({ onCalculate }) => {
    const [formData, setFormData] = useState({
        initialInvestment: 1000000,
        monthlyInvestment: 100000,
        dividendYield: 5.0,
        dividendGrowthRate: 2.0,
        inflationRate: 3.0,
        taxable: true,
        taxRate: 15.0,
        startYear: 2025,
        endYear: 2055,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : parseFloat(value),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCalculate(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>초기 투자금: <input type="number" name="initialInvestment" value={formData.initialInvestment} onChange={handleChange} /></label>
            <label>월 적립식 투자금: <input type="number" name="monthlyInvestment" value={formData.monthlyInvestment} onChange={handleChange} /></label>
            <label>시가 배당률 (%): <input type="number" name="dividendYield" value={formData.dividendYield} onChange={handleChange} /></label>
            <label>배당 성장률 (%): <input type="number" name="dividendGrowthRate" value={formData.dividendGrowthRate} onChange={handleChange} /></label>
            <label>물가 상승률 (%): <input type="number" name="inflationRate" value={formData.inflationRate} onChange={handleChange} /></label>
            <label>과세 여부: <input type="checkbox" name="taxable" checked={formData.taxable} onChange={handleChange} /></label>
            <label>세율 (%): <input type="number" name="taxRate" value={formData.taxRate} onChange={handleChange} /></label>
            <label>시작 연도: <input type="number" name="startYear" value={formData.startYear} onChange={handleChange} /></label>
            <label>끝 연도: <input type="number" name="endYear" value={formData.endYear} onChange={handleChange} /></label>
            <button type="submit">계산하기</button>
        </form>
    );
};

export default DividendForm;
