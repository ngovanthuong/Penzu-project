import { Component, OnInit } from '@angular/core';
import {Diary} from '../../../model/diary/diary';
import {TokenStorageService} from '../../../service/userManager/token/token-storage.service';
import {UserService} from '../../../service/userManager/user/user.service';
import {DiaryService} from '../../../service/diary/diary.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-diary-list',
  templateUrl: './diary-list.component.html',
  styleUrls: ['./diary-list.component.scss']
})
export class DiaryListComponent implements OnInit {
  listDiary: Diary[];
  diaryId: string;
  title: '';

  constructor(private token: TokenStorageService,
              private userService: UserService,
              private diaryService: DiaryService,
              private router: Router) { }

  ngOnInit() {
    this.userService.getDiary().subscribe(result => {
      this.listDiary = result;
    }, error => {
      alert('get diary fail');
    });

  }

  getListDiary() {
    this.userService.getDiary().subscribe(result => {
      this.listDiary = result;
    }, error => {
      alert('get diary fail');
    });
  }

  getDiaryId(id: string) {
    this.diaryId = id;
  }

  deleteDiaryById(closeButton: HTMLInputElement) {
    this.diaryService.deleteDiaryById(this.diaryId).subscribe(
      result => {
        closeButton.click();
        this.getListDiary();
      }, error => {
        console.log(error);
      }
    );
  }

  // searchByTitle() {
  //
  // }
}
