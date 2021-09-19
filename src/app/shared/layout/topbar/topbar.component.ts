import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/auth/Auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent implements OnInit {
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
