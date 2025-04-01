package com.example.stockcalc.dto;

public class DividendCalculationRequest {
    private double initialInvestment;
    private double monthlyInvestment;
    private double dividendYield;
    private double dividendGrowthRate;
    private double inflationRate; // ✅ 물가상승률 필드 존재
    private boolean taxable;
    private double taxRate;
    private int startYear;
    private int endYear;

    // 기존 getter & setter 유지

    public double getInitialInvestment() {
        return initialInvestment;
    }

    public void setInitialInvestment(double initialInvestment) {
        this.initialInvestment = initialInvestment;
    }

    public double getMonthlyInvestment() {
        return monthlyInvestment;
    }

    public void setMonthlyInvestment(double monthlyInvestment) {
        this.monthlyInvestment = monthlyInvestment;
    }

    public double getDividendYield() {
        return dividendYield;
    }

    public void setDividendYield(double dividendYield) {
        this.dividendYield = dividendYield;
    }

    public double getDividendGrowthRate() {
        return dividendGrowthRate;
    }

    public void setDividendGrowthRate(double dividendGrowthRate) {
        this.dividendGrowthRate = dividendGrowthRate;
    }

    public boolean isTaxable() {
        return taxable;
    }

    public void setTaxable(boolean taxable) {
        this.taxable = taxable;
    }

    public double getTaxRate() {
        return taxRate;
    }

    public void setTaxRate(double taxRate) {
        this.taxRate = taxRate;
    }

    public int getStartYear() {
        return startYear;
    }

    public void setStartYear(int startYear) {
        this.startYear = startYear;
    }

    public int getEndYear() {
        return endYear;
    }

    public void setEndYear(int endYear) {
        this.endYear = endYear;
    }

    // ✅ 추가된 부분: getInflationRate() & setInflationRate()
    public double getInflationRate() {
        return inflationRate;
    }

    public void setInflationRate(double inflationRate) {
        this.inflationRate = inflationRate;
    }
}
