package com.example.stockcalc.controller;

import com.example.stockcalc.dto.DividendCalculationRequest;
import com.example.stockcalc.dto.DividendCalculationResult;
import com.example.stockcalc.service.DividendCalculatorService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/dividends")
@CrossOrigin(origins = "http://localhost:3000") // 프론트와 연결
public class DividendCalculatorController {
    private final DividendCalculatorService dividendCalculatorService;

    public DividendCalculatorController(DividendCalculatorService dividendCalculatorService) {
        this.dividendCalculatorService = dividendCalculatorService;
    }

    @PostMapping("/calculate")
    public DividendCalculationResult calculateDividends(@RequestBody DividendCalculationRequest request) {
        return dividendCalculatorService.calculateDividends(request);
    }

}
