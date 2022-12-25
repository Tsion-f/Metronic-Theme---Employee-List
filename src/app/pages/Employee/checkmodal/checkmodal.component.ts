import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkmodal',
  templateUrl: './checkmodal.component.html',
  styleUrls: ['./checkmodal.component.scss']
})
export class CheckmodalComponent implements OnInit {


  @Input() data:string;
  constructor() { }

  ngOnInit(): void {
  }

  // visible: boolean = true;
  // selectable: boolean = true;
  // removable: boolean = true;
  // addOnBlur: boolean = true;


  // // Enter, comma
  // separatorKeysCodes = [ENTER, COMMA];


  // fruits = [
  //   { name: 'Lemon' },
  //   { name: 'Lime' },
  //   { name: 'Apple' },
  // ];


  // add(event: MatChipInputEvent): void {
  //   let input = event.input;
  //   let value = event.value;


  //   // Add our fruit
  //   if ((value || '').trim()) {
  //     this.fruits.push({ name: value.trim() });
  //   }


  //   // Reset the input value
  //   if (input) {
  //     input.value = '';
  //   }
  // }


  // remove(fruit: any): void {
  //   let index = this.fruits.indexOf(fruit);

  //   if (index >= 0) {
  //     this.fruits.splice(index, 1);
  //   }
  // }






  //Code for select and unselect

  title = 'Select/ Unselect All Checkboxes in Angular - FreakyJolly.com';
  masterSelected:boolean;
  checklist:any;
  checkedList:any;

  // constructor(){
  //     this.masterSelected = false;
  //     this.checklist = [
  //       {id:1,value:'Elenor Anderson',isSelected:false},
  //       {id:2,value:'Caden Kunze',isSelected:true},
  //       {id:3,value:'Ms. Hortense Zulauf',isSelected:true},
  //       {id:4,value:'Grady Reichert',isSelected:false},
  //       {id:5,value:'Dejon Olson',isSelected:false},
  //       {id:6,value:'Jamir Pfannerstill',isSelected:false},
  //       {id:7,value:'Aracely Renner DVM',isSelected:false},
  //       {id:8,value:'Genoveva Luettgen',isSelected:false}
  //     ];
  // }

  // checkUncheckAll() {
  //   for (var i = 0; i < this.checklist.length; i++) {
  //     this.checklist[i].isSelected = this.masterSelected;
  //   }
  //   this.getCheckedItemList();
  // }

  // isAllSelected() {
  //   this.masterSelected = this.checklist.every(function(item:any) {
  //       return item.isSelected == true;
  //     })
  //   this.getCheckedItemList();
  // }

  // getCheckedItemList(){
  //   this.checkedList = [];
  //   for (var i = 0; i < this.checklist.length; i++) {
  //     if(this.checklist[i].isSelected)
  //     this.checkedList.push(this.checklist[i]);
  //   }
  //   this.checkedList = JSON.stringify(this.checkedList);
  // }
}
