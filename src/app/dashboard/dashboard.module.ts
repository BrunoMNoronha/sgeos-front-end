import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { PanelMenuModule } from 'primeng/panelmenu';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PanelMenuComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@NgModule({
  declarations: [
    DashboardComponent,
    PanelMenuComponent,
    ToolbarComponent,
    ContentComponent,
    FooterComponent,
    BreadcrumbComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    PanelMenuModule,
    BreadcrumbModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
