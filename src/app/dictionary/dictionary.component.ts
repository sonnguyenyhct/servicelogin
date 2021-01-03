import { Component, OnInit } from '@angular/core';
import {DictionaryService, iWord} from '../dictionary.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  word: iWord;
  constructor(private dictionaryService: DictionaryService) { } // Component gửi yêu cầu đến Angular,Angular sẽ khởi tạo instance củaservice và nạp vào cho componentthông qua constructor

  ngOnInit(): void {
  }
  search(word: string){
    const meaning = this.dictionaryService.search(word);
    this.word = {
      key: word,
      meaning: meaning
    };
  }

}
