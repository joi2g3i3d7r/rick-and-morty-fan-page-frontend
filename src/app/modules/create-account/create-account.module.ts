import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateAccountRoutingModule } from './create-account-routing.module';
import { CreateAccountComponent } from './create-account.component';

@NgModule({
  declarations: [CreateAccountComponent],
  imports: [CommonModule, CreateAccountRoutingModule, ReactiveFormsModule],
})
export class CreateAccountModule {}
