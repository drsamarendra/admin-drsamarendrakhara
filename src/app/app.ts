import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { Sidebar } from './shared/sidebar/sidebar';
import { Header } from './shared/header/header';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Sidebar,
    MatSidenavModule,
    MatSidenav
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
 
})
export class App {
  protected readonly title = signal('admin-drsamarendrakhara');

  isSidebarOpen = true;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
