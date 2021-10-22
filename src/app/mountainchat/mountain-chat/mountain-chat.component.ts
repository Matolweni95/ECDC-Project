import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-mountain-chat',
  templateUrl: './mountain-chat.component.html',
  styleUrls: ['./mountain-chat.component.css']
})
export class MountainChatComponent implements OnInit {

  url: string = "https://angular.io/api/router/RouterLink";
  urlSafe!: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
