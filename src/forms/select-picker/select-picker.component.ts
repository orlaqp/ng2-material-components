import { Component, Input, ElementRef, OnChanges } from '@angular/core';
import {
    FormGroup,
    FormControl,
} from '@angular/forms';
import { SelectionItem } from '../../models/selection-item';
import { InputBase } from '../input-base/input-base.component';
declare var $: JQueryStatic;

import {
    processPolyfills,
} from './polyfills';

// Selectpicker.VERSION = '1.11.2';

processPolyfills();

@Component({
    selector: 'select-picker',
    templateUrl: 'select-picker.component.pug',
})
export class SelectPickerComponent extends InputBase implements OnChanges {

    @Input() fg: FormGroup;
    @Input() field: string;
    @Input() disabled: boolean;
    @Input() placeholder: string;
    @Input() alt: boolean;
    @Input() leftIcon: string;
    @Input() rightIcon: string;

    // options
    @Input() items: SelectionItem[];
    @Input() multiple: boolean = false;
    @Input() autofocus: boolean = false;

    @Input() noneSelectedText: string = 'Nothing selected';
    @Input() noneResultsText: string = 'No results matched ';
    @Input() multipleSeparator: string = ', ';
    @Input() liveSearch: boolean = false;
    @Input() liveSearchPlaceholder: string = null;
    @Input() liveSearchStyle: string = 'contains'; // or startsWith
    @Input() maxOptions: number = 100;
    @Input() isMobile: boolean = false;
    @Input() tickIcon: string = 'zmdi-check';


    // @Input() selectAllText: string = 'Select All';
    // @Input() deselectAllText: string = 'Deselect All';
    // @Input() doneButton: boolean = false;
    // @Input() doneButtonText: string = 'Close';
    // @Input() styleBase: string = 'btn';
    // @Input() style: string = 'btn-default';
    // @Input() size: string | number = 'auto';
    // @Input() title: string = null;
    // @Input() selectedTextFormat: string = 'values';
    // @Input() width: string = null;
    // // @Input() container: JQuery = null;
    // @Input() hideDisabled: boolean = false;
    // @Input() showSubtext: boolean = false;
    // @Input() showIcon: boolean = true;
    // @Input() showContent: boolean = true;
    // @Input() dropupAuto: boolean = true;
    // @Input() header: string = null;
    // @Input() liveSearchNormalize: boolean = false;
    // @Input() actionsBox: boolean = false;
    // @Input() iconBase: string = 'zmdi';
    // @Input() showTick: boolean = false;
    // @Input() template: any = {
    //     caret: '<span class="caret"></span>',
    // };
    // @Input() selectOnTab: boolean = false;
    // @Input() dropdownAlignRight: boolean | string = false;

    open: boolean = false;
    filteredItems: SelectionItem[];
    selection: string;
    query: FormControl;

    private _clonedItems: SelectionItem[];

    // @Input() countSelectedText: Function = (numSelected: number, numTotal: number) => {
    //     return (numSelected === 1) ? '{0} item selected' : '{0} items selected';
    // };
    // @Input() maxOptionsText: Function = (numAll: number, numGroup: number) => {
    //     return [
    //         (numAll === 1) ? 'Limit reached ({n} item max)' : 'Limit reached ({n} items max)',
    //         (numGroup === 1) ? 'Group limit reached ({n} item max)' : 'Group limit reached ({n} items max)',
    //     ];
    // };

    constructor(private el: ElementRef) {
        super(el);
    }

    public ngOnInit(): void {
        this.onInit();

        this.query = new FormControl();

        this.query.valueChanges.subscribe(filter => {
            this._filterResults(filter);
        });
    }

    public ngOnChanges(changes: {[propertyName: string]: any}) {
        let that = this;

        if (changes['items']) {
            let clone: SelectionItem[] = [];

            let currentValue = changes['items'].currentValue;
            if (currentValue) {
                clone = currentValue.map((item: SelectionItem) => {
                    return {
                        id: item.id,
                        title: item.title,
                        disabled: item.disabled,
                        selected: item.selected,
                    };
                });
            }

            that._clonedItems = clone;
            this._updateSelectionText();
            this._filterResults(null);
        }
    }

    get emptySearch(): boolean {
        return this.filteredItems === undefined || this.filteredItems.length === 0;
    }

    toggleOpen() {
        this.open = !this.open;
    }

    toggleItem(item: SelectionItem) {
        if (!this.multiple) {
            this._clonedItems.forEach(item => {
                item.selected = false;
            });

            item.selected = !item.selected;
        } else {
            this._processMultipleSelection(item);
        }

        this._updateSelectionText();
        this._updateValue();
    }

    public addValidators(): void { }

    private _updateValue() {
        let selectedItems = this._clonedItems
            .filter(item => item.selected)
            .map(item => item.id);
        let values = selectedItems.join(',');
        this.control.setValue(values);
    }

    private _updateSelectionText() {

        if (this._clonedItems) {
            this.selection = this._clonedItems
                .filter(item => { return item.selected; })
                .map(item => { return item.title; })
                .join(this.multipleSeparator);
        }

        if (!this.selection) {
            this.selection = this.noneSelectedText;
        }
    }

    private _filterResults(filter: string) {
        let contains = this.liveSearchStyle === 'contains';

        if (!filter || filter === '') {
            this.filteredItems = this._clonedItems;
        } else {
            this.filteredItems = this._clonedItems.filter(item => {

                return contains ?
                    item.title.toLowerCase().includes(filter.toLowerCase()) :
                    item.title.toLowerCase().startsWith(filter.toLowerCase());
            });
        }
    }

    private _processMultipleSelection(item: SelectionItem) {
        let selectedItems = this._clonedItems.filter(item => {
            return item.selected;
        });

        // only select the items if we are under the max options
        if (!item.selected && selectedItems.length >= this.maxOptions) {
            return;
        }

        item.selected = !item.selected;
    }

}
