package com.example.stockcalc.service;

import com.example.stockcalc.dto.DividendCalculationRequest;
import com.example.stockcalc.dto.DividendCalculationResult;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DividendCalculatorService {

    public DividendCalculationResult calculateDividends(DividendCalculationRequest request) {
        double initialInvestment = request.getInitialInvestment();
        double monthlyInvestment = request.getMonthlyInvestment();
        double dividendYield = request.getDividendYield() / 100;
        double dividendGrowthRate = request.getDividendGrowthRate() / 100;
        double inflationRate = request.getInflationRate() / 100;
        boolean taxable = request.isTaxable();
        double taxRate = taxable ? request.getTaxRate() / 100 : 0;
        int startYear = request.getStartYear();
        int endYear = request.getEndYear();

        double totalInvestment = initialInvestment;
        double totalDividends = 0;
        List<Double> yearlyDividends = new ArrayList<>();
        List<Double> yearlyInflationAdjustedDividends = new ArrayList<>();
        List<Double> yearlyTotalInvestment = new ArrayList<>();

        for (int year = startYear; year <= endYear; year++) {
            // 1년 동안 받은 배당금
            double yearlyDividend = totalInvestment * dividendYield;

            // 세금 적용
            yearlyDividend -= yearlyDividend * taxRate;

            // 배당금 재투자
            totalInvestment += yearlyDividend;

            // 연간 추가 투자
            totalInvestment += monthlyInvestment * 12;

            // 배당 성장률 적용
            dividendYield *= (1 + dividendGrowthRate);

            // 물가상승률 반영한 배당금 계산
            double inflationAdjustedDividend = yearlyDividend / Math.pow(1 + inflationRate, year - startYear);

            // 데이터 저장
            totalDividends += yearlyDividend;
            yearlyDividends.add(yearlyDividend);
            yearlyInflationAdjustedDividends.add(inflationAdjustedDividend);
            yearlyTotalInvestment.add(totalInvestment);
        }

        return new DividendCalculationResult(yearlyDividends, yearlyInflationAdjustedDividends, yearlyTotalInvestment);
    }
}
