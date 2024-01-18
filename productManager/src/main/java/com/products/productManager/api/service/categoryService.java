package com.products.productManager.api.service;

import com.products.productManager.api.model.category;
import com.products.productManager.api.repository.categoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class categoryService {

    private final categoryRepository categoryRepository;

    @Autowired
    public categoryService(categoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public Optional<category> getCategory(Integer code) {
        return categoryRepository.findById(code);
    }

    public List<category> getAllCategories() {
        return categoryRepository.findAll();
    }

    public category createCategory(category newCategory) {
        return categoryRepository.save(newCategory);
    }

    public category updateCategory(Integer code, category updatedCategory) {
        Optional<category> existingCategory = categoryRepository.findById(code);
        if (existingCategory.isPresent()) {
            category c = existingCategory.get();
            c.setLib(updatedCategory.getLib());
            return categoryRepository.save(c);
        }
        return null;
    }

    public boolean deleteCategory(Integer code) {
        if (categoryRepository.existsById(code)) {
            categoryRepository.deleteById(code);
            return true;
        }
        return false;
    }
}
