import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Routes, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  input = {
    'width': '360px',
    'background': '#fff',
    'box-shadow': '0 6px 10px 0 rgba(0, 0, 0, .1)',
    'border': '0',
    'outline': '0',
    'padding': '22px 18px'
  }

  person = 'Anet';
  contacts = [{"first_name":"Tatum","last_name":"Vernon","email":"tvernon0@lycos.com","subject":"Female","content":"Youopia"},
  {"first_name":"Anet","last_name":"Bellis","email":"abellis1@cnn.com","subject":"Female","content":"Oloo"},
  {"first_name":"Pippa","last_name":"Goymer","email":"pgoymer2@ihg.com","subject":"Female","content":"Browsecat"},
  {"first_name":"Addison","last_name":"Lawther","email":"alawther3@walmart.com","subject":"Male","content":"Yoveo"},
  {"first_name":"Anya","last_name":"Franzman","email":"afranzman4@bravesites.com","subject":"Female","content":"Twitterbeat"}];

  //defining fields

  first_name = '';
  last_name = '';
  email = '';
  subject = '';
  content = '';

  addContact(value:any) {
    this.contacts.unshift({
      first_name: value.first_name,
      last_name: value.last_name,
      email: value.email,
      subject: value.subject,
      content: value.content
    });

    this.first_name = '';
    this.last_name = '';
    this.email = '';
    this.subject = '';
    this.content = '';
  }
  constructor() { }

  ngOnInit(): void {
  }

}
