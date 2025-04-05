package com.example.stockcalc.controller;

import com.example.stockcalc.dto.DividendRequestDTO;
import com.example.stockcalc.dto.DividendResponseDTO;
import com.example.stockcalc.service.DividendService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DividendController {

    @Autowired
    private DividendService calculationService;

    public DividendController(DividendService calculationService) {
        this.calculationService = calculationService;
    }

    @PostMapping(value = "/api/dividend")
    public ResponseEntity<DividendResponseDTO> calculate(@RequestBody DividendRequestDTO request) {
        int years = 10;

        DividendResponseDTO response = calculationService.calculateDividend(request,years);
        return ResponseEntity.ok(response);
    }
}
