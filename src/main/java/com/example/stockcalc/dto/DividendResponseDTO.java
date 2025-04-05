package com.example.stockcalc.dto;

import java.util.List;

public class DividendResponseDTO {
    private double totalInvestment;    // 최종 투자금
    private double totalDividends;     // 총 배당금
    private List<DividendYearlyResultDTO> yearlyResults; // 매년 투자 성장 추이

    public DividendResponseDTO() {}

    // ✅ Getter 추가
    public double getTotalInvestment() {
        return totalInvestment;
    }

    public double getTotalDividends() {
        return totalDividends;
    }

    public void setTotalInvestment(double currentInvestment) {
        this.totalInvestment = currentInvestment;
    }

    public void setTotalDividends(double totalDividends) {
        this.totalDividends = totalDividends;
    }
    public List<DividendYearlyResultDTO> getYearlyResults() {
        return yearlyResults;
    }
    public void setYearlyResults(List<DividendYearlyResultDTO> yearlyResults) {
        this.yearlyResults = yearlyResults;
    }


}
