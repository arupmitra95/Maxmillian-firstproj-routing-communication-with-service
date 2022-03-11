import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  loadfeature: string = "recipe";

  constructor(){
    // console.log("constructor loadfeature: ",this.loadfeature );
  }

  onNavigate(feature: string){
    this.loadfeature = feature;
    // console.log("Loadfeature:", this.loadfeature);
  }

}
