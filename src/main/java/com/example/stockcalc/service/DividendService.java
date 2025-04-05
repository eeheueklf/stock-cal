package com.example.stockcalc.service;

import com.example.stockcalc.dto.*;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class DividendService {

    public DividendResponseDTO calculateDividend(DividendRequestDTO request, int years) {
        List<DividendYearlyResultDTO> results = new ArrayList<>();
        double investedAmount = request.getInitialInvestment();
        double accumulatedDividend = 0;
        double currentValue = investedAmount;

        for (int year = 1; year <= years; year++) {
            double annualDividend = currentValue * request.getDividendYield() / 100;
            accumulatedDividend += annualDividend;

            double yearlyAddition = request.getMonthlyInvestment() * 12 +
                    request.getMonthlyIncrease() * 12;

            if (request.isReinvest()) {
                currentValue += annualDividend;
            }

            currentValue += yearlyAddition;

            if (request.getInflationRate() > 0) {
                currentValue *= 1 + request.getInflationRate() / 100.0;
            }

            double priceGrowth = currentValue - investedAmount - yearlyAddition;  // 단순 추정
            double dividendRate = annualDividend / currentValue * 100;

            DividendYearlyResultDTO yearResult = new DividendYearlyResultDTO();
            yearResult.setYear(year);
            yearResult.setInvestedAmount(investedAmount);
            yearResult.setAnnualDividend(annualDividend);
            yearResult.setDividendRate(dividendRate);
            yearResult.setPriceGrowth(priceGrowth);
            yearResult.setYearlyAddition(yearlyAddition);
            yearResult.setTotalValue(currentValue);
            yearResult.setAccumulatedDividend(accumulatedDividend);

            results.add(yearResult);
            investedAmount += yearlyAddition; // 실제 투자금 누적
        }

        DividendResponseDTO response = new DividendResponseDTO();
        response.setTotalInvestment(currentValue);
        response.setTotalDividends(accumulatedDividend);
        response.setYearlyResults(results);

        return response;
    }
}
