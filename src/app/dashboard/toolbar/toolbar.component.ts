import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/auth/Auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  items: MenuItem[];

  constructor(private authService: AuthService, private router: Router) {
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
        command: () => {
          this.authService.logout();
          this.router.navigate(['login']);
        },
      },
    ];
  }
}
