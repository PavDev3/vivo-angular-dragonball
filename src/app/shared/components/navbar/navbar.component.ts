import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuItem {
  title: string;
  link: string;
}

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  menuItems: MenuItem[] = [
    { title: 'Personajes', link: 'dragonball/characters' },
    { title: 'Planetas', link: 'dragonball/planets' },
  ];
}
