import { Component, OnInit, NgZone } from '@angular/core';
import { ElementRef, Renderer } from '@angular/core';
declare var jquery:any;   // not required
declare var $ :any;   // not required

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isShrunk: boolean = false;

  constructor(zone: NgZone, private el: ElementRef, private renderer: Renderer) {
    window.onscroll = () => {
      zone.run(() => {
        if(window.pageYOffset > 0) {
             this.isShrunk = true;
        } else {
             this.isShrunk = false;
        }
      });
    }
  }

  onMenuClick() {
 
   // this.renderer.setElementClass(this.el.nativeElement.querySelector('.navbar-ex1-collapse'), 'in', false);        
}
  ngOnInit() {

    $('.navbar-nav li a:not(.dropdown-toggle)').on('click',function(){
      $('.navbar-toggle').addClass('collapsed');
      $('.navbar-collapse.collapse').removeClass('show');
      $('.navbar-toggle').attr('aria-expanded','false');
    })
  }

}
