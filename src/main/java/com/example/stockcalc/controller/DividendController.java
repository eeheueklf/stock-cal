package com.example.stockcalc.controller;

import com.example.stockcalc.dto.DividendRequest;
import com.example.stockcalc.dto.DividendResult;
import com.example.stockcalc.service.DividendCalculator;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DividendController {

    @PostMapping(value = "/api/dividend")
    public ResponseEntity<DividendResult> calculate(@RequestBody DividendRequest request) {
        DividendResult result = DividendCalculator.calculateDividend(request);
        return ResponseEntity.ok(result);
    }
}
