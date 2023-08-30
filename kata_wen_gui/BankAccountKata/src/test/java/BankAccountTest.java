import org.example.BankAccount;
import org.example.Transaction;
import org.junit.Before;
import org.junit.Test;

import java.time.LocalDate;

import static org.junit.Assert.assertEquals;

public class BankAccountTest {
    BankAccount bankAccount;
    Transaction transaction1;
    Transaction transaction2;
    Transaction transaction3;

    @Before
    public void before(){
        LocalDate date1 = LocalDate.of(2013, 1, 10);
        LocalDate date2 = LocalDate.of(2013, 1, 13);
        LocalDate  date3 = LocalDate.of(2013,1,14);
        transaction1 = new Transaction(date1, 1000);
        transaction2 = new Transaction(date2, 2000);
        transaction3 = new Transaction(date3, -500);
        bankAccount = new BankAccount("Wenjing");

    }
    @Test
    public void canDeposit (){
        bankAccount.depositOrWithdraw(1000);
        int actual = bankAccount.getCurrentBalance();
        assertEquals(1000, actual);
    }

    @Test
    public void canWithdraw () {
        bankAccount.depositOrWithdraw(1000);
        bankAccount.depositOrWithdraw(-500);
        int actual = bankAccount.getCurrentBalance();
        assertEquals(500, actual);
        assertEquals(2, bankAccount.getTransactions().size());
        assertEquals(2023, bankAccount.getTransactions().get(0).getDate().getYear());
    }

    @Test
    public void canManuallyAddTransactions () {
        bankAccount.manuallyAddTransaction(transaction1);
        assertEquals(1000, bankAccount.getTransactions().get(0).getBalanceAfterTransaction());
        bankAccount.manuallyAddTransaction(transaction2);
        bankAccount.manuallyAddTransaction(transaction3);
        assertEquals(2500, bankAccount.getCurrentBalance());
        assertEquals(13, bankAccount.getTransactions().get(1).getDate().getDayOfMonth());
    }

    @Test
    public void canSortTransactionsByDate(){
        bankAccount.manuallyAddTransaction(transaction1);
        bankAccount.manuallyAddTransaction(transaction2);
        bankAccount.manuallyAddTransaction(transaction3);
        assertEquals(10, bankAccount.getTransactions().get(0).getDate().getDayOfMonth());
        bankAccount.orderTransactionsByDatesBubble();
        assertEquals(14, bankAccount.getTransactions().get(0).getDate().getDayOfMonth());
    }

    @Test
    public void canArrangeTransactionDataInListsOfStrings() {
        bankAccount.manuallyAddTransaction(transaction1);
        bankAccount.manuallyAddTransaction(transaction2);
        bankAccount.manuallyAddTransaction(transaction3);
        bankAccount.orderTransactionsByDatesBubble();
        assertEquals(2500, bankAccount.getCurrentBalance());
        System.out.println(bankAccount.arrangeDataForTableFormatting());
    }

    
}
