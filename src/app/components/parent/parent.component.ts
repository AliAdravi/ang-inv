import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { ItemListComponent } from '../itemlist/item-list.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  item: string;
  components = new Map<string, ComponentRef<ItemListComponent>>();
  compIndex = 0;
  constructor() { }
  @ViewChild('itemContainer', {static: true, read: ViewContainerRef }) 
    itemContainer: ViewContainerRef;
  ngOnInit(): void {
  }
  onEnter = () => this.addItem();
  addItem = () => {
    if(!this.item) return;

    const uniqueId = `item-${this.compIndex}`;
    const componentItem = this.itemContainer.createComponent(ItemListComponent);
    componentItem.instance.item = this.item;
    componentItem.instance.id = uniqueId;
    this.item = '';
    this.components.set(uniqueId, componentItem);
    this.compIndex++;
    componentItem.instance.clearItem.subscribe((key: string) => {
      this.removeItem(key);
    })
  }
  removeItem = (key: string) => {
    debugger;
    if(this.components.has(key)){
      this.components.get(key)?.destroy();
    }
  }
  
}
