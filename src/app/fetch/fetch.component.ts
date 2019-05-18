import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostDataService } from '../services/postdata.service';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit {
  nameList: any;
  user:any = {
    userid: '',
    title: '',
    body: ''
  };
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _postDataService: PostDataService 
  ) { }

  ngOnInit() {
    this._activatedRoute.data.subscribe(xyz => {
      console.log(xyz);
      this.nameList = xyz.items
    });
    this._activatedRoute.params.subscribe(xyz => {
      console.log(xyz);
    });
  }
  goToPipes() {
    this._router.navigateByUrl("pipes");
  }
  sendData() {
    console.log(this.user);
    this._postDataService.saveData(this.user).subscribe(response => console.log(response))
  }

}
