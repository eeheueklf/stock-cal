import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const DividendResult = ({ data }) => {
    const chartRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!data || !canvasRef.current) return;

        // 기존 차트가 있다면 삭제
        if (chartRef.current) {
            chartRef.current.destroy();
        }

        const ctx = canvasRef.current.getContext("2d");

        chartRef.current = new Chart(ctx, {
            type: "line",
            data: {
                labels: data.years,
                datasets: [
                    {
                        label: "배당금 누적 합계 (물가 반영)",
                        data: data.inflationAdjusted,
                        borderColor: "blue",
                        fill: false,
                    },
                    {
                        label: "배당금 누적 합계 (미반영)",
                        data: data.nominal,
                        borderColor: "green",
                        fill: false,
                    },
                ],
            },
        });

        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, [data]);

    return (
        <div>
            <h2>계산 결과</h2>
            <canvas ref={canvasRef}></canvas>
        </div>
    );
};

export default DividendResult;
