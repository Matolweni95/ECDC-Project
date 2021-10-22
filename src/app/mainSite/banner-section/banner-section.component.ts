import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-banner-section',
  templateUrl: './banner-section.component.html',
  styleUrls: ['./banner-section.component.css']
})
export class BannerSectionComponent implements OnInit {
  @Input() text: string | undefined;
  @Input() text2: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
