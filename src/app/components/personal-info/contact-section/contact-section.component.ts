import { Component, Input, OnInit } from '@angular/core';
// import { PersonalInfo } from 'src/app/model/PersonalInfo';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})

export class ContactSectionComponent implements OnInit {
  personalEmail: string;
  workEmail: string;
  cellPhone: string;
  workPhone: string;



  constructor() { }

  ngOnInit(): void {
    // this.personalEmail = this.person.personalEmail;
    // this.workEmail = this.person.workEmail;
    // this.cellPhone = this.person.cellPhone;
    // this.workPhone = this.person.workPhone;
  }

}
