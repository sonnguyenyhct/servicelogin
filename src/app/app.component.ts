import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {zzzz
  title = 'serviceandrouter';

  constructor(private router: Router) {
  }
  /*gotoTimeLines(){
    this.router.navigateByUrl('/timelines');
  }*/
  public gotoTimeLines() {
    this.router.navigate(['/timelines'])
  }

}
