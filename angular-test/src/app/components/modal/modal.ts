import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal {
  @Output()
  onClose: EventEmitter<void> = new EventEmitter();
  
  closeModal = () => {
    this.onClose.emit();
  }
}
