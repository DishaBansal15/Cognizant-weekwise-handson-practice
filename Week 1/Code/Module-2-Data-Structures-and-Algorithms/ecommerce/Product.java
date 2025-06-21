package ecommerce;
public class Product {
  int ProductId;
  String ProductName,Category;
    Product(int ProductId,String ProductName,String Category ){
        this.ProductId=ProductId;
        this.ProductName=ProductName;
        this.Category=Category;
    }

    public String toString(){
      return ProductId+"-"+ProductName+"("+Category+")";
    }
}