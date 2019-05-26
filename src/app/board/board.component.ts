import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Note } from './note/note';
import { NoteService } from './note/note.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  notes: Note[];
 
  constructor(private noteService: NoteService, private route: ActivatedRoute) { }
  
  checkIfHovered(note: Note): string {
    return note.isHovered ? '#2e5cb8 3px solid' : '';
  }
  
  checkNotePosition(index: number, note: Note): string {
    return index===note.orderOfNote ? 'rgb(33, 185, 33)' : '';
  }
  
  getNotes(difficulty: string): void {
    this.notes = this.noteService.getNotes(difficulty);
  }

  ngOnInit(): void {
    const difficulty: string = this.route.snapshot.paramMap.get('difficulty');
    this.getNotes(difficulty);
  } 
}