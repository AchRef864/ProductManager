package com.products.productManager.api.model;

import jakarta.persistence.*;

@Entity
@Table(name = "product")
public class product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int code;

    private String lib;
    private double prix;
    private int quantite;

    @ManyToOne
    @JoinColumn(name = "fkcategorie")
    private category category;

    public product() {
    }

    public product(String lib, double prix, int quantite, category category) {
        this.lib = lib;
        this.prix = prix;
        this.quantite = quantite;
        this.category = category;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getLib() {
        return lib;
    }

    public void setLib(String lib) {
        this.lib = lib;
    }

    public double getPrix() {
        return prix;
    }

    public void setPrix(double prix) {
        this.prix = prix;
    }

    public int getQuantite() {
        return quantite;
    }

    public void setQuantite(int quantite) {
        this.quantite = quantite;
    }

    public category getCategory() {
        return category;
    }

    public void setCategory(category category) {
        this.category = category;
    }
}
