import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  templateUrl: './page-not-found.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundComponent {}

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PageNotFoundComponent }]),
  ],
  declarations: [PageNotFoundComponent],
  exports: [PageNotFoundComponent],
})
export class PageNotFoundComponentModule {}
