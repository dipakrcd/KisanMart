package com.project.dao;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

import com.project.pojo.Category;
import com.project.pojo.Product;
import com.project.repository.IProductRepository;
import com.project.repository.IUserRepository;
@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE) 
public class TestProductRepository {

	@Autowired
	private IProductRepository productRepo;
	
	@Autowired
	private IUserRepository userRepo;
	
	//test for save new product
	@Test
    public void testSaveNewProduct() {
		 productRepo.save(new Product("Pomegrante","https://www.bigbasket.com/media/uploads/p/l/10000269_31-fresho-pomegranate.jpg",Category.FRUITS,50,120.00,"New In MArket"));
                 
        List<Product> product = productRepo.findByName("Pomegrante");
//        for(Product x:product)
//        assertThat(x.getName()).isEqualTo("Pomegrante");
    }
	
	//test product list empty or not
	@Test
	public void testListProducts() {
	    List<Product> products = (List<Product>)  productRepo.findAll();
	    assertThat(products).size().isGreaterThan(0);
	}
	
	//test find product by name
	@Test
	public void testFindProductByName() {
	    List<Product> product = productRepo.findByName("Apple");    
	    for(Product x:product)
	    assertThat((x.getName()).equals("Apple"));
	}

	
	//test for update product
	@Test
	@Rollback(false)
	public void testUpdateProduct() {
	    List<Product> product = productRepo.findByName("Apple");
	    for(Product x:product) 
	       x.setRate(340);     
	    productRepo.saveAll(product); 
	    List<Product> updatedProduct = productRepo.findByName("Apple");	     
	    for(Product x:updatedProduct)
	    assertThat(x.getRate()==(340));
	}



//test for delete product	
@Test
@Rollback(false)
public void testDeleteProduct() {
    List<Product> product = productRepo.findByName("strawberry");
     
    productRepo.delete((product.get(0)));
     
    List<Product> deletedProduct = productRepo.findByName("strawberry");
     
    assertThat(deletedProduct).isNull();       
     
}
}