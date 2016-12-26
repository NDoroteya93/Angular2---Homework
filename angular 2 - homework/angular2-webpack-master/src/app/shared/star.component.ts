import {
    Component, OnChanges, Input,
    Output, EventEmitter
} from '@angular/core';

@Component({
    selector: 'ai-star',
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.scss']
})

export class StarComponent implements OnChanges {
    @Input() starRating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> =
    new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.starRating * 286 / 10;
    }

    // onClick(): void {
    //     this.ratingClicked.emit('This rating ${this.starRating}!');
    // }

}    