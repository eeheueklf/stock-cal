package com.example.stockcalc.controller;

import java.util.List;

public class DividendCalculationResponse {
    private List<Integer> years;
    private List<Double> totalInvestments;
    private List<Double> annualDividends;

    public List<Integer> getYears() {
        return years;
    }

    public void setYears(List<Integer> years) {
        this.years = years;
    }

    public List<Double> getTotalInvestments() {
        return totalInvestments;
    }

    public void setTotalInvestments(List<Double> totalInvestments) {
        this.totalInvestments = totalInvestments;
    }

    public List<Double> getAnnualDividends() {
        return annualDividends;
    }

    public void setAnnualDividends(List<Double> annualDividends) {
        this.annualDividends = annualDividends;
    }
}
