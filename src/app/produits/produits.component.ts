import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  
})
export class ProduitsComponent implements OnInit {
  produits : string[]; //un tableau de chînes de caractères

  constructor() {
    this.produits = ["PC Asus", "Imprimante Epson", "Tablette Samsung"];
    }
    ngOnInit(): void {
      // Initialization logic goes here
    }

}
