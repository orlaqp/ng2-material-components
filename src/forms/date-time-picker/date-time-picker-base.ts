import { ElementRef } from '@angular/core';
import { InputBase } from '../input-base/input-base.component';
import { Picker } from './picker';
import {
    datePickerModes,
    keyMap,
    viewModes,
    verticalModes,
    horizontalModes,
    toolbarPlacements,
    icons,
    tooltips,
    widgetPositioning,
    keyBinds,
} from './date-time-picker-helper';


export class DateTimePickerBase extends InputBase {
    datePickerModes = datePickerModes;
    keyMap = keyMap;
    viewModes = viewModes;
    verticalModes = verticalModes;
    horizontalModes = horizontalModes;
    toolbarPlacements = toolbarPlacements;
    icons = icons;
    tooltips = tooltips;
    widgetPositioning = widgetPositioning;
    keyBinds = keyBinds;

    picker: Picker;
    component: JQuery;
    element: JQuery;
    input: JQuery;

    widget: JQuery;

    constructor(el: ElementRef) {
        super(el);
    }

}
