import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-section',
  templateUrl: './name-section.component.html',
  styleUrls: ['./name-section.component.css']
})
export class NameSectionComponent implements OnInit {

  @Input()name;
  @Input()preferredName;
  @Input()avatar;
  @Input()birthday;
  @Input()age;
  @Input()gender;
  @Input()SSN;

  constructor() { }

  ngOnInit(): void {
  }

}
