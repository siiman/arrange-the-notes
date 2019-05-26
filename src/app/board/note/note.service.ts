import { Injectable } from '@angular/core';
import { shuffle } from 'lodash';

import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notesDifficult: Note[] = [
    new Note(0, 'C3'),
    new Note(1, 'C#3'),
    new Note(2, 'D3'),
    new Note(3, 'D#3'),
    new Note(4, 'E3'),
    new Note(5, 'F3'),
    new Note(6, 'F#3'),
    new Note(7, 'G3'),
    new Note(8, 'G#3'),
    new Note(9, 'A3'),
    new Note(10, 'A#3'),
    new Note(11, 'B3'),
    new Note(12, 'C4'),
    new Note(13, 'C#4')
  ]

  private notesEasy: Note[] = [
    new Note(0, 'C3'),
    new Note(1, 'D3'),
    new Note(2, 'E3'),
    new Note(3, 'F3'),
    new Note(4, 'G3'),
    new Note(5, 'A3'),
    new Note(6, 'B3'),
    new Note(7, 'C4')
  ]

  getNotes(difficulty: string): Note[] {
    if (difficulty === 'easy') {
      return shuffle(this.notesEasy);
    } else if (difficulty === 'hard') {
      return shuffle(this.notesDifficult);
    }
  }
}