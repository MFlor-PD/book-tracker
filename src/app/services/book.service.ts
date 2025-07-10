import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { Book } from '../shared/models/book.model';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  private booksSignal = signal<Book[]>([]);

  get books() {
    return this.booksSignal.asReadonly();
  }

  addBook(book: Book) {
    this.booksSignal.update(prev => [...prev, book]);
  }

  toggleStatus(id: string) {
    this.booksSignal.update(prev => 
      
      prev.map(book => 
        book.id === id
      ? { ...book, status: book.status === 'read' ? 'unread' : 'read' }
      : book
      )
    );
  }
} 