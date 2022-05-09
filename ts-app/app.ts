import { Product } from "./Product";
import { ProductService } from "./ProductService";

let _productService = new ProductService();
let result;

result = _productService.getById(2);

let p = new Product();
p.name = "Iphone 6";
p.price = 1000000;
p.category = "Telefon";

_productService.saveProduct(p);

result = _productService.getProducts();
console.log(result);

_productService.deleteProduct(p);
result = _productService.getProducts();
console.log(result);
