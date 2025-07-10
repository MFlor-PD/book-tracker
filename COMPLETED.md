# 🧪 AITACA Angular Frontend Challenge

**⏰ Completed in:** 3 hours  
**👤 Candidate:** Maria Florencia Perez Dall Occhio

---

## ✅ Completed

### 📦 Funcionality

- [x] **Add Book** page with reactive form and validation
- [x] **Book List** page with table and status toggle button
- [x] Service using **Angular Signals** to store books in memory
- [x] Routing between `/add` y `/list`
- [x] Navigation bar
- [x] Status filter (`read`, `unread`, `all`)
- [x] Styled with utility classes (plain CSS)

---

### ✅ Tests

- [x] 1 useful test for `BookService` (`addBook`, `toggleStatus`)
- [x] 1 test for form validation in `AddBookComponent`
- [x] 1 initialization test for `BookListComponent`

Test files located in:
- `src/app/services/book.service.spec.ts`
- `src/app/components/add-book/add-book.component.spec.ts`
- `src/app/components/book-list/book-list.component.spec.ts`

---

## 🚀 Branch Link

`https://github.com/aitacaremote/book-tracker/tree/tu-apellido-florencia`  


---

## 📸 Extras

- [x] Used `Standalone Components`
- [x] Implemented filtros con `ngModel`
- [x] Project compiles without errors
- [x] Tests pass with `npm run test`

---

## 🧪 Run the Project 


```bash
npm install
npm start

---
_FINAL THOUGHTS_
## ⚡ Debugging & Learnings 

Testing struggles:

A - I struggled with test discovery until I realized the issue was caused by module resolution and test pattern configuration.

1- I changed the import: Use relative paths in standalone component setups — it's simpler and avoids Jest issues with moduleNameMapper.

* This caused problems:
import { BookService } from 'src/app/services/book.service';

* This worked instead:
import { BookService } from '../../services/book.service';


2- I simplified the test match pattern in jest.config.js:

* Original
 testMatch: [
   '<rootDir>/src/**/__tests__/**/*.(ts|js)',
   '<rootDir>/src/**/?(*.)(spec|test).(ts|js)'
 ]

* New and more direct
 testMatch: [
   '<rootDir>/src/**/*.spec.ts',
   '<rootDir>/src/**/*.test.ts'
 ]

This is cleaner and avoids issues with the ? wildcard.

B- Template Directives in Standalone Components:

When using standalone components in Angular, you need to explicitly import any structural directive like *ngFor or *ngIf. Instead of importing them individually like NgFor, I imported CommonModule into the component’s imports array, which includes all core directives.

imports: [CommonModule, FormsModule]

This enables the use of *ngFor and *ngIf in the component template without additional setup.