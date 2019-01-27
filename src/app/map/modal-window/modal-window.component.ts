import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { GeoObject } from 'src/app/models/GeoObject.model';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent implements OnInit {
  @Output() closeModal = new EventEmitter<boolean>();
  @Input() geoObject: GeoObject;
  @Input() notification: string;
  clipboardMessage: boolean;


  constructor() { }

  ngOnInit() {

  }

  close() {
    this.closeModal.emit(false);
  }

  copyMessage(val: string) {
    this.appearClipboardMessage();
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  appearClipboardMessage() {
    if (this.clipboardMessage) {
      return;
    } else {
      this.clipboardMessage = true;
      setTimeout(() => { this.clipboardMessage = false; }, 3000);
    }
  }

}
