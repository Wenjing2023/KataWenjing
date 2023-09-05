import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;

import static org.junit.Assert.assertEquals;

public class PairsTest {
   private Pairs pairs;
   private ArrayList<Integer> array1;
   private ArrayList<Integer> array2;
   private ArrayList<Integer> array3;


    @Before
    public void before(){
        pairs = new Pairs();
        array1 = new ArrayList<>();
        array1.add(2);
        array1.add(3);
        array1.add(5);
        array1.add(7);
        array1.add(8);
        array2 = new ArrayList<>();
        array3 = new ArrayList<>();
    }
    @Test
    public void canFindPairsInArray1(){
        int result = pairs.findPairs(array1,10);
        assertEquals(2, result);
    }


}
