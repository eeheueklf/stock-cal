package com.example.stockcalc.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DividendResult {
    private double totalPrincipal;         // 총 투자원금
    private double totalDividends;         // 누적 배당금
    private double finalValue;             // 총 평가금
    private double finalAnnualDividend;    // 마지막 해 연간 배당금
    private double monthlyDividend;        // 월 환산 배당금
}

