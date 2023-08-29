package org.example;

import java.time.LocalDate;


public class Transaction {
    private LocalDate date;
    private int amount;
    private int balanceAfterTransaction;

    public Transaction(LocalDate date, int amount){
        this.date = date;
        this.amount = amount;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public int getBalanceAfterTransaction() {
        return this.balanceAfterTransaction;
    }

    public void setBalanceAfterTransaction(int balanceAfterTransaction) {
        this.balanceAfterTransaction = balanceAfterTransaction;
    }


}
