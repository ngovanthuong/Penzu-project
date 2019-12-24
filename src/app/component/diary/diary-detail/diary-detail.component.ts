import { Component, OnInit } from '@angular/core';
import {Diary} from '../../../model/diary/diary';
import {ActivatedRoute} from '@angular/router';
import {DiaryService} from '../../../service/diary/diary.service';

@Component({
  selector: 'app-diary-detail',
  templateUrl: './diary-detail.component.html',
  styleUrls: ['./diary-detail.component.scss']
})
export class DiaryDetailComponent implements OnInit {

  diary: Diary;
  idParams: any;

  constructor( private activateRote: ActivatedRoute,
               private diaryService: DiaryService) {
    this.activateRote.params.subscribe(params => {
      this.idParams = params.id;
    });
  }

  ngOnInit() {
    this.diaryService.findDiaryById(this.idParams).subscribe(result => {
      this.diary = result;
    });
  }



}
