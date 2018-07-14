import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CardModule } from './card/card/card.module';
import { CardsService } from './services/cardsapp.service';
import { NavbarComponent } from './navbar/navbar.component';
import { APP_ROUTES } from './app.routing';
import { LnameValidatorDirective } from './card/card-form-component/lname-validator.directive';
import { UsersModule } from './users/users.module';
import { userService } from 'src/app/users/user.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LnameValidatorDirective,
        
  ],
  imports: [
    BrowserModule,
    CardModule,
    FormsModule,
    UsersModule,
    APP_ROUTES
  ],
  providers: [CardsService,userService],
  bootstrap: [AppComponent]
})
export class AppModule { }
