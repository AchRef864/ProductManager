package com.products.productManager.api.repository;

import com.products.productManager.api.model.product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface productRepository extends JpaRepository<product, Integer> {
    List<product> findByCategoryCode(int categoryCode);
}
