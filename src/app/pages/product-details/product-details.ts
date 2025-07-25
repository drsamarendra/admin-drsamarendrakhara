import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    MatCardModule ,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss'
})
export class ProductDetails {
productForm!: FormGroup;

  // Example product (in reality, you’ll fetch by ID)
  product = {
    title: "আমের জানা ও অজানা",
    author: "Dr. Samarendra Nath Khara",
    price: 250,
    listPageDetails: {
      imageUrl: "public/books/book1/c1.webp",
      description: "চোখের বালি বিশ্বকবি..."
    },
    productPageDeatils: {
      description: "চোখের বালি (Chokher Bali)..."
    }
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.productForm = this.fb.group({
  title: [this.product.title],
  author: [this.product.author],
  price: [this.product.price],
  listImageUrl: [this.product.listPageDetails?.imageUrl],
  listDescription: [this.product.listPageDetails?.description],
  productDescription: [this.product.productPageDeatils?.description],
});
  }

  onSubmit() {
    console.log(this.productForm.value);
    // Send updated product to backend
  }
}
