import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToolbarModule } from 'primeng/toolbar';
import { PanelMenuModule } from 'primeng/panelmenu';

import { SharedRoutingModule } from './shared-routing.module';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

@NgModule({
  declarations: [TopbarComponent, SidebarComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    BreadcrumbModule,
    SplitButtonModule,
    ToolbarModule,
    PanelMenuModule,
    ScrollPanelModule,
  ],
  exports: [TopbarComponent, SidebarComponent],
})
export class SharedModule {}
