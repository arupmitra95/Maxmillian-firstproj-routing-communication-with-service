import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingrediants.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) nameInput!: ElementRef;
  @ViewChild('nameAmount', {static: true}) nameAmount!: ElementRef;
  // @Output() ingrediantAdded = new EventEmitter<Ingredient>();
  // @Output() ingrediantDeleted = new EventEmitter<string>();
  
  constructor(private shpsrvc: ShoppingService) {}

  ngOnInit(): void {
  }

  // onbuttnClick(value: string){
  //   if(value === "add"){
  //     let newIngrediant = new Ingredient(this.nameInput.nativeElement.value,
  //       this.nameAmount.nativeElement.value);
  //     // this.ingrediantAdded.emit(newIngrediant);
  //     this.shpsrvc.ingrediantAdded.emit(newIngrediant);
  //   }
  //   else if(value == "del"){
  //     let inputNameValue = this.nameInput.nativeElement.value;
  //     console.log("this.nameInput: ", this.nameInput);
  //     console.log("this.nameInput.nativeElement: ", this.nameInput.nativeElement);
  //     console.log("this.nameInput.nativeElement.value: ", this.nameInput.nativeElement.value);
  //     // if(inputNameValue != "")
  //     this.ingrediantDeleted.emit(inputNameValue);
  //   }
  //   else{
  //     console.log("this.nameAmount: ", this.nameAmount);
  //     this.nameInput.nativeElement.value = "";
  //     this.nameAmount.nativeElement.value = "";
  //   }
  // }
  onAdditem(){
    let newIngrediant = new Ingredient(this.nameInput.nativeElement.value,
      this.nameAmount.nativeElement.value);
    this.shpsrvc.ingrediantAdded.emit(newIngrediant);
  }

  onDeleteitem(){
    let inputNameValue = this.nameInput.nativeElement.value;
    // console.log("this.nameInput: ", this.nameInput);
    // console.log("this.nameInput.nativeElement: ", this.nameInput.nativeElement);
    // console.log("this.nameInput.nativeElement.value: ", this.nameInput.nativeElement.value);
    // if(inputNameValue != "")
    // this.ingrediantDeleted.emit(inputNameValue);
    this.shpsrvc.ingrediantDeleted.emit(inputNameValue);
  }
}
