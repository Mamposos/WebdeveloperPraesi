import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  minIndex: number = 1;
  index: number = this.minIndex;
  maxIndex: number = 9;

  letzte() {
    if (this.index > this.minIndex) {
      this.index--;
    }
    switch (this.index) {
      case 1: {
        this.router.navigate(["/one"]);
        break;
      }
      case 2: {
        this.router.navigate(["/two"]);
        break;
      }
      case 3: {
        this.router.navigate(["/three"]);
        break;
      }
      case 4: {
        this.router.navigate(["/four"]);
        break;
      }
      case 5: {
        this.router.navigate(["/five"]);
        break;
      }
      case 6: {
        this.router.navigate(["/six"]);
        break;
      }
      case 7: {
        this.router.navigate(["/seven"]);
        break;
      }
      case 8: {
        this.router.navigate(["/eight"]);
        break;
      }
      case 9: {
        this.router.navigate(["/nine"]);
        break;
      }
    }
  }

  naechste() {
    if (this.index < this.maxIndex) {
      this.index++;
    }
    switch (this.index) {
      case 1: {
        this.router.navigate(["/one"]);
        break;
      }
      case 2: {
        this.router.navigate(["/two"]);
        break;
      }
      case 3: {
        this.router.navigate(["/three"]);
        break;
      }
      case 4: {
        this.router.navigate(["/four"]);
        break;
      }
      case 5: {
        this.router.navigate(["/five"]);
        break;
      }
      case 6: {
        this.router.navigate(["/six"]);
        break;
      }
      case 7: {
        this.router.navigate(["/seven"]);
        break;
      }
      case 8: {
        this.router.navigate(["/eight"]);
        break;
      }
      case 9: {
        this.router.navigate(["/nine"]);
        break;
      }
    }
  }

}
