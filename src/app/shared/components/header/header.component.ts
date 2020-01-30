import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, NavigationEnd, Route, Router} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showBackButton = false;
  showSettings = true;

  constructor(private router: Router, private _location: Location) {}

  ngOnInit() {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url === '/') {
          this.showBackButton = false;
        } else {
          this.showBackButton = true;
        }

        if ( val.url === 'settings') {
          this.showSettings = false;
        }

      }
    });
  }

  goBack() {
    this._location.back();
  }

  goToSettings() {
    this.router.navigate(['settings']);
  }

}
