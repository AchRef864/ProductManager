package com.products.productManager.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.products.productManager.api.service.productService;
import com.products.productManager.api.model.product;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class productController {

    private productService productService;

    @Autowired
    public productController(productService productService) {
        this.productService = productService;
    }

    @GetMapping("/products/{code}")
    public ResponseEntity<product> getProduct(@PathVariable int code) {
        return productService.getProduct(code)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/products")
    public List<product> getAllProducts() {
        return productService.getAllProducts();
    }

    @PostMapping("/products")
    public ResponseEntity<product> createProduct(@RequestBody product newProduct) {
        product createdProduct = productService.createProduct(newProduct);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdProduct);
    }

    @PutMapping("/products/{code}")
    public ResponseEntity<product> updateProduct(@PathVariable int code, @RequestBody product updatedProduct) {
        product result = productService.updateProduct(code, updatedProduct);
        if (result != null) {
            return ResponseEntity.ok(result);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/products/category/{categoryCode}")
    public List<product> getProductsByCategory(@PathVariable int categoryCode) {
        List<product> productsByCategory = productService.getProductsByCategory(categoryCode);
        return productsByCategory;
    }

    @DeleteMapping("/products/{code}")
    public ResponseEntity<Void> deleteProduct(@PathVariable int code) {
        if (productService.deleteProduct(code)) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
