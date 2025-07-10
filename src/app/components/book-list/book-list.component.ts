import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-list.component.html'
})
export class BookListComponent {

  books = this.bookService.books;
  statusFilter: 'all' | 'read' | 'unread' = 'all';

  constructor(private bookService: BookService) {}

  toggleStatus(id: string) {
    this.bookService.toggleStatus(id);
  }
  
  filteredBooks() {
    const list = this.books();
    if (this.statusFilter === 'all') return list;
    return list.filter(book => book.status === this.statusFilter);
  }
}
