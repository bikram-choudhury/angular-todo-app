import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit {
  nameList: any;
  constructor(private _activatedRoute: ActivatedRoute, private _router: Router) { }

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

}
