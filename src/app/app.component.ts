import { Component  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './util/components/navbar/navbar.component';
import { SidebarComponent } from './util/components/sidebar/sidebar.component';
import { DashboardNotasFiscaisComponent } from './pages/dashboard/dashboard-notas-fiscais/dashboard-notas-fiscais.component';
declare var bootstrap: any;

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NavbarComponent, SidebarComponent, DashboardNotasFiscaisComponent]
})
export class AppComponent {
  title = 'admin-dashboard';
  isSidebarClosed = false;

  handleSidebarToggle(isClosed: boolean) {
    this.isSidebarClosed = isClosed;
  }
}