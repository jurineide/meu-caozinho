import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; // Ajuste o caminho, se necessário

// Definindo as rotas


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent // Certifique-se de que HomeComponent está declarado aqui
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
