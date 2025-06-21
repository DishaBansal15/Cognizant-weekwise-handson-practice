package factoryMethodPatternExample;

public class WordDocumentFactory {
    public Document createDocument() {
        return new WordDocument();
    }
}
