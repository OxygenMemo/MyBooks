import { Component, OnInit } from '@angular/core';
import { BooksServiceService } from '../books-service.service';
import { Book } from '../Books';

@Component({
  selector: 'app-listbook',
  templateUrl: './listbook.component.html',
  styleUrls: ['./listbook.component.css']
})
export class ListbookComponent implements OnInit {
  BOOKS: Book[];
  constructor(private bookservice : BooksServiceService) { }

  ngOnInit() {
    this.getBooks();
  }
  getBooks() : void {
    this.bookservice.getBooks()
      .subscribe(BOOKS => this.BOOKS = BOOKS);
  }
}
