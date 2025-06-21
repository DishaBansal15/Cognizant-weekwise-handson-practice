package financialForcasting;

import java.util.*;

public class PredictValue {

    static float predict(int PresentValue,float growthRate,int time){
        if(time<=0)
        return PresentValue;
        return (1+growthRate/100)*predict(PresentValue, growthRate, time-1);
    }
    public static void main(String[] args) {
        Scanner in=new Scanner(System.in);
        System.out.println("Input the Present Value,Growth Rate and Time Period");
        System.out.println("Present Value");
        int PresentValue=in.nextInt();
        System.out.println("Enter Growth Rate:");
        float growthRate=in.nextFloat();
        System.out.println("Enter time period");
        int time=in.nextInt();
        float futureRate=predict(PresentValue,growthRate,time);
        System.out.println("Future Value will be:"+futureRate);
        in.close();
    }
}
