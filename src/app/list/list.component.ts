import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  cerveza: object | undefined;

  constructor(private _http: HttpService) { }


  ngOnInit(): void {
    this._http.getBeer().subscribe(data =>{
      this.cerveza = data;
      console.log(this.cerveza);
    });
  }

}
