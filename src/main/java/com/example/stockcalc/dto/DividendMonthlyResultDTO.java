package com.example.stockcalc.dto;

public class DividendMonthlyResultDTO {
    private int year;
    private int month;
    private double dividend;
    private double last12MonthsDividend;
    private double monthlyAverage;


    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public int getMonth() {
        return month;
    }

    public void setMonth(int month) {
        this.month = month;
    }

    public double getDividend() {
        return dividend;
    }

    public void setDividend(double dividend) {
        this.dividend = dividend;
    }

    public double getLast12MonthsDividend() {
        return last12MonthsDividend;
    }

    public void setLast12MonthsDividend(double last12MonthsDividend) {
        this.last12MonthsDividend = last12MonthsDividend;
    }

    public double getMonthlyAverage() {
        return monthlyAverage;
    }

    public void setMonthlyAverage(double monthlyAverage) {
        this.monthlyAverage = monthlyAverage;
    }
}
