import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Modal } from '../../components/modal/modal';

@Component({
  selector: 'app-contacts-page',
  imports: [Header, Modal],
  templateUrl: './contacts-page.html',
  styleUrl: './contacts-page.css',
})

export class ContactsPage {
  protected openModal: boolean = false;

  close = () => {
    this.openModal = !this.openModal;
  }
}
