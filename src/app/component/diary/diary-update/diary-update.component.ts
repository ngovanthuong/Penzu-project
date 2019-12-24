import { Component, OnInit } from '@angular/core';
import {Diary} from '../../../model/diary/diary';
import {DiaryService} from '../../../service/diary/diary.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-diary-update',
  templateUrl: './diary-update.component.html',
  styleUrls: ['./diary-update.component.scss']
})
export class DiaryUpdateComponent implements OnInit {

  diary: Diary;
  diaryId: string;
  idParams: any;


  constructor( private diaryService: DiaryService,
               private activatedRoute: ActivatedRoute,
               private router: Router) {
    this.activatedRoute.params.subscribe(params => {
      this.idParams = params.id ;
    });
  }

  ngOnInit() {
    this.diaryService.findDiaryById(this.idParams).subscribe(result => {
      this.diary = result ;
      console.log(this.diary);
    }, error => {
      console.log(error);
    });
  }

  updateDiary() {

    if ( this.diary.title === '' || this.diary.description === '' || this.diary.content === '') {
      alert('Fill Data Fields');
    }

    const diary: { description: string; id: string; title: string; content: string } = {
      id: this.diary.id,
      title: this.diary.title,
      description: this.diary.description,
      content: this.diary.content,
    };

    this.diaryService.updateDiary(diary).subscribe( result => {
      this.diary = result ;
      alert('update thanh cong');
      this.router.navigate(['/list-diary']);
    }, error => {
      console.log(error);
    });
  }

}
