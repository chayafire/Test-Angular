import { Component, OnInit } from '@angular/core';
import { DataService as DataService } from 'src/app/dataService.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public sensros: any = []
  public counterOk: number = 0
  public counterNotOk: number = 0;
  constructor(private dbService: DataService) { }

  ngOnInit(): void {

    //Import data from sensors.json
    this.dbService.getJSONsenros().subscribe(data => {
      for (let x of data.components)
        if (x.ComponentOk == 1) {
          this.counterOk++
        }
        else {
          this.counterNotOk++
        }
      this.sensros = data.components;
    })
  }


  //Change status and count if ok or not ok
  changeStatus(item: any) {
    let indexOfItem = this.sensros.indexOf(item)
    if (this.sensros[indexOfItem].ComponentOk == 0) {
      this.sensros[indexOfItem].ComponentOk = 1
      this.counterOk++
      this.counterNotOk--
    } else {
      this.sensros[indexOfItem].ComponentOk = 0
      this.counterNotOk++
      this.counterOk--
    }





  }

}


