import { Component, OnInit } from '@angular/core';
import { faInbox, faPhoneAlt, faMapMarkedAlt, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faInbox = faInbox;
  faPhoneAlt = faPhoneAlt;
  faMapMarkedAlt = faMapMarkedAlt;
  faLock = faLock;
  constructor() { }

  ngOnInit(): void {
  }

}
