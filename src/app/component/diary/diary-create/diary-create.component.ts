import { Component, OnInit } from '@angular/core';
import {Diary} from '../../../model/diary/diary';
import {FormControl, FormGroup} from '@angular/forms';
import {TokenStorageService} from '../../../service/userManager/token/token-storage.service';
import {DiaryService} from '../../../service/diary/diary.service';

@Component({
  selector: 'app-diary-create',
  templateUrl: './diary-create.component.html',
  styleUrls: ['./diary-create.component.scss']
})
export class DiaryCreateComponent implements OnInit {

  diary: Diary;
  info: any;
  formDiary = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    blobString: new FormControl(''),
    content: new FormControl('')
  });

  constructor(private token: TokenStorageService,
              private diaryService: DiaryService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }

  createDiary() {
    this.diaryService.createDiary(this.formDiary.value).subscribe(result => {
      this.diary = result;
      alert('them thanh cong');
    }, error => {
      console.log(error);
    });

  }

}
