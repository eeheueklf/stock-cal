package com.example.stockcalc.dto;

import java.util.List;

public class DividendResponseDTO {
    private double totalInvestment;    // 최종 투자금
    private double totalDividends;     // 총 배당금
    private List<Double> investmentGrowth; // 매년 투자 성장 추이

    public void setTotalInvestment(double currentInvestment) {
        this.totalInvestment = currentInvestment;
    }

    public void setTotalDividends(double totalDividends) {
        this.totalDividends = totalDividends;
    }

    public void setInvestmentGrowth(List<Double> investmentGrowth) {
        this.investmentGrowth = investmentGrowth;
    }
}
