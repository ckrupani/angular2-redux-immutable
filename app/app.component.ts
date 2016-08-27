import { Component } from 'angular2/core';
import { ContactList } from './contactList.component';

@Component({
    selector: 'my-app',
    template: '<contact-list></contact-list>',
    directives: [ ContactList ]
})

export class AppComponent {}