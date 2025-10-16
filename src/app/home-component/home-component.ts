import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { ListView } from '../list-view/list-view';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [CommonModule, ListView, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './home-component.html',
  styleUrls: ['./home-component.scss']
})
export class HomeComponent {
  items: { title: string; content: string }[] = [];
  searchText: string = '';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    // Prüfen ob Browser (nicht Server)
    if (isPlatformBrowser(this.platformId)) {
      const storedItems = localStorage.getItem('items');
      if (storedItems) {
        this.items = JSON.parse(storedItems);
      }
    }
  }

  filteredItems() {
    if (!this.searchText) return this.items;
    const lower = this.searchText.toLowerCase();
    return this.items.filter(
      item =>
        item.title.toLowerCase().includes(lower) ||
        item.content.toLowerCase().includes(lower)
    );
  }
}
