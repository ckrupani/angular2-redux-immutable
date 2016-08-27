
// Contact List Component

import { Component } from 'angular2/core';
import { ContactStore } from './contact.store';
import Contact from './contact.component';
import { addContact } from './actions';

@Component({
    selector: 'contact-list',
    templateUrl: 'app/contact-list.html',
    styleUrls: ['app/contact-list.css'],
    directives: [ Contact ],
    providers: [ ContactStore ]
})

export class ContactList {
    contactID: number;

    constructor(private store: ContactStore) {
        this.contactID = 0;
    }

    addContact(contact) {
        this.store.dispatch(addContact(contact, this.contactID));
        this.contactID += 1;
    }
}