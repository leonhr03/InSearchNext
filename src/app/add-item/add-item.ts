import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './add-item.html',
  styleUrls: ['./add-item.scss']
})
export class AddItem {
  heading: string = '';
  content: string = '';

  constructor(private router: Router) {}

  addItem() {
    if (!this.heading.trim() || !this.content.trim()) return;

    const stored = localStorage.getItem('items');
    const items = stored ? JSON.parse(stored) : [];
    items.push({ title: this.heading, content: this.content });
    localStorage.setItem('items', JSON.stringify(items));

    // Eingabefelder zurücksetzen
    this.heading = '';
    this.content = '';

    // Zur Startseite navigieren
    this.router.navigateByUrl('/').then(success => {
      console.log('Navigation success?', success);
    });
  }
}
