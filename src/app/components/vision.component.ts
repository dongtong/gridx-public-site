import { Component, ElementRef, OnInit} from '@angular/core';
declare var jQuery: JQueryStatic;

@Component({
  selector: 'vision',
  templateUrl: 'src/app/templates/vision.component.html',
  styleUrls: ['src/app/stylesheets/vision.component.css']
})

export class VisionComponent implements OnInit {
   errorMessage: string;
   // default more vision is hidden
   showMoreVision: boolean = false;
   $dom: any;
   
  constructor(private _el: ElementRef) {
    this.$dom = jQuery(this._el.nativeElement);
  }

  ngOnInit(): void {
      // const thisDom = this.$dom;
      // thisDom.on('click', '#show_more_vision', function() {
      //   thisDom.find('.more-visions').slideDown('slow');
      // })
  }

  toggleMoreVision(): void {
    this.showMoreVision = !this.showMoreVision;
    const thisDom = this.$dom,
          moreVisions = thisDom.find('.more-visions');

    if(this.showMoreVision) {
      moreVisions.slideDown('slow');
    } else {
      moreVisions.slideUp('slow');
    }
  }
}