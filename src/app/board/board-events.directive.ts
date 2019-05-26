import { Directive, Input, HostBinding, HostListener, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { Note } from './note/note';

@Directive({
  selector: '[appBoardEvents]'
})
export class BoardEventsDirective {
  @Input() note: Note;
  @Input() index: number;
  @Input() notes: Note[];

  constructor(private snackBar: MatSnackBar) { }

  animate(note: Note, animation: string): void {
    note.className.push(animation);
  }

  checkNoteOrder(): void {
    const currentOrder = this.notes.map(note => note.orderOfNote);
    if (currentOrder.every((orderNumber, i, arr) => !i || orderNumber > arr[i-1])) {
      this.snackBar.open('You solved it! Well done!', 'OK', { verticalPosition: 'top', duration: 3000, panelClass: 'snackbar' });
    }
  }  
  
  @HostBinding('draggable') draggable: boolean = true;
  
  @HostListener('animationend', ['note']) removeAnimationClass(note: Note): void {
    note.className.splice(1);
  }
  
  @HostListener('click', ['note', 'index']) play(note: Note, index: number): void {
    note.play();
    this.animate(note, 'jello');
  }
  
  @HostListener('dragenter', ['$event', 'note']) dragEnter(event: any, note: Note): void {
    event.preventDefault();
    note.isHovered = true;
  }
  
  @HostListener('dragleave', ['$event', 'note']) dragLeave(event: any, note: Note): void {
    event.preventDefault();
    note.isHovered = false;
  }

  @HostListener('dragover', ['$event']) allowDrop(event: any): void {
    event.preventDefault();
  }

  @HostListener('dragstart', ['$event', 'index']) dragStart(event: any, index: number): void {
    event.dataTransfer.setData("text/plain", index);
  }

  @HostListener('drop', ['$event', 'index', 'note']) drop(event: any, index: number, note: Note): void {
    event.preventDefault();
    
    const fromIndex: number = Number(event.dataTransfer.getData('text/plain'));
    const toIndex: number = index;

    this.animate(this.notes[fromIndex], 'bounceIn'); 
    this.animate(this.notes[toIndex], 'bounceIn');
    [this.notes[fromIndex], this.notes[toIndex]] = [this.notes[toIndex], this.notes[fromIndex]];
    note.isHovered = false; 
    this.checkNoteOrder();
  }
}