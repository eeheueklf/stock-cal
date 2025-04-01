package com.example.stockcalc.dto;

import java.util.List;

public class DividendCalculationResult {
    private List<Double> yearlyDividends;
    private List<Double> yearlyInflationAdjustedDividends;
    private List<Double> yearlyTotalInvestment;

    public DividendCalculationResult(List<Double> yearlyDividends, List<Double> yearlyInflationAdjustedDividends, List<Double> yearlyTotalInvestment) {
        this.yearlyDividends = yearlyDividends;
        this.yearlyInflationAdjustedDividends = yearlyInflationAdjustedDividends;
        this.yearlyTotalInvestment = yearlyTotalInvestment;
    }

    public List<Double> getYearlyDividends() {
        return yearlyDividends;
    }

    public void setYearlyDividends(List<Double> yearlyDividends) {
        this.yearlyDividends = yearlyDividends;
    }

    public List<Double> getYearlyInflationAdjustedDividends() {
        return yearlyInflationAdjustedDividends;
    }

    public void setYearlyInflationAdjustedDividends(List<Double> yearlyInflationAdjustedDividends) {
        this.yearlyInflationAdjustedDividends = yearlyInflationAdjustedDividends;
    }

    public List<Double> getYearlyTotalInvestment() {
        return yearlyTotalInvestment;
    }

    public void setYearlyTotalInvestment(List<Double> yearlyTotalInvestment) {
        this.yearlyTotalInvestment = yearlyTotalInvestment;
    }
}
