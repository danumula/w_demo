import { Component, OnInit, Renderer } from '@angular/core';
import { NgbDateStruct, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    picsum-img-wrapper {
        height: 600px;
    }
    .picsum-img-wrapper >  img {
        border-radius: 0;
        height: 600px;
    }
    ngb-carousel::ng-deep > .carousel-control-prev {
        opacity: 50%;
    }
    ngb-carousel::ng-deep > .carousel-control-next {
        opacity: 50%;
    }
    `]
})

export class ComponentsComponent implements OnInit {
    page = 4;
    page1 = 5;
    focus;
    focus1;
    focus2;
    date: {year: number, month: number};
    model: NgbDateStruct;
    images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);

    constructor(config: NgbCarouselConfig, private renderer: Renderer) {
        // customize default values of carousels used by this component tree
        config.interval = 5000;
        config.wrap = false;
        config.keyboard = false;
        config.pauseOnHover = false;
        config.showNavigationArrows = true;
        config.showNavigationIndicators = true;
    }

    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: {month: number}) {
        return date.month !== current.month;
    }

    ngOnInit() {
        // let input_group_focus = document.getElementsByClassName('form-control');
        const input_group = document.getElementsByClassName('input-group');
        for (let i = 0; i < input_group.length; i++) {
            input_group[i].children[0].addEventListener('focus', function (){
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function (){
                input_group[i].classList.remove('input-group-focus');
            });
        }
    }

}
