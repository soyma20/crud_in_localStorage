import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router:Router) { }

  deleteCars() {
    localStorage.clear()
    if (this.router.url !== '/cars'){
      this.router.navigate(['/cars'])
    }
  }
}
