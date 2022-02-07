import { HeaderService } from './../../shared/header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: "Início",
      icon: "home",
      routeUrl: ""
    }
  }

  ngOnInit(): void {
  }

}
