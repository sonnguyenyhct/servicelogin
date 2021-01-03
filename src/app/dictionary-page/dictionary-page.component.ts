import { Component, OnInit } from '@angular/core';
import {DictionaryService, iWord} from '../dictionary.service';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  listWord: iWord[] = [];
  constructor(private dictionaryService: DictionaryService,
              public authService: AuthService
              ) { }

  ngOnInit(): void {
    this.listWord = this.dictionaryService.getAll()
  }

}
