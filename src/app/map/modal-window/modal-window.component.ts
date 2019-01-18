import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent implements OnInit {
  @Output() closeModal = new EventEmitter<boolean>();
  @Input() geoObject: Object;


  constructor() { }

  ngOnInit() {

  }

  close() {
    this.closeModal.emit(false);
  }

}
