import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fundacion';
  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('es');
  }
  cambiarIdioma(idioma:string){
    if(idioma==='Ingles'){

      this.translateService.use('es');
    }else{
      
      this.translateService.use('en');

    }
  }


}
