import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TokenStorageService} from '../../service/userManager/token/token-storage.service';
import {DiaryService} from '../../service/diary/diary.service';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss']
})
export class DiaryComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }



}
