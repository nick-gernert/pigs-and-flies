import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  imports: [CommonModule],
  declarations: [CartComponent],
  exports: [CartComponent],
})
export class CartComponentModule {}
