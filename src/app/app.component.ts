import { Component, OnInit } from '@angular/core';

import { Escola } from './escola';
import { EscolaService } from './escola.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EscolaService]
})
export class AppComponent implements OnInit {
  //title = 'Tour of Heroes';
  escolas: Escola[];
  //selectedHero: Hero;

  constructor(private escolaService: EscolaService) { }

  getEscolas(): void {
    this.escolaService.getEscolas().then(
      escolas => this.escolas = escolas
    );
  }

  ngOnInit(): void {
    this.getEscolas();
  }

  //onSelect(hero: Hero): void {
  //  this.selectedHero = hero;
  //}
}
