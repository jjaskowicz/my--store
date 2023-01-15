import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageList, ShotWithService } from './shot-with.service';

@Component({
  selector: 'app-shot-with',
  templateUrl: './shot-with.component.html',
  styleUrls: ['./shot-with.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ShotWithComponent implements OnInit {

  imageList$: Observable<ImageList[]> = this.shotWithService.getImagesList();

  constructor(
    private shotWithService: ShotWithService
  ) { }

  ngOnInit(): void {
  }

}
