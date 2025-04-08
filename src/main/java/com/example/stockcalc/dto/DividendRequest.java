package com.example.stockcalc.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DividendRequest {
    private double initialInvestment;     // 초기 투자금
    private double annualContribution;    // 연간 추가 투자금
    private double dividendYield;         // 시가 배당률 (예: 0.036)
    private double dividendGrowthRate;    // 배당 성장률 (예: 0.08)
    private int investmentPeriod;                    // 투자 연수
}

