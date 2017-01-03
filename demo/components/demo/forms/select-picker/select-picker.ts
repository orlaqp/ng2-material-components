import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SelectionItem } from '../../../../../dist/ng2-material-components';

@Component({
    selector: 'demo-select-picker',
    template: require('./select-picker.html'),
})
export class DemoSelectPickerComponent implements OnInit {

    public fg: FormGroup;

    public colorItems: Array<SelectionItem> = [
        new SelectionItem('1', 'Red'),
        new SelectionItem('2', 'Blue', true),
        new SelectionItem('3', 'Green'),
    ];

    public items: Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
        'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
        'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin',
        'Düsseldorf', 'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg',
        'Hamburg', 'Hannover', 'Helsinki', 'Kraków', 'Leeds', 'Leipzig', 'Lisbon',
        'London', 'Madrid', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Málaga',
        'Naples', 'Palermo', 'Paris', 'Poznań', 'Prague', 'Riga', 'Rome',
        'Rotterdam', 'Seville', 'Sheffield', 'Sofia', 'Stockholm', 'Stuttgart',
        'The Hague', 'Turin', 'Valencia', 'Vienna', 'Vilnius', 'Warsaw', 'Wrocław',
        'Zagreb', 'Zaragoza', 'Łódź'];

    constructor() {
        this.fg = new FormGroup({});
    }

    ngOnInit() {}

    updateItems() {
        this.colorItems = [ new SelectionItem('1', 'Cuba') ];
    }
}
