import { Component, OnInit, ElementRef,Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-users-modal',
  templateUrl: './users-modal.component.html',
  styleUrls: ['./users-modal.component.css']
})
export class UsersModalComponent implements OnInit {
   @Output() close =new EventEmitter();

  constructor(private el:ElementRef) { }

  ngOnInit(): void {
      document.body.appendChild(this.el.nativeElement)
  }
  ngOnDestroy(){
    this.el.nativeElement.remove();
  }
  onCloseClick(){
    this.close.emit();
  }

}
