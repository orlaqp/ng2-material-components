import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup } from '@angular/forms';
import { MATERIAL_FORM, ISelectionItem } from '../../../../../dist/ng2-materialform';

@Component({
    selector: 'demo-select-picker',
    directives: [MATERIAL_FORM, REACTIVE_FORM_DIRECTIVES],
    template: require('./select-picker.html'),
})
export class DemoSelectPickerComponent implements OnInit {

    public fg: FormGroup;

    public colorItems: Array<ISelectionItem> = [
        { id: '1', title: 'Red' },
        { id: '2', title: 'Blue' },
        { id: '3', title: 'Green' },
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

    ngOnInit() {
        $('#my-test-dropdown').selectpicker();
    }
}
