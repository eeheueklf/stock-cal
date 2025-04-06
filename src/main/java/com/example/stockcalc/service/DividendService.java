package com.example.stockcalc.service;

import com.example.stockcalc.dto.*;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class DividendService {

    public DividendResponseDTO calculateDividend(DividendRequestDTO request, int totalMonths) {
        List<DividendMonthlyResultDTO> results = new ArrayList<>();
        LinkedList<Double> dividendHistory = new LinkedList<>();

        double investedAmount = request.getInitialInvestment();
        double accumulatedDividend = 0;
        double currentValue = investedAmount;
        double monthlyInvestment = request.getMonthlyInvestment();
        double monthlyIncrease = request.getMonthlyIncrease();

        double dividendYield = request.getDividendYield() / 100.0;
        double dividendGrowthRate = request.getDividendGrowthRate() / 100.0;
        double inflationRate = request.getInflationRate() / 100.0;

        int dividendFrequency = request.getDividendCycle().equals("월") ? 12 : 4;
        int dividendInterval = 12 / dividendFrequency;
        boolean isTaxed = request.getTax().equals("과세");

        for (int month = 1; month <= totalMonths; month++) {
            int year = (month - 1) / 12;
            int currentMonth = (month - 1) % 12 + 1;

            // 배당 발생 월인지 확인
            boolean isDividendMonth = (currentMonth % dividendInterval == 0);
            double monthlyDividend = isDividendMonth ? (currentValue * dividendYield / dividendFrequency) : 0.0;

            // 세금 차감
            if (isTaxed) {
                monthlyDividend *= (1 - 0.15);
            }

            // 누적
            accumulatedDividend += monthlyDividend;
            dividendHistory.add(monthlyDividend);
            if (dividendHistory.size() > 12) {
                dividendHistory.removeFirst();
            }

            double sumLast12 = dividendHistory.stream().mapToDouble(Double::doubleValue).sum();

            // 재투자
            if (request.isReinvest()) {
                currentValue += monthlyDividend;
            }

            // 투자금 추가
            currentValue += monthlyInvestment + monthlyIncrease;
            investedAmount += monthlyInvestment + monthlyIncrease;

            // 물가상승 반영 (매월)
            if (inflationRate > 0) {
                currentValue *= (1 + inflationRate / 12);
            }

            // 배당성장 반영 (매월)
            dividendYield *= (1 + dividendGrowthRate / 12);

            DividendMonthlyResultDTO result = new DividendMonthlyResultDTO();
            result.setYear(year);
            result.setMonth(currentMonth);
            result.setDividend(Math.round(monthlyDividend));
            result.setLast12MonthsDividend(Math.round(sumLast12));
            result.setMonthlyAverage(Math.round(sumLast12 / 12));

            results.add(result);
        }

        DividendResponseDTO response = new DividendResponseDTO();
        response.setYearlyResults(new ArrayList<>()); // 비움
        response.setMonthlyResults(results);
        response.setTotalDividends(accumulatedDividend);
        response.setTotalInvestment(currentValue);

        return response;
    }
}