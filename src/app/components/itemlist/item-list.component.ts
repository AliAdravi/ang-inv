import { Component, EventEmitter, Input, Output } from "@angular/core";



@Component({
    selector: 'item-list',
    templateUrl:'./item-list.component.html',
    styleUrls: ['./item-list.component.scss']
})

export class ItemListComponent {

    @Input() item: string;
    @Input() id: string = 'item-1';
    @Output() clearItem = new EventEmitter<string>();
    
    close = (event: any) => {
        debugger;
        var target = event.target || event.srcElement || event.currentTarget;
        this.clearItem.emit(target.id);
    }
}