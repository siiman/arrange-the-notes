import { Synth } from 'tone';

export class Note {
    isHovered: boolean = false;
    className: string[] = ['box col-sm mx-2 my-2 btn btn-outline-secondary animated'];
    private order: number;
    private name: string;
    private synth: any = new Synth().toMaster();

    constructor(order: number, name: string) {
        this.order = order;
        this.name = name;
    }

    get orderOfNote() {
        return this.order;
    }

    play(): void {
        this.synth.triggerAttackRelease(this.name, '8n');
    }
}