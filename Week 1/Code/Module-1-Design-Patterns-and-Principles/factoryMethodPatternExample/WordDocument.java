package factoryMethodPatternExample;

public class WordDocument implements Document {
    @Override
    public void createDocument() {
        System.out.println("Creating a Word Document");
    }
    
    @Override
    public void open() {
        System.out.println("Opening a Word Document");
    }
}
