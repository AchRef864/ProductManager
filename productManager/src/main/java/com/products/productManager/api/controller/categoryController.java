package com.products.productManager.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.products.productManager.api.service.categoryService;
import com.products.productManager.api.model.category;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class categoryController {

    private categoryService cS;

    @Autowired
    public categoryController(categoryService cS) {
        this.cS = cS;
    }

    @GetMapping("/categories/{code}")
    public ResponseEntity<category> getCategory(@PathVariable Integer code) {
        return cS.getCategory(code)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/categories")
    public List<category> getAllCategories() {
        return cS.getAllCategories();
    }

    @PostMapping("/categories")
    public ResponseEntity<category> createCategory(@RequestBody category newCategory) {
        category createdCategory = cS.createCategory(newCategory);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdCategory);
    }

    @PutMapping("/categories/{code}")
    public ResponseEntity<category> updateCategory(@PathVariable Integer code, @RequestBody category updatedCategory) {
        category result = cS.updateCategory(code, updatedCategory);
        if (result != null) {
            return ResponseEntity.ok(result);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/categories/{code}")
    public ResponseEntity<Void> deleteCategory(@PathVariable Integer code) {
        if (cS.deleteCategory(code)) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}