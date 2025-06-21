package factoryMethodPatternExample;

public class Test {
    public static void main(String args[]){
        ExcelDocument excel=new ExcelDocument();
        excel.createDocument();
        PdfDocument pdf=new PdfDocument();
        pdf.createDocument();
        WordDocument word=new WordDocument();
        word.createDocument();
    }
}
