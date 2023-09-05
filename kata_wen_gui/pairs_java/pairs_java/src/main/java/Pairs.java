import java.util.ArrayList;

public class Pairs {

    public Pairs (){

    }
    public int findPairs(ArrayList<Integer> arr, int n){
        int counter = 0;
//        for (Integer el: arr ){
//            if (arr.contains(n-el) ){
//                int indexOfEl = arr.indexOf(el);
//                int indexOfNMinusEl= arr.indexOf(n-el);
//                arr.remove(indexOfNMinusEl);
//                arr.remove(indexOfEl);
//                arr.add(n+1);
//                arr.add(n+1);
//                counter++;
//            }
//        }
        for (int i = 0; i < arr.size(); i++){
            int el = arr.get(i);
            if (arr.contains(n-el)){
                int indexOfNMinusEl = arr.indexOf(n-el);
                arr.remove(indexOfNMinusEl);
                arr.remove(i);
                arr.add(n+1);
                arr.add(n+1);
                counter++;
                System.out.println(arr);
            }
        }

        return counter;
    }

}
