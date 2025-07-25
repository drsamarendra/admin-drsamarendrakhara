import { Component, OnInit } from '@angular/core';
import { GetApiDataService } from '../../services/get-api-data.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
  ],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products implements OnInit {
  public productList: any = [];
  constructor(private apiService: GetApiDataService, private router: Router) {

  }
  ngOnInit(): void {
    this.apiService.getApiData("json/productDetails.json").subscribe(response => {
      this.productList = response.data;
    })
  }

  viewDetails(id:any) {
    this.router.navigateByUrl("product-details")
  }
}
