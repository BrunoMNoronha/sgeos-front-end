import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { PanelMenuModule } from 'primeng/panelmenu';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ContentComponent } from './content/content.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DashboardComponent, ContentComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ButtonModule,
    SplitButtonModule,
    PanelMenuModule,
    SharedModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
