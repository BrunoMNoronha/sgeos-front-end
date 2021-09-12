import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
})
export class BreadcrumbComponent implements OnInit {
  items: MenuItem[];
  home: MenuItem;

  constructor() {
    this.items = [];
    this.home = {};
  }

  ngOnInit() {
    this.items = [
      { label: 'Computer' },
      { label: 'Notebook' },
      { label: 'Accessories' },
      { label: 'Backpacks' },
      { label: 'Item' },
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
