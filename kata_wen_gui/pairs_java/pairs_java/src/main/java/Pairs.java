import java.util.ArrayList;

public class Pairs {

    public Pairs (){

    }
    public int findPairs(ArrayList<Integer> arr, int n){
        int counter = 0;
        for (int i = 0; i < arr.size(); i++){
            int el = arr.get(i);
            int indexOfNMinusEl = arr.lastIndexOf(n-el);
            if (arr.contains(n-el) && i != indexOfNMinusEl){
                  arr.set(indexOfNMinusEl, n+1);
                  arr.set(i, n+1);
                counter++;
            }
        }
        return counter;
    }
}
