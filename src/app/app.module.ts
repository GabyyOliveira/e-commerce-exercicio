import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { DataBindingsComponent } from './componentes/data-bindings/data-bindings.component';
import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { PipesComponent } from './componentes/pipes/pipes.component';
import { FormsModule} from '@angular/forms';
import { CarrinhoComponent } from './componentes/carrinho/carrinho.component';


registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CadastroComponent,
    DataBindingsComponent,
    PipesComponent,
    CarrinhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue:'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
