import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Coach } from '../models/coach.model';
import { InscriptionService } from '../services/inscription.service';

@Component({
  selector: 'app-appmenu',
  templateUrl: './appmenu.component.html',
  styleUrls: ['./appmenu.component.css']
})
export class AppmenuComponent implements OnInit  {



    constructor(public coachService: InscriptionService) { }


    ngOnInit() {
        this.getCoachList();
    }

    getCoachList(){
        this.coachService.getAllCoach().subscribe((res) => {
            this.coachService.coachList = res as Coach[];
        });
    }

}
