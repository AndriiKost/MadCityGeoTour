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


  constructor() { }

  ngOnInit() {

  }

  close() {
    this.closeModal.emit(false);
  }

}
