import { Component, OnInit } from '@angular/core';
import { ModalService } from '@spartacus/storefront';

@Component({
  selector: 'app-simple-dialog',
  templateUrl: './simple-dialog.component.html',
  styleUrls: ['./simple-dialog.component.scss'],
})
export class SimpleDialogComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {}

  closeModal(sure?: boolean): void {
    this.modalService.closeActiveModal(sure);
  }
}
