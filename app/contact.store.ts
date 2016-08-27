
// Contact Store

import Immutable = require('immutable');
import { createStore } from 'redux';
import { IContactAction } from './actions';
import { reducer } from './reducer';

export class Contact {
    id: number;
    name: String;
    star: boolean;
}

export class ContactStore {
    store = createStore(reducer, Immutable.List<Contact>());
    // contacts = Immutable.List<Contact>();

    /*constructor() {
        this.contacts = [];
    }*/

    get contacts(): Immutable.List<Contact> {
        return this.store.getState();
    }

    dispatch(action: IContactAction) {
        this.store.dispatch(action);
    }
    /*addContact(newContact: String) {
        this.contacts = this.contacts.push({
            name: newContact,
            star: false
        });
    }

    removeContact(contact: Contact) {
        const index = this.contacts.indexOf(contact);
        this.contacts = this.contacts.delete(index);
    }

    starContact(contact: Contact) {
        const index = this.contacts.indexOf(contact);
        this.contacts = (<any>this.contacts).update(index, (contact) => {
            return {
                name: contact.name,
                star: !contact.star
            };
        });
        this.contacts[index].star = !this.contacts[index].star;
    }*/
}