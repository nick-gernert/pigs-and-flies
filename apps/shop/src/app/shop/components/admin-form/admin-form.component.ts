import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../models/product';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponentModule } from '../../../UI';
import { ProductsFacade } from '../../+state/products.facade';
import { v4 as uuid } from 'uuid';

interface ProductForm {
  image: FormControl<string | null>;
  name: FormControl<string | null>;
  description: FormControl<string | null>;
  price: FormControl<number | null>;
}

@Component({
  selector: 'pf-admin-form',
  templateUrl: './admin-form.component.html',
  styles: [':host { display: block; }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminFormComponent implements OnInit, OnChanges {
  @Input() product!: Product | null | undefined;

  productForm!: FormGroup<ProductForm>;

  constructor(private fb: FormBuilder, private products: ProductsFacade) {}

  ngOnInit(): void {
    this.productForm = this.fb.group<ProductForm>({
      image: this.fb.control('', Validators.required),
      name: this.fb.control('', Validators.required),
      description: this.fb.control(''),
      price: this.fb.control(0, Validators.required),
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product'].currentValue) {
      this.productForm.patchValue(changes['product'].currentValue);
    }
  }

  resetForm(): void {
    this.productForm.reset();
    this.products.selectProduct('');
  }

  saveProduct(e: Event): void {
    e.preventDefault();

    if (!this.productForm.valid) {
      this.productForm.markAllAsTouched();
      return;
    }

    this.products.saveProduct({ ...this.productForm.value } as Product);
  }
}

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ButtonComponentModule],
  declarations: [AdminFormComponent],
  exports: [AdminFormComponent],
})
export class AdminFormComponentModule {}
