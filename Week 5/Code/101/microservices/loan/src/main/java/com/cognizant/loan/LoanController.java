package com.cognizant.loan;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/loans")
public class LoanController {

    @GetMapping("/{number}")
    public Loan getLoanDetails(@PathVariable String number) {
        return new Loan(number, "car", 400000, 3258, 18);
    }

    static class Loan {
        private String number;
        private String type;
        private int loann;
        private int emi;
        private int tenure;

        public Loan(String number, String type, int loann, int emi, int tenure) {
            this.number = number;
            this.type = type;
            this.loann = loann;
            this.emi = emi;
            this.tenure = tenure;
        }

        // Getters
        public String getNumber() { return number; }
        public String getType() { return type; }
        public int getLoann() { return loann; }
        public int getEmi() { return emi; }
        public int getTenure() { return tenure; }
    }
}
