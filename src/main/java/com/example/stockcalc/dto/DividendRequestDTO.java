package com.example.stockcalc.dto;


public class DividendRequestDTO {
    private String dividendCycle;      // 배당 주기 (분기, 월 등)
    private String tax;                // 과세 여부 (과세(직투), 비과세 등)
    private boolean reinvest;          // 배당 재투자 여부
    private double initialInvestment;  // 초기 투자금
    private double monthlyInvestment;  // 월 적립식 투자금
    private double monthlyIncrease;    // 월 적립식 증액
    private double inflationRate;      // 물가 상승률
    private double dividendGrowthRate; // 배당 성장률
    private double dividendYield;      // 시가 배당률

    public DividendRequestDTO() {}

    public double getInitialInvestment() {
        return initialInvestment;
    }

    public double getDividendYield() {
        return dividendYield;
    }

    public boolean isReinvest() {
        return reinvest;
    }

    public int getMonthlyIncrease() {
        return (int) monthlyIncrease;
    }

    public double getMonthlyInvestment() {
        return monthlyInvestment;
    }

    public int getInflationRate() {
        return (int) inflationRate;
    }

    public double getDividendGrowthRate() {
        return dividendGrowthRate;
    }

    public String getDividendCycle() {
        return dividendCycle;
    }
    public String getTax() {
        return tax;
    }
}
