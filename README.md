# arrange-the-notes

A game of arranging notes into the correct order by dragging and dropping. See it in action here: https://siiman.github.io/arrange-the-notes/gameselect

Notes are synthezised with Tone.js (https://tonejs.github.io/). 
Animations are from Animate.css (https://daneden.github.io/animate.css/).
UI design elements are from Angular Material (https://material.angular.io/) and Bootstrap (https://getbootstrap.com/).

`/src/app/gameselect/` directory contains the files for the UI where the user can select the difficulty. After selecting they are routed to the easy or difficult gameboard. `/src/app/board/` directory contains the files for the components of the board as well as the drag and drop events directive and the routing guard. There is also a sub-directory in there for the note class and service. 

Each note is an objects of the class `/src/app/board/note/note.ts`. The service `/src/app/board/note/note.service.ts` uses this to construct two lists of notes: easy (8 consecutive notes) and difficult (14 consecutive notes). The method `getNotes()` in the service returns one of those lists in shuffled order. Since each note is instantiated with a correct order property, the method `/src/app/board/board-events.directive.ts/checkNoteOrder()` is used to check after every drop event if the current order is correct (each item's order is greater than the previous). The HTML element is then colored accordingly by the `/src/app/board/board.component.ts/checkIfHovered()` method. 

The drag and drop is just a basic implementation in `/src/app/board/board-events.directive.ts` using `@HostListener` decorator. At the time of making none of the popular libraries seemed to offer the option to disable rearringing other objects in list after the drop. 
