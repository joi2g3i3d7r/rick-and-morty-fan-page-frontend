import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { HeaderComponent } from './shared/components/header/header.component';
import { SearchComponent } from './shared/components/search/search.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SearchComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
