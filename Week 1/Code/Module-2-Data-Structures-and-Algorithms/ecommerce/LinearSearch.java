package ecommerce;

public class LinearSearch {
    public static Product linearSearch(Product[] products, String name) {
        for (Product p : products) {
            if (p.ProductName.equalsIgnoreCase(name)) {
                return p;
            }
        }
        return null;
    }
}
