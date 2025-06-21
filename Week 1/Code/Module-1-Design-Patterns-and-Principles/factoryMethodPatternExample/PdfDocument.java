package factoryMethodPatternExample;

public class PdfDocument implements Document {
    @Override
    public void createDocument() {
        System.out.println("Creating a PDF Document");
    }
    
    @Override
    public void open() {
        System.out.println("Opening a PDF Document");
    }
}
