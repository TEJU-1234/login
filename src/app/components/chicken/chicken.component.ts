import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-chicken',
  templateUrl: './chicken.component.html',
  styleUrls: ['./chicken.component.css']
})
export class ChickenComponent implements OnInit {
  public chickens:any;

  public image_url = 'http://rjtmobile.com/grocery/images/';


  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getChicken().subscribe(

      x=> {this.chickens=x.data

      })

  }

}
