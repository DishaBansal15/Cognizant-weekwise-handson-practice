package factoryMethodPatternExample;

public class ExcelDocumentFactory {
    public Document createDocument() {
        return new ExcelDocument();
    }
}
