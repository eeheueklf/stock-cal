package com.example.stockcalc.service;

import com.example.stockcalc.dto.DividendResult;
import com.example.stockcalc.dto.DividendRequest;

public class DividendCalculator {

    public static DividendResult calculateDividend(DividendRequest req) {
        double currentValue = req.getInitialInvestment();
        double currentYield = req.getDividendYield();
        double totalDividends = 0;

        for (int year = 1; year <= req.getInvestmentPeriod(); year++) {
            double dividend = currentValue * currentYield;
            totalDividends += dividend;

            // 배당금 + 추가 투자금 재투자
            currentValue += dividend + req.getAnnualContribution();

            // 배당률 증가
            currentYield *= (1 + req.getDividendGrowthRate());
        }

        double finalAnnualDividend = currentValue * currentYield;
        double monthlyDividend = finalAnnualDividend / 12;
        double totalPrincipal = req.getInitialInvestment() + req.getAnnualContribution() * req.getInvestmentPeriod();

        return new DividendResult(
                round(totalPrincipal),
                round(totalDividends),
                round(currentValue),
                round(finalAnnualDividend),
                round(monthlyDividend)
        );
    }

    private static double round(double value) {
        return Math.round(value * 100.0) / 100.0;
    }
}

