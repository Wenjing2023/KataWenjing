package org.example;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

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
        transaction.setBalanceAfterTransaction(this.getCurrentBalance() + transaction.getAmount());
        this.transactions.add(transaction);
        this.setCurrentBalance(this.getCurrentBalance() + transaction.getAmount());
    };

    public List<List<String>> arrangeDataForTableFormatting() {
        //add information to arrayList
        List<List<String>> rows = new ArrayList<List<String>>();
        List<String> headers = Arrays.asList("Date", "Amount", "Balance");
        rows.add(headers);
//       rows.add(Arrays.asList())
        for (Transaction transaction : this.getTransactions()) {
            String date = transaction.getDate().toString();
            String amount = Integer.toString(transaction.getAmount());
            String balanceAfter = Integer.toString(transaction.getBalanceAfterTransaction());
            List<String> row = Arrays.asList(date, amount, balanceAfter);
            rows.add(row);
        }
        return rows;
    };

    public void orderTransactionsByDatesBubble(){

        //compare dates of transactions with a sorting algorithm
        int n = this.getTransactions().size();
        LocalDate date = LocalDate.now();
        Transaction temp = new Transaction(date, 0);
        ArrayList<Transaction> arr = this.getTransactions();
        for (int i=0; i<n; i++) {
            for (int j=1; j<(n-i); j++) {
                LocalDate firstIndex = this.getTransactions().get(j-1).getDate();
                LocalDate secondIndex = this.getTransactions().get(j).getDate();
                int comparator = firstIndex.compareTo(secondIndex);
                //comparator > 0 meaning the first date is later
                if (comparator < 0) {
                    temp = arr.get(j - 1);
                    arr.set(j - 1, arr.get(j));
                    arr.set(j, temp);
                }
            }
        }
    }

    public void printStatement() {
        System.out.println("Hello world");
    };


}
