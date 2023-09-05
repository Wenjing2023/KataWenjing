import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;
import java.util.Arrays;

import static org.junit.Assert.assertEquals;

public class PairsTest {
   private Pairs pairs;
   private ArrayList<Integer> array1;
   private ArrayList<Integer> array2;
   private ArrayList<Integer> array3;
   private ArrayList<Integer> array4;


    @Before
    public void before(){
        pairs = new Pairs();
        array1 = new ArrayList<>(Arrays.asList(2,3,5,7,8));
        array2 = new ArrayList<>(Arrays.asList(2,4,8,8,8,12,14));
        array3 = new ArrayList<>(Arrays.asList(0,1,2,3,4,5,6,7,8,9,10));
        array4 = new ArrayList<>(Arrays.asList(1,2,3,4));
    }
    @Test
    public void canFindPairsInArray1(){
        int result = pairs.findPairs(array1,10);
        assertEquals(2, result);
    }

   @Test
    public void canFind3PairsInArray2(){
        int actual = pairs.findPairs(array2, 16);
        assertEquals(3, actual);
    }

    @Test
    public void canFind5PairsInArray3(){
        int actual = pairs.findPairs(array3, 10);
        assertEquals(5, actual);
    }
}
