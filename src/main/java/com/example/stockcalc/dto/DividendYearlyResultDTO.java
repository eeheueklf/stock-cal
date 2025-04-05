package com.example.stockcalc.dto;

public class DividendYearlyResultDTO {
    private int year;
    private double investedAmount;
    private double annualDividend;
    private double dividendRate;
    private double priceGrowth;
    private double yearlyAddition;
    private double totalValue;
    private double accumulatedDividend;

    public void setYear(int year) {
        this.year = year;
    }
    public int getYear() {
        return year;
    }
    public void setInvestedAmount(double investedAmount) {
        this.investedAmount = investedAmount;
    }
    public double getInvestedAmount() {
        return investedAmount;
    }
    public void setAnnualDividend(double annualDividend) {
        this.annualDividend = annualDividend;
    }
    public double getAnnualDividend() {
        return annualDividend;
    }
    public void setDividendRate(double dividendRate) {
        this.dividendRate = dividendRate;
    }
    public double getDividendRate() {
        return dividendRate;
    }
    public void setPriceGrowth(double priceGrowth) {
        this.priceGrowth = priceGrowth;
    }
    public double getPriceGrowth() {
        return priceGrowth;
    }
    public void setYearlyAddition(double yearlyAddition) {
        this.yearlyAddition = yearlyAddition;
    }
    public double getYearlyAddition() {
        return yearlyAddition;
    }
    public void setTotalValue(double totalValue) {
        this.totalValue = totalValue;
    }
    public double getTotalValue() {
        return totalValue;
    }
    public void setAccumulatedDividend(double accumulatedDividend) {
        this.accumulatedDividend = accumulatedDividend;
    }
    public double getAccumulatedDividend() {
        return accumulatedDividend;
    }
    // 생성자, getter, setter 생략 (Lombok 써도 됨)
}
