import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  items: MenuItem[];

  constructor() {
    this.items = [];
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Preferências',
        icon: 'pi pi-cog',
        url: '/perfil',
      },
      {
        label: 'Sair',
        icon: 'pi pi-sign-out',
        routerLink: '/logout',
      },
    ];
  }
}
