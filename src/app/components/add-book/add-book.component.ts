import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookService} from '../../services/book.service';
@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-book.component.html'
})
export class AddBookComponent {
  bookForm: FormGroup;

  constructor(private fb: FormBuilder, private bookService: BookService) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      status: ['unread']
    });
  }

  onSubmit() {
    if (this.bookForm.valid) {
      const newBook = {
        id: Date.now().toString(),
        ...this.bookForm.value
      };
      
      this.bookService.addBook(newBook);
      this.bookForm.reset({status: 'unread'});
    }
  }
}