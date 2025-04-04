package com.example.stockcalc.service;

import com.example.stockcalc.dto.DividendRequestDTO;
import com.example.stockcalc.dto.DividendResponseDTO;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DividendService {

    public DividendResponseDTO calculateDividend(DividendRequestDTO request, int years) {
        double totalInvestment = request.getInitialInvestment();
        double totalDividends = 0;
        double currentInvestment = totalInvestment;
        double currentDividend;

        List<Double> investmentGrowth = new ArrayList<>();

        for (int year = 1; year <= years; year++) {
            currentDividend = currentInvestment * request.getDividendYield() / 100;
            totalDividends += currentDividend;

            // 배당재투자 여부 체크
            if (request.isReinvest()) {
                currentInvestment += currentDividend;
            }

            // 월 적립식 투자금 및 증액 처리
            if (request.getMonthlyIncrease() > 0) {
                currentInvestment += request.getMonthlyInvestment() * 12 + request.getMonthlyIncrease() * 12;
            } else {
                currentInvestment += request.getMonthlyInvestment() * 12;
            }

            // 물가상승률 적용 (선택적 적용)
            if (request.getInflationRate() > 0) {
                currentInvestment *= (1 + (double) request.getInflationRate() / 100);  // 물가상승률을 반영하여 매년 투자금 증가
            }

            investmentGrowth.add(currentInvestment);
        }
        DividendResponseDTO response = new DividendResponseDTO();
        response.setTotalInvestment(currentInvestment);
        response.setTotalDividends(totalDividends);
        response.setInvestmentGrowth(investmentGrowth);

        return response;
    }

}
