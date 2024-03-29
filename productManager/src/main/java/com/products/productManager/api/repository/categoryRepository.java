package com.products.productManager.api.repository;

import com.products.productManager.api.model.category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface categoryRepository extends JpaRepository<category, Integer> {
}
