package com.products.productManager.api.service;

import com.products.productManager.api.model.product;
import com.products.productManager.api.repository.productRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class productService {

    private final productRepository productRepository;

    @Autowired
    public productService(productRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Optional<product> getProduct(int code) {
        return productRepository.findById(code);
    }

    public List<product> getAllProducts() {
        return productRepository.findAll();
    }

    public product createProduct(product newProduct) {
        return productRepository.save(newProduct);
    }

    public product updateProduct(int code, product updatedProduct) {
        Optional<product> existingProduct = productRepository.findById(code);
        if (existingProduct.isPresent()) {
            product p = existingProduct.get();
            p.setLib(updatedProduct.getLib());
            p.setPrix(updatedProduct.getPrix());
            p.setQuantite(updatedProduct.getQuantite());
            p.setCategory(updatedProduct.getCategory());
            return productRepository.save(p);
        }
        return null;
    }

    public List<product> getProductsByCategory(int categoryCode) {
        return productRepository.findByCategoryCode(categoryCode);
    }

    public boolean deleteProduct(int code) {
        if (productRepository.existsById(code)) {
            productRepository.deleteById(code);
            return true;
        }
        return false;
    }
}
