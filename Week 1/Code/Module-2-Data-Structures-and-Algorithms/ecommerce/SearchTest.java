package ecommerce;

public class SearchTest {
     public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Shampoo", "Personal Care"),
            new Product(3, "Book", "Education"),
            new Product(4, "Phone", "Electronics"),
            new Product(5, "Shoes", "Footwear")
        };

        Product found1 = LinearSearch.linearSearch(products, "Book");
        System.out.println("Linear Search Result: " + (found1 != null ? found1 : "Not Found"));

        BinarySearch.sortProductsByName(products);
        Product found2 = BinarySearch.binarySearch(products, "Book");
        System.out.println("Binary Search Result: " + (found2 != null ? found2 : "Not Found"));
    }
}
