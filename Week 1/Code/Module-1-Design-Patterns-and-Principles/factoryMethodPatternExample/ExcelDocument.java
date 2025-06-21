package factoryMethodPatternExample;

public class ExcelDocument implements Document {
    @Override
    public void createDocument() {
        System.out.println("Creating an Excel Document");
    }
    
    @Override
    public void open() {
        System.out.println("Opening an Excel Document");
    }
}

