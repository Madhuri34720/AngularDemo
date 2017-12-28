import { Component, Input ,OnChanges } from '@angular/core';




@Component({
    selector: 'rating-star',
    templateUrl: './app/rating/rating-component.html',
    styleUrls: ['./app/rating/rating.component.css']
})

export class RatingComponent implements OnChanges {  
    starWidth: number;
    @Input() rating : number; 
    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }
	
  
    
   
}