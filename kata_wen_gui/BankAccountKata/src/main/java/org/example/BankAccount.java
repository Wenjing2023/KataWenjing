package org.example;

import java.time.LocalDate;
import java.util.ArrayList;

public class BankAccount implements BankAccountController {
    private String ownerName;
    private int currentBalance;

    private ArrayList<Transaction> transactions;

    public BankAccount(String ownerName){
        this.ownerName = ownerName;
        this.currentBalance = 0;
        this.transactions = new ArrayList<Transaction>();

    }

    public String getOwnerName() {
        return ownerName;
    }

    public void setOwnerName(String ownerName) {
        this.ownerName = ownerName;
    }

    public int getCurrentBalance() {
        return currentBalance;
    }

    public void setCurrentBalance(int currentBalance) {
        this.currentBalance = currentBalance;
    }

    public ArrayList<Transaction> getTransactions() {
        return transactions;
    }

    public void setTransactions(ArrayList<Transaction> transactions) {
        this.transactions = transactions;
    }

    public void depositOrWithdraw(int amount) {
      if (isDeposit(amount)){
          this.deposit(amount);
      }else{
          this.withdraw(amount);
      }
    }

    public boolean isDeposit(int amount) {
        return amount >= 0;
    }

    public Transaction createTransaction(int amount) {
        LocalDate date = LocalDate.now();
        return new Transaction(date, amount);
    }

    public void deposit(int amount) {
        Transaction transaction = this.createTransaction(amount);
        this.setCurrentBalance(this.getCurrentBalance() + amount);
        transaction.setBalanceAfterTransaction(this.getCurrentBalance());
        this.transactions.add(transaction);
    };

    public void withdraw(int amount) {
        Transaction transaction = this.createTransaction(amount);
        this.setCurrentBalance(this.getCurrentBalance() + amount);
        transaction.setBalanceAfterTransaction(this.getCurrentBalance());
        this.transactions.add(transaction);

    };

    public void manuallyAddTransaction(Transaction transaction) {
        this.transactions.add(transaction);
        this.setCurrentBalance(this.getCurrentBalance() + transaction.getAmount());
    };

    public void printStatement() {

    };
}
