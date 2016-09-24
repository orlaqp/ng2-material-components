import { Component, Input, ElementRef, OnChanges } from '@angular/core';
import {
    SelectControlValueAccessor,
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
        this.control.updateValue(values);
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



    //
    //
    //
    //
    //
    //

    //
    // private _selectedItems: SelectionItem[] = [];
    //
    // private _initialized: boolean = false;
    // private $element: JQuery;
    // private $newElement: JQuery = null;
    // private $button: JQuery = null;
    // private $menu: JQuery = null;
    // private $lis: JQuery = null;
    // private $menuInner: JQuery = null;
    // private $searchbox: JQuery = null;
    // private $bsContainer: JQuery = null;
    //
    // private liObj: any = null;
    // private sizeInfo: any;
    // private changed_arguments: any = null;

    //
    //
    //
    //
    //
    // private init() {
    //     var that = this,
    //         id = this.$element.attr('id');
    //
    //     this.$element.addClass('bs-select-hidden');
    //
    //     // store originalIndex (key) and newIndex (value) in this.liObj for fast accessibility
    //     // allows us to do this.$lis.eq(that.liObj[index]) instead of this.$lis.filter('[data-original-index="' + index + '"]')
    //     this.liObj = {};
    //     this.$newElement = this.createView();
    //     this.$element
    //         .after(this.$newElement)
    //         .appendTo(this.$newElement);
    //     this.$button = this.$newElement.children('button');
    //     this.$menu = this.$newElement.children('.dropdown-menu');
    //     this.$menuInner = this.$menu.children('.inner');
    //     this.$searchbox = this.$menu.find('input');
    //
    //     this.$element.removeClass('bs-select-hidden');
    //
    //     if (this.dropdownAlignRight === true) this.$menu.addClass('dropdown-menu-right');
    //
    //     if (typeof id !== 'undefined') {
    //         this.$button.attr('data-id', id);
    //         $('label[for="' + id + '"]').click(function(e) {
    //             e.preventDefault();
    //             that.$button.focus();
    //         });
    //     }
    //
    //     this.checkDisabled();
    //     this.clickListener();
    //     if (this.liveSearch) this.liveSearchListener();
    //     this.render();
    //     this.setStyle();
    //     this.setWidth();
    //     if (this.container) this.selectPosition();
    //     this.$menu.data('this', this);
    //     this.$newElement.data('this', this);
    //     if (this.isMobile) this.mobile();
    //
    //     this.$newElement.on({
    //         'hide.bs.dropdown': function(e: Event) {
    //             that.$menuInner.attr('aria-expanded', 'false');
    //             that.$element.trigger('hide.bs.select', e);
    //         },
    //         'hidden.bs.dropdown': function(e: Event) {
    //             that.$element.trigger('hidden.bs.select', e);
    //         },
    //         'show.bs.dropdown': function(e: Event) {
    //             that.$menuInner.attr('aria-expanded', 'true');
    //             that.$element.trigger('show.bs.select', e);
    //         },
    //         'shown.bs.dropdown': function(e: Event) {
    //             that.$element.trigger('shown.bs.select', e);
    //         },
    //     });
    //
    //     if (that.$element[0].hasAttribute('required')) {
    //         this.$element.on('invalid', function() {
    //             that.$button
    //                 .addClass('bs-invalid')
    //                 .focus();
    //
    //             that.$element.on({
    //                 'focus.bs.select': function() {
    //                     that.$button.focus();
    //                     that.$element.off('focus.bs.select');
    //                 },
    //                 'shown.bs.select': function() {
    //                     that.$element
    //                         .val(that.$element.val()) // set the value to hide the validation message in Chrome when menu is opened
    //                         .off('shown.bs.select');
    //                 },
    //                 'rendered.bs.select': function() {
    //                     // if select is no longer invalid, remove the bs-invalid class
    //                     if (this.validity.valid) that.$button.removeClass('bs-invalid');
    //                     that.$element.off('rendered.bs.select');
    //                 },
    //             });
    //         });
    //     }
    //
    //     setTimeout(function() {
    //         that.$element.trigger('loaded.bs.select');
    //         that._initialized = true;
    //     });
    // }
    //
    // private createDropdown() {
    //     // Options
    //     // If we are multiple or showTick option is set, then add the show-tick class
    //     var showTick = (this.multiple || this.showTick) ? ' show-tick' : '',
    //         inputGroup = this.$element.parent().hasClass('input-group') ? ' input-group-btn' : '',
    //         autofocus = this.autofocus ? ' autofocus' : '';
    //     // Elements
    //     var header = this.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.header + '</div>' : '';
    //     var searchbox = this.liveSearch ?
    //         '<div class="bs-searchbox">' +
    //         '<input type="text" class="form-control" autocomplete="off"' +
    //         (null === this.liveSearchPlaceholder ? '' : ' placeholder="' + htmlEscape(this.liveSearchPlaceholder) + '"') + ' role="textbox" aria-label="Search">' +
    //         '</div>'
    //         : '';
    //     var actionsbox = this.multiple && this.actionsBox ?
    //         '<div class="bs-actionsbox">' +
    //         '<div class="btn-group btn-group-sm btn-block">' +
    //         '<button type="button" class="actions-btn bs-select-all btn btn-default">' +
    //         this.selectAllText +
    //         '</button>' +
    //         '<button type="button" class="actions-btn bs-deselect-all btn btn-default">' +
    //         this.deselectAllText +
    //         '</button>' +
    //         '</div>' +
    //         '</div>'
    //         : '';
    //     var donebutton = this.multiple && this.doneButton ?
    //         '<div class="bs-donebutton">' +
    //         '<div class="btn-group btn-block">' +
    //         '<button type="button" class="btn btn-sm btn-default">' +
    //         this.doneButtonText +
    //         '</button>' +
    //         '</div>' +
    //         '</div>'
    //         : '';
    //     var drop =
    //         '<div class="btn-group bootstrap-select' + showTick + inputGroup + '">' +
    //         '<button type="button" class="' + this.styleBase + ' dropdown-toggle" data-toggle="dropdown"' + autofocus + ' role="button">' +
    //         '<span class="filter-option pull-left"></span>&nbsp;' +
    //         '<span class="bs-caret">' +
    //         this.template.caret +
    //         '</span>' +
    //         '</button>' +
    //         '<div class="dropdown-menu open" role="combobox">' +
    //         header +
    //         searchbox +
    //         actionsbox +
    //         '<ul class="dropdown-menu inner" role="listbox" aria-expanded="false">' +
    //         '</ul>' +
    //         donebutton +
    //         '</div>' +
    //         '</div>';
    //
    //     return $(drop);
    // };
    //
    // private createView() {
    //     var $drop = this.createDropdown(),
    //         li = this.createLi();
    //
    //     $drop.find('ul')[0].innerHTML = li;
    //     return $drop;
    // }
    //
    // private reloadLi() {
    //     //Remove all children.
    //     this.destroyLi();
    //     //Re build
    //     var li = this.createLi();
    //     this.$menuInner[0].innerHTML = li;
    // }
    //
    // private destroyLi() {
    //     this.$menu.find('li').remove();
    // }
    //
    // private createLi() {
    //     var that = this,
    //         _li: any = [],
    //         optID = 0,
    //         titleOption = document.createElement('option'),
    //         liIndex = -1; // increment liIndex whenever a new <li> element is created to ensure liObj is correct
    //
    //     // Helper functions
    //     /**
    //      * @param content
    //      * @param [index]
    //      * @param [classes]
    //      * @param [optgroup]
    //      * @returns {string}
    //      */
    //     var generateLI = function(content: string, index: number, classes?: string, optgroup?: string) {
    //         return '<li' +
    //             ((typeof classes !== 'undefined' && '' !== classes) ? ' class="' + classes + '"' : '') +
    //             ((typeof index !== 'undefined' && null !== index) ? ' data-original-index="' + index + '"' : '') +
    //             ((typeof optgroup !== 'undefined' && null !== optgroup) ? 'data-optgroup="' + optgroup + '"' : '') +
    //             '>' + content + '</li>';
    //     };
    //
    //     /**
    //      * @param text
    //      * @param [classes]
    //      * @param [inline]
    //      * @param [tokens]
    //      * @returns {string}
    //      */
    //     var generateA = function(text: string, classes: string, inline: boolean, tokens: any) {
    //         return '<a tabindex="0"' +
    //             (typeof classes !== 'undefined' ? ' class="' + classes + '"' : '') +
    //             (typeof inline !== 'undefined' ? ' style="' + inline + '"' : '') +
    //             (that.liveSearchNormalize ? ' data-normalized-text="' + normalizeToBase(htmlEscape(text)) + '"' : '') +
    //             (typeof tokens !== 'undefined' || tokens !== null ? ' data-tokens="' + tokens + '"' : '') +
    //             ' role="option">' + text +
    //             '<span class="' + that.iconBase + ' ' + that.tickIcon + ' check-mark"></span>' +
    //             '</a>';
    //     };
    //
    //     if (this.title && !this.multiple) {
    //         // this option doesn't create a new <li> element, but does add a new option, so liIndex is decreased
    //         // since liObj is recalculated on every refresh, liIndex needs to be decreased even if the titleOption is already appended
    //         liIndex--;
    //
    //         if (!this.$element.find('.bs-title-option').length) {
    //             // Use native JS to prepend option (faster)
    //             var element = <HTMLSelectElement>this.$element[0];
    //             titleOption.className = 'bs-title-option';
    //             titleOption.appendChild(document.createTextNode(this.title));
    //             titleOption.value = '';
    //             element.insertBefore(titleOption, element.firstChild);
    //             // Check if selected or data-selected attribute is already set on an option. If not, select the titleOption option.
    //             // the selected item may have been changed by user or programmatically before the bootstrap select plugin runs,
    //             // if so, the select will have the data-selected attribute
    //             var $opt = $(element[element.selectedIndex]);
    //             if ($opt.attr('selected') === undefined && this.$element.data('selected') === undefined) {
    //                 titleOption.selected = true;
    //             }
    //         }
    //     }
    //
    //     this.$element.find('option').each(function(index) {
    //         var $this = $(this);
    //
    //         liIndex++;
    //
    //         if ($this.hasClass('bs-title-option')) return;
    //
    //         // Get the class and text for the option
    //         var optionClass = this.className || '',
    //             inline = this.style.cssText,
    //             text = $this.data('content') ? $this.data('content') : $this.html(),
    //             tokens = $this.data('tokens') ? $this.data('tokens') : null,
    //             subtext = typeof $this.data('subtext') !== 'undefined' ? '<small class="text-muted">' + $this.data('subtext') + '</small>' : '',
    //             icon = typeof $this.data('icon') !== 'undefined' ? '<span class="' + that.iconBase + ' ' + $this.data('icon') + '"></span> ' : '',
    //             $parent = $this.parent(),
    //             isOptgroup = $parent[0].tagName === 'OPTGROUP',
    //             isOptgroupDisabled = isOptgroup && (<HTMLOptGroupElement>$parent[0]).disabled,
    //             isDisabled = this.disabled || isOptgroupDisabled;
    //
    //         if (icon !== '' && isDisabled) {
    //             icon = '<span>' + icon + '</span>';
    //         }
    //
    //         if (that.hideDisabled && (isDisabled && !isOptgroup || isOptgroupDisabled)) {
    //             liIndex--;
    //             return;
    //         }
    //
    //         if (!$this.data('content')) {
    //             // Prepend any icon and append any subtext to the main text.
    //             text = icon + '<span class="text">' + text + subtext + '</span>';
    //         }
    //
    //         if (isOptgroup && $this.data('divider') !== true) {
    //             if (that.hideDisabled && isDisabled) {
    //                 if ($parent.data('allOptionsDisabled') === undefined) {
    //                     var $options = $parent.children();
    //                     $parent.data('allOptionsDisabled', $options.filter(':disabled').length === $options.length);
    //                 }
    //
    //                 if ($parent.data('allOptionsDisabled')) {
    //                     liIndex--;
    //                     return;
    //                 }
    //             }
    //
    //             var optGroupClass = ' ' + $parent[0].className || '';
    //
    //             if ($this.index() === 0) { // Is it the first option of the optgroup?
    //                 optID += 1;
    //
    //                 // Get the opt group label
    //                 var label = (<HTMLOptGroupElement>$parent[0]).label,
    //                     labelSubtext = typeof $parent.data('subtext') !== 'undefined' ? '<small class="text-muted">' + $parent.data('subtext') + '</small>' : '',
    //                     labelIcon = $parent.data('icon') ? '<span class="' + that.iconBase + ' ' + $parent.data('icon') + '"></span> ' : '';
    //
    //                 label = labelIcon + '<span class="text">' + label + labelSubtext + '</span>';
    //
    //                 if (index !== 0 && _li.length > 0) { // Is it NOT the first option of the select && are there elements in the dropdown?
    //                     liIndex++;
    //                     _li.push(generateLI('', null, 'divider', optID + 'div'));
    //                 }
    //                 liIndex++;
    //                 _li.push(generateLI(label, null, 'dropdown-header' + optGroupClass, optID.toString()));
    //             }
    //
    //             if (that.hideDisabled && isDisabled) {
    //                 liIndex--;
    //                 return;
    //             }
    //
    //             _li.push(generateLI(generateA(text, 'opt ' + optionClass + optGroupClass, inline, tokens), index, '', optID.toString()));
    //         } else if ($this.data('divider') === true) {
    //             _li.push(generateLI('', index, 'divider'));
    //         } else if ($this.data('hidden') === true) {
    //             _li.push(generateLI(generateA(text, optionClass, inline, tokens), index, 'hidden is-hidden'));
    //         } else {
    //             var showDivider = this.previousElementSibling && this.previousElementSibling.tagName === 'OPTGROUP';
    //
    //             // if previous element is not an optgroup and hideDisabled is true
    //             if (!showDivider && that.hideDisabled) {
    //                 // get previous elements
    //                 var $prev = $(this).prevAll();
    //
    //                 for (var i = 0; i < $prev.length; i++) {
    //                     // find the first element in the previous elements that is an optgroup
    //                     if ($prev[i].tagName === 'OPTGROUP') {
    //                         var optGroupDistance = 0;
    //
    //                         // loop through the options in between the current option and the optgroup
    //                         // and check if they are hidden or disabled
    //                         for (var d = 0; d < i; d++) {
    //                             var prevOption = $prev[d];
    //                             if ((<HTMLOptionElement>prevOption).disabled || $(prevOption).data('hidden') === true) optGroupDistance++;
    //                         }
    //
    //                         // if all of the options between the current option and the optgroup are hidden or disabled, show the divider
    //                         if (optGroupDistance === i) showDivider = true;
    //
    //                         break;
    //                     }
    //                 }
    //             }
    //
    //             if (showDivider) {
    //                 liIndex++;
    //                 _li.push(generateLI('', null, 'divider', optID + 'div'));
    //             }
    //             _li.push(generateLI(generateA(text, optionClass, inline, tokens), index));
    //         }
    //
    //         that.liObj[index] = liIndex;
    //     });
    //
    //     //If we are not multiple, we don't have a selected item, and we don't have a title, select the first element so something is set in the button
    //     if (!this.multiple && this.$element.find('option:selected').length === 0 && !this.title) {
    //         this.$element.find('option').eq(0).prop('selected', true).attr('selected', 'selected');
    //     }
    //
    //     return _li.join('');
    // }
    //
    // private findLis() {
    //     if (this.$lis == null) this.$lis = this.$menu.find('li');
    //     return this.$lis;
    // };
    //
    // /**
    //  * @param [updateLi] defaults to true
    //  */
    // private render(updateLi?: any) {
    //     var that = this,
    //         notDisabled: string;
    //
    //     //Update the LI to match the SELECT
    //     if (updateLi !== false) {
    //         this.$element.find('option').each(function(index) {
    //             var $lis = that.findLis().eq(that.liObj[index]);
    //
    //             that.setDisabled(index, this.disabled || this.parentNode.tagName === 'OPTGROUP' && this.parentNode.disabled, $lis);
    //             that.setSelected(index, this.selected, $lis);
    //         });
    //     }
    //
    //     this.togglePlaceholder();
    //
    //     this.tabIndex();
    //
    //     var selectedItems = this.$element.find('option').map(function() {
    //         if (this.selected) {
    //             if (that.hideDisabled && (this.disabled || this.parentNode.tagName === 'OPTGROUP' && this.parentNode.disabled)) return;
    //
    //             var $this = $(this),
    //                 icon = $this.data('icon') && that.showIcon ? '<i class="' + that.iconBase + ' ' + $this.data('icon') + '"></i> ' : '',
    //                 subtext: string;
    //
    //             if (that.showSubtext && $this.data('subtext') && !that.multiple) {
    //                 subtext = ' <small class="text-muted">' + $this.data('subtext') + '</small>';
    //             } else {
    //                 subtext = '';
    //             }
    //             if (typeof $this.attr('title') !== 'undefined') {
    //                 return $this.attr('title');
    //             } else if ($this.data('content') && that.showContent) {
    //                 return $this.data('content');
    //             } else {
    //                 return icon + $this.html() + subtext;
    //             }
    //         }
    //     }).toArray();
    //
    //     //Fixes issue in IE10 occurring when no default option is selected and at least one option is disabled
    //     //Convert all the values into a comma delimited string
    //     var title = !this.multiple ? selectedItems[0] : selectedItems.join(this.multipleSeparator);
    //
    //     //If this is multi select, and the selectText type is count, the show 1 of 2 selected etc..
    //     if (this.multiple && this.selectedTextFormat.indexOf('count') > -1) {
    //         var max = this.selectedTextFormat.split('>');
    //         if ((max.length > 1 && selectedItems.length > <any>max[1]) || (max.length === 1 && selectedItems.length >= 2)) {
    //             notDisabled = this.hideDisabled ? ', [disabled]' : '';
    //             var totalCount = this.$element.find('option').not('[data-divider="true"], [data-hidden="true"]' + notDisabled).length,
    //                 tr8nText = (typeof this.countSelectedText === 'function') ? this.countSelectedText(selectedItems.length, totalCount) : this.countSelectedText;
    //             title = tr8nText.replace('{0}', selectedItems.length.toString()).replace('{1}', totalCount.toString());
    //         }
    //     }
    //
    //     if (this.title === undefined) {
    //         this.title = this.$element.attr('title');
    //     }
    //
    //     if (this.selectedTextFormat === 'static') {
    //         title = this.title;
    //     }
    //
    //     //If we dont have a title, then use the default, or if nothing is set at all, use the not selected text
    //     if (!title) {
    //         title = typeof this.title !== 'undefined' ? this.title : this.noneSelectedText;
    //     }
    //
    //     //strip all html-tags and trim the result
    //     this.$button.attr('title', $.trim(title.replace(/<[^>]*>?/g, '')));
    //     this.$button.children('.filter-option').html(title);
    //
    //     this.$element.trigger('rendered.bs.select');
    // }
    //
    // /**
    //   * @param [style]
    //   * @param [status]
    //   */
    // private setStyle(style?: string, status?: string) {
    //     if (this.$element.attr('class')) {
    //         this.$newElement.addClass(this.$element.attr('class').replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ''));
    //     }
    //
    //     var buttonClass = style ? style : this.style;
    //
    //     if (status === 'add') {
    //         this.$button.addClass(buttonClass);
    //     } else if (status === 'remove') {
    //         this.$button.removeClass(buttonClass);
    //     } else {
    //         this.$button.removeClass(this.style);
    //         this.$button.addClass(buttonClass);
    //     }
    // }
    //
    // private liHeight(refresh?: boolean) {
    //     if (!refresh && (this.size === null || this.sizeInfo)) return;
    //
    //     var newElement = document.createElement('div'),
    //         menu = document.createElement('div'),
    //         menuInner = document.createElement('ul'),
    //         divider = document.createElement('li'),
    //         li = document.createElement('li'),
    //         a = document.createElement('a'),
    //         text = document.createElement('span'),
    //         header = this.header && this.$menu.find('.popover-title').length > 0 ? this.$menu.find('.popover-title')[0].cloneNode(true) : null,
    //         search = this.liveSearch ? document.createElement('div') : null,
    //         actions = this.actionsBox && this.multiple && this.$menu.find('.bs-actionsbox').length > 0 ? this.$menu.find('.bs-actionsbox')[0].cloneNode(true) : null,
    //         doneButton = this.doneButton && this.multiple && this.$menu.find('.bs-donebutton').length > 0 ? this.$menu.find('.bs-donebutton')[0].cloneNode(true) : null;
    //
    //     text.className = 'text';
    //     newElement.className = (<HTMLElement>this.$menu[0].parentNode).className + ' open';
    //     menu.className = 'dropdown-menu open';
    //     menuInner.className = 'dropdown-menu inner';
    //     divider.className = 'divider';
    //
    //     text.appendChild(document.createTextNode('Inner text'));
    //     a.appendChild(text);
    //     li.appendChild(a);
    //     menuInner.appendChild(li);
    //     menuInner.appendChild(divider);
    //     if (header) menu.appendChild(header);
    //     if (search) {
    //         // create a span instead of input as creating an input element is slower
    //         var input = document.createElement('span');
    //         search.className = 'bs-searchbox';
    //         input.className = 'form-control';
    //         search.appendChild(input);
    //         menu.appendChild(search);
    //     }
    //     if (actions) menu.appendChild(actions);
    //     menu.appendChild(menuInner);
    //     if (doneButton) menu.appendChild(doneButton);
    //     newElement.appendChild(menu);
    //
    //     document.body.appendChild(newElement);
    //
    //     var liHeight = a.offsetHeight,
    //         headerHeight = header ? (<HTMLElement>header).offsetHeight : 0,
    //         searchHeight = search ? search.offsetHeight : 0,
    //         actionsHeight = actions ? (<HTMLElement>actions).offsetHeight : 0,
    //         doneButtonHeight = doneButton ? (<HTMLElement>doneButton).offsetHeight : 0,
    //         dividerHeight = $(divider).outerHeight(true),
    //         // fall back to jQuery if getComputedStyle is not supported
    //         menuStyle = typeof getComputedStyle === 'function' ? getComputedStyle(menu) : false,
    //         $menu = menuStyle ? null : $(menu),
    //         menuPadding = {
    //             vert: parseInt(menuStyle ? (<any>menuStyle).paddingTop : $menu.css('paddingTop')) +
    //             parseInt(menuStyle ? (<any>menuStyle).paddingBottom : $menu.css('paddingBottom')) +
    //             parseInt(menuStyle ? (<any>menuStyle).borderTopWidth : $menu.css('borderTopWidth')) +
    //             parseInt(menuStyle ? (<any>menuStyle).borderBottomWidth : $menu.css('borderBottomWidth')),
    //             horiz: parseInt(menuStyle ? (<any>menuStyle).paddingLeft : $menu.css('paddingLeft')) +
    //             parseInt(menuStyle ? (<any>menuStyle).paddingRight : $menu.css('paddingRight')) +
    //             parseInt(menuStyle ? (<any>menuStyle).borderLeftWidth : $menu.css('borderLeftWidth')) +
    //             parseInt(menuStyle ? (<any>menuStyle).borderRightWidth : $menu.css('borderRightWidth')),
    //         },
    //         menuExtras = {
    //             vert: menuPadding.vert +
    //             parseInt(menuStyle ? (<any>menuStyle).marginTop : $menu.css('marginTop')) +
    //             parseInt(menuStyle ? (<any>menuStyle).marginBottom : $menu.css('marginBottom')) + 2,
    //             horiz: menuPadding.horiz +
    //             parseInt(menuStyle ? (<any>menuStyle).marginLeft : $menu.css('marginLeft')) +
    //             parseInt(menuStyle ? (<any>menuStyle).marginRight : $menu.css('marginRight')) + 2,
    //         };
    //
    //     document.body.removeChild(newElement);
    //
    //     this.sizeInfo = {
    //         liHeight: liHeight,
    //         headerHeight: headerHeight,
    //         searchHeight: searchHeight,
    //         actionsHeight: actionsHeight,
    //         doneButtonHeight: doneButtonHeight,
    //         dividerHeight: dividerHeight,
    //         menuPadding: menuPadding,
    //         menuExtras: menuExtras,
    //     };
    // }
    //
    // private setSize() {
    //     this.findLis();
    //     this.liHeight();
    //
    //     if (this.header) this.$menu.css('padding-top', 0);
    //     if (this.size === null) return;
    //
    //     var that = this,
    //         $menu = this.$menu,
    //         $menuInner = this.$menuInner,
    //         $window = $(window),
    //         selectHeight = this.$newElement[0].offsetHeight,
    //         selectWidth = this.$newElement[0].offsetWidth,
    //         liHeight = this.sizeInfo['liHeight'],
    //         headerHeight = this.sizeInfo['headerHeight'],
    //         searchHeight = this.sizeInfo['searchHeight'],
    //         actionsHeight = this.sizeInfo['actionsHeight'],
    //         doneButtonHeight = this.sizeInfo['doneButtonHeight'],
    //         divHeight = this.sizeInfo['dividerHeight'],
    //         menuPadding = this.sizeInfo['menuPadding'],
    //         menuExtras = this.sizeInfo['menuExtras'],
    //         notDisabled = this.hideDisabled ? '.disabled' : '',
    //         menuHeight: number,
    //         menuWidth: number,
    //         getHeight: number,
    //         getWidth: number,
    //         selectOffsetTop: number,
    //         selectOffsetBot: number,
    //         selectOffsetLeft: number,
    //         selectOffsetRight: number,
    //         getPos = function() {
    //             var pos = that.$newElement.offset(),
    //                 $container = $(that.container),
    //                 containerPos: any;
    //
    //             if (that.container && !$container.is('body')) {
    //                 containerPos = $container.offset();
    //                 containerPos.top += parseInt($container.css('borderTopWidth'));
    //                 containerPos.left += parseInt($container.css('borderLeftWidth'));
    //             } else {
    //                 containerPos = { top: 0, left: 0 };
    //             }
    //
    //             selectOffsetTop = pos.top - containerPos.top - $window.scrollTop();
    //             selectOffsetBot = $window.height() - selectOffsetTop - selectHeight - containerPos.top;
    //             selectOffsetLeft = pos.left - containerPos.left - $window.scrollLeft();
    //             selectOffsetRight = $window.width() - selectOffsetLeft - selectWidth - containerPos.left;
    //         };
    //
    //     getPos();
    //
    //     if (this.size === 'auto') {
    //         var getSize = function() {
    //             var minHeight: number,
    //                 hasClass = function(className: string, include: boolean) {
    //                     return function(element: any) {
    //                         if (include) {
    //                             return (element.classList ? element.classList.contains(className) : $(element).hasClass(className));
    //                         } else {
    //                             return !(element.classList ? element.classList.contains(className) : $(element).hasClass(className));
    //                         }
    //                     };
    //                 },
    //                 lis = that.$menuInner[0].getElementsByTagName('li'),
    //                 lisVisible = Array.prototype.filter ? Array.prototype.filter.call(lis, hasClass('hidden', false)) : that.$lis.not('.hidden'),
    //                 optGroup = Array.prototype.filter ? Array.prototype.filter.call(lisVisible, hasClass('dropdown-header', true)) : lisVisible.filter('.dropdown-header');
    //
    //             getPos();
    //             menuHeight = selectOffsetBot - menuExtras.vert;
    //             menuWidth = selectOffsetRight - menuExtras.horiz;
    //
    //             if (that.container) {
    //                 if (!$menu.data('height')) $menu.data('height', $menu.height());
    //                 getHeight = $menu.data('height');
    //
    //                 if (!$menu.data('width')) $menu.data('width', $menu.width());
    //                 getWidth = $menu.data('width');
    //             } else {
    //                 getHeight = $menu.height();
    //                 getWidth = $menu.width();
    //             }
    //
    //             if (that.dropupAuto) {
    //                 that.$newElement.toggleClass('dropup', selectOffsetTop > selectOffsetBot && (menuHeight - menuExtras.vert) < getHeight);
    //             }
    //
    //             if (that.$newElement.hasClass('dropup')) {
    //                 menuHeight = selectOffsetTop - menuExtras.vert;
    //             }
    //
    //             if (that.dropdownAlignRight === 'auto') {
    //                 $menu.toggleClass('dropdown-menu-right', selectOffsetLeft > selectOffsetRight && (menuWidth - menuExtras.horiz) < (getWidth - selectWidth));
    //             }
    //
    //             if ((lisVisible.length + optGroup.length) > 3) {
    //                 minHeight = liHeight * 3 + menuExtras.vert - 2;
    //             } else {
    //                 minHeight = 0;
    //             }
    //
    //             $menu.css({
    //                 'max-height': menuHeight + 'px',
    //                 'overflow': 'hidden',
    //                 'min-height': minHeight + headerHeight + searchHeight + actionsHeight + doneButtonHeight + 'px',
    //             });
    //             $menuInner.css({
    //                 'max-height': menuHeight - headerHeight - searchHeight - actionsHeight - doneButtonHeight - menuPadding.vert + 'px',
    //                 'overflow-y': 'auto',
    //                 'min-height': Math.max(minHeight - menuPadding.vert, 0) + 'px',
    //             });
    //         };
    //         getSize();
    //         this.$searchbox.off('input.getSize propertychange.getSize').on('input.getSize propertychange.getSize', getSize);
    //         $window.off('resize.getSize scroll.getSize').on('resize.getSize scroll.getSize', getSize);
    //     } else if (this.size && this.size !== 'auto' && this.$lis.not(notDisabled).length > this.size) {
    //         var optIndex = this.$lis.not('.divider').not(notDisabled).children().slice(0, (<number>this.size)).last().parent().index(),
    //             divLength = this.$lis.slice(0, optIndex + 1).filter('.divider').length;
    //         menuHeight = liHeight * (<number>this.size) + divLength * divHeight + menuPadding.vert;
    //
    //         if (that.container) {
    //             if (!$menu.data('height')) $menu.data('height', $menu.height());
    //             getHeight = $menu.data('height');
    //         } else {
    //             getHeight = $menu.height();
    //         }
    //
    //         if (that.dropupAuto) {
    //             //noinspection JSUnusedAssignment
    //             this.$newElement.toggleClass('dropup', selectOffsetTop > selectOffsetBot && (menuHeight - menuExtras.vert) < getHeight);
    //         }
    //         $menu.css({
    //             'max-height': menuHeight + headerHeight + searchHeight + actionsHeight + doneButtonHeight + 'px',
    //             'overflow': 'hidden',
    //             'min-height': '',
    //         });
    //         $menuInner.css({
    //             'max-height': menuHeight - menuPadding.vert + 'px',
    //             'overflow-y': 'auto',
    //             'min-height': '',
    //         });
    //     }
    // }
    //
    // private setWidth() {
    //     if (this.width === 'auto') {
    //         this.$menu.css('min-width', '0');
    //
    //         // Get correct width if element is hidden
    //         var $selectClone = this.$menu.parent().clone().appendTo('body'),
    //             $selectClone2 = this.container ? this.$newElement.clone().appendTo('body') : $selectClone,
    //             ulWidth = $selectClone.children('.dropdown-menu').outerWidth(),
    //             btnWidth = $selectClone2.css('width', 'auto').children('button').outerWidth();
    //
    //         $selectClone.remove();
    //         $selectClone2.remove();
    //
    //         // Set width to whatever's larger, button title or longest option
    //         this.$newElement.css('width', Math.max(ulWidth, btnWidth) + 'px');
    //     } else if (this.width === 'fit') {
    //         // Remove inline min-width so width can be changed from 'auto'
    //         this.$menu.css('min-width', '');
    //         this.$newElement.css('width', '').addClass('fit-width');
    //     } else if (this.width) {
    //         // Remove inline min-width so width can be changed from 'auto'
    //         this.$menu.css('min-width', '');
    //         this.$newElement.css('width', this.width);
    //     } else {
    //         // Remove inline min-width/width so width can be changed
    //         this.$menu.css('min-width', '');
    //         this.$newElement.css('width', '');
    //     }
    //     // Remove fit-width class if width is changed programmatically
    //     if (this.$newElement.hasClass('fit-width') && this.width !== 'fit') {
    //         this.$newElement.removeClass('fit-width');
    //     }
    // }
    //
    // private selectPosition() {
    //     this.$bsContainer = $('<div class="bs-container" />');
    //
    //     var that = this,
    //         $container = $(this.container),
    //         pos: any,
    //         containerPos: any,
    //         actualHeight: any,
    //         getPlacement = function($element: JQuery) {
    //             that.$bsContainer.addClass($element.attr('class').replace(/form-control|fit-width/gi, '')).toggleClass('dropup', $element.hasClass('dropup'));
    //             pos = $element.offset();
    //
    //             if (!$container.is('body')) {
    //                 containerPos = $container.offset();
    //                 containerPos.top += parseInt($container.css('borderTopWidth')) - $container.scrollTop();
    //                 containerPos.left += parseInt($container.css('borderLeftWidth')) - $container.scrollLeft();
    //             } else {
    //                 containerPos = { top: 0, left: 0 };
    //             }
    //
    //             actualHeight = $element.hasClass('dropup') ? 0 : $element[0].offsetHeight;
    //
    //             that.$bsContainer.css({
    //                 'top': pos.top - containerPos.top + actualHeight,
    //                 'left': pos.left - containerPos.left,
    //                 'width': $element[0].offsetWidth,
    //             });
    //         };
    //
    //     this.$button.on('click', function() {
    //         var $this = $(this);
    //
    //         if (that.isDisabled()) {
    //             return;
    //         }
    //
    //         getPlacement(that.$newElement);
    //
    //         that.$bsContainer
    //             .appendTo(that.container)
    //             .toggleClass('open', !$this.hasClass('open'))
    //             .append(that.$menu);
    //     });
    //
    //     $(window).on('resize scroll', function() {
    //         getPlacement(that.$newElement);
    //     });
    //
    //     this.$element.on('hide.bs.select', function() {
    //         that.$menu.data('height', that.$menu.height());
    //         that.$bsContainer.detach();
    //     });
    // }
    //
    // /**
    //  * @param {number} index - the index of the option that is being changed
    //  * @param {boolean} selected - true if the option is being selected, false if being deselected
    //  * @param {JQuery} $lis - the 'li' element that is being modified
    //  */
    // private setSelected(index: number, selected?: any, $lis?: any) {
    //     if (!$lis) {
    //         this.togglePlaceholder(); // check if setSelected is being called by changing the value of the select
    //         $lis = this.findLis().eq(this.liObj[index]);
    //     }
    //
    //     $lis.toggleClass('selected', selected).find('a').attr('aria-selected', selected);
    // }
    //
    // /**
    //  * @param {number} index - the index of the option that is being disabled
    //  * @param {boolean} disabled - true if the option is being disabled, false if being enabled
    //  * @param {JQuery} $lis - the 'li' element that is being modified
    //  */
    // private setDisabled(index: number, disabled: boolean, $lis: any) {
    //     if (!$lis) {
    //         $lis = this.findLis().eq(this.liObj[index]);
    //     }
    //
    //     if (disabled) {
    //         $lis.addClass('disabled').children('a').attr('href', '#').attr('tabindex', -1).attr('aria-disabled', true);
    //     } else {
    //         $lis.removeClass('disabled').children('a').removeAttr('href').attr('tabindex', 0).attr('aria-disabled', false);
    //     }
    // }
    //
    // private isDisabled() {
    //     return (<HTMLInputElement>this.$element[0]).disabled;
    // }
    //
    // private checkDisabled() {
    //     var that = this;
    //
    //     if (this.isDisabled()) {
    //         this.$newElement.addClass('disabled');
    //         this.$button.addClass('disabled').attr('tabindex', -1);
    //     } else {
    //         if (this.$button.hasClass('disabled')) {
    //             this.$newElement.removeClass('disabled');
    //             this.$button.removeClass('disabled');
    //         }
    //
    //         // HACK: Orlando
    //         if (this.$button.attr('tabindex') === '-1' && !this.$element.data('tabindex')) {
    //             this.$button.removeAttr('tabindex');
    //         }
    //     }
    //
    //     this.$button.click(function() {
    //         return !that.isDisabled();
    //     });
    // }
    //
    // private togglePlaceholder() {
    //     var value = this.$element.val();
    //     this.$button.toggleClass('bs-placeholder', value === null || value === '');
    // }
    //
    // private tabIndex() {
    //     if (this.$element.data('tabindex') !== this.$element.attr('tabindex') &&
    //         (this.$element.attr('tabindex') !== '-98')) {
    //         this.$element.data('tabindex', this.$element.attr('tabindex'));
    //         this.$button.attr('tabindex', this.$element.data('tabindex'));
    //     }
    //
    //     this.$element.attr('tabindex', -98);
    // }
    //
    // private clickListener() {
    //     var that = this,
    //         $document = $(document);
    //
    //     this.$newElement.on('touchstart.dropdown', '.dropdown-menu', (e: Event) => {
    //         e.stopPropagation();
    //     });
    //
    //     $document.data('spaceSelect', false);
    //
    //     this.$button.on('keyup', function(e) {
    //         if (/(32)/.test(e.keyCode.toString(10)) && $document.data('spaceSelect')) {
    //             e.preventDefault();
    //             $document.data('spaceSelect', false);
    //         }
    //     });
    //
    //     this.$button.on('click', function() {
    //         that.setSize();
    //     });
    //
    //     this.$element.on('shown.bs.select', function() {
    //         if (!that.liveSearch && !that.multiple) {
    //             that.$menuInner.find('.selected a').focus();
    //         } else if (!that.multiple) {
    //             var selectedIndex = that.liObj[(<HTMLSelectElement>that.$element[0]).selectedIndex];
    //
    //             if (typeof selectedIndex !== 'number' || <any>that.size === false) return;
    //
    //             // scroll to selected option
    //             var offset = that.$lis.eq(selectedIndex)[0].offsetTop - that.$menuInner[0].offsetTop;
    //             offset = offset - that.$menuInner[0].offsetHeight / 2 + that.sizeInfo.liHeight / 2;
    //             that.$menuInner[0].scrollTop = offset;
    //         }
    //     });
    //
    //     this.$menuInner.on('click', 'li a', function(e) {
    //         var $this = $(this),
    //             clickedIndex = $this.parent().data('originalIndex'),
    //             prevValue = that.$element.val(),
    //             prevIndex = that.$element.prop('selectedIndex'),
    //             triggerChange = true;
    //
    //         // Don't close on multi choice menu
    //         if (that.multiple && that.maxOptions !== 1) {
    //             e.stopPropagation();
    //         }
    //
    //         e.preventDefault();
    //
    //         //Don't run if we have been disabled
    //         if (!that.isDisabled() && !$this.parent().hasClass('disabled')) {
    //             var $options = that.$element.find('option'),
    //                 $option = $options.eq(clickedIndex),
    //                 state = $option.prop('selected'),
    //                 $optgroup = $option.parent('optgroup'),
    //                 maxOptions = that.maxOptions,
    //                 maxOptionsGrp = $optgroup.data('maxOptions') || false;
    //
    //             if (!that.multiple) { // Deselect all others if not multi select box
    //                 $options.prop('selected', false);
    //                 $option.prop('selected', true);
    //                 that.$menuInner.find('.selected').removeClass('selected').find('a').attr('aria-selected', 'false');
    //                 that.setSelected(clickedIndex, true);
    //             } else { // Toggle the one we have chosen if we are multi select.
    //                 $option.prop('selected', !state);
    //                 that.setSelected(clickedIndex, !state);
    //                 $this.blur();
    //
    //                 if (<any>maxOptions !== false || maxOptionsGrp !== false) {
    //                     var maxReached = maxOptions < $options.filter(':selected').length,
    //                         maxReachedGrp = maxOptionsGrp < $optgroup.find('option:selected').length;
    //
    //                     if ((maxOptions && maxReached) || (maxOptionsGrp && maxReachedGrp)) {
    //                         if (maxOptions && maxOptions === 1) {
    //                             $options.prop('selected', false);
    //                             $option.prop('selected', true);
    //                             that.$menuInner.find('.selected').removeClass('selected');
    //                             that.setSelected(clickedIndex, true);
    //                         } else if (maxOptionsGrp && maxOptionsGrp === 1) {
    //                             $optgroup.find('option:selected').prop('selected', false);
    //                             $option.prop('selected', true);
    //                             var optgroupID = $this.parent().data('optgroup');
    //                             that.$menuInner.find('[data-optgroup="' + optgroupID + '"]').removeClass('selected');
    //                             that.setSelected(clickedIndex, true);
    //                         } else {
    //                             var maxOptionsText = typeof that.maxOptionsText === 'string' ? [that.maxOptionsText, that.maxOptionsText] : that.maxOptionsText,
    //                                 maxOptionsArr = typeof maxOptionsText === 'function' ? maxOptionsText(maxOptions, maxOptionsGrp) : maxOptionsText,
    //                                 maxTxt = maxOptionsArr[0].replace('{n}', maxOptions),
    //                                 maxTxtGrp = maxOptionsArr[1].replace('{n}', maxOptionsGrp),
    //                                 $notify = $('<div class="notify"></div>');
    //                             // If {var} is set in array, replace it
    //                             /** @deprecated */
    //                             if (maxOptionsArr[2]) {
    //                                 maxTxt = maxTxt.replace('{var}', maxOptionsArr[2][maxOptions > 1 ? 0 : 1]);
    //                                 maxTxtGrp = maxTxtGrp.replace('{var}', maxOptionsArr[2][maxOptionsGrp > 1 ? 0 : 1]);
    //                             }
    //
    //                             $option.prop('selected', false);
    //
    //                             that.$menu.append($notify);
    //
    //                             if (maxOptions && maxReached) {
    //                                 $notify.append($('<div>' + maxTxt + '</div>'));
    //                                 triggerChange = false;
    //                                 that.$element.trigger('maxReached.bs.select');
    //                             }
    //
    //                             if (maxOptionsGrp && maxReachedGrp) {
    //                                 $notify.append($('<div>' + maxTxtGrp + '</div>'));
    //                                 triggerChange = false;
    //                                 that.$element.trigger('maxReachedGrp.bs.select');
    //                             }
    //
    //                             setTimeout(function() {
    //                                 that.setSelected(clickedIndex, false);
    //                             }, 10);
    //
    //                             $notify.delay(750).fadeOut(300, function() {
    //                                 $(this).remove();
    //                             });
    //                         }
    //                     }
    //                 }
    //             }
    //
    //             if (!that.multiple || (that.multiple && that.maxOptions === 1)) {
    //                 that.$button.focus();
    //             } else if (that.liveSearch) {
    //                 that.$searchbox.focus();
    //             }
    //
    //             // Trigger select 'change'
    //             if (triggerChange) {
    //                 if ((prevValue !== that.$element.val() && that.multiple) || (prevIndex !== that.$element.prop('selectedIndex') && !that.multiple)) {
    //                     // $option.prop('selected') is current option state (selected/unselected). state is previous option state.
    //                     this.changed_arguments = [clickedIndex, $option.prop('selected'), state];
    //                     (<any>that.$element).triggerNative('change');
    //                 }
    //             }
    //         }
    //     });
    //
    //     this.$menu.on('click', 'li.disabled a, .popover-title, .popover-title :not(.close)', function(e) {
    //         if (e.currentTarget === this) {
    //             e.preventDefault();
    //             e.stopPropagation();
    //             if (that.liveSearch && !$(e.target).hasClass('close')) {
    //                 that.$searchbox.focus();
    //             } else {
    //                 that.$button.focus();
    //             }
    //         }
    //     });
    //
    //     this.$menuInner.on('click', '.divider, .dropdown-header', function(e) {
    //         e.preventDefault();
    //         e.stopPropagation();
    //         if (that.liveSearch) {
    //             that.$searchbox.focus();
    //         } else {
    //             that.$button.focus();
    //         }
    //     });
    //
    //     this.$menu.on('click', '.popover-title .close', function() {
    //         that.$button.click();
    //     });
    //
    //     this.$searchbox.on('click', function(e) {
    //         e.stopPropagation();
    //     });
    //
    //     this.$menu.on('click', '.actions-btn', function(e) {
    //         if (that.liveSearch) {
    //             that.$searchbox.focus();
    //         } else {
    //             that.$button.focus();
    //         }
    //
    //         e.preventDefault();
    //         e.stopPropagation();
    //
    //         if ($(this).hasClass('bs-select-all')) {
    //             that.selectAll();
    //         } else {
    //             that.deselectAll();
    //         }
    //     });
    //
    //     this.$element.change(function() {
    //         that.render(false);
    //         that.$element.trigger('changed.bs.select', this.changed_arguments);
    //         this.changed_arguments = null;
    //     });
    // }
    //
    // private liveSearchListener() {
    //     var that = this,
    //         $no_results = $('<li class="no-results"></li>');
    //
    //     this.$button.on('click.dropdown.data-api touchstart.dropdown.data-api', function() {
    //         that.$menuInner.find('.active').removeClass('active');
    //         if (!!that.$searchbox.val()) {
    //             that.$searchbox.val('');
    //             that.$lis.not('.is-hidden').removeClass('hidden');
    //             if (!!$no_results.parent().length) $no_results.remove();
    //         }
    //         if (!that.multiple) that.$menuInner.find('.selected').addClass('active');
    //         setTimeout(function() {
    //             that.$searchbox.focus();
    //         }, 10);
    //     });
    //
    //     this.$searchbox.on('click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api', function(e) {
    //         e.stopPropagation();
    //     });
    //
    //     this.$searchbox.on('input propertychange', function() {
    //         if (that.$searchbox.val()) {
    //             var $searchBase = that.$lis.not('.is-hidden').removeClass('hidden').children('a');
    //             if (that.liveSearchNormalize) {
    //                 $searchBase = $searchBase.not(':a' + that._searchStyle() + '("' + normalizeToBase(that.$searchbox.val()) + '")');
    //             } else {
    //                 $searchBase = $searchBase.not(':' + that._searchStyle() + '("' + that.$searchbox.val() + '")');
    //             }
    //             $searchBase.parent().addClass('hidden');
    //
    //             that.$lis.filter('.dropdown-header').each(function() {
    //                 var $this = $(this),
    //                     optgroup = $this.data('optgroup');
    //
    //                 if (that.$lis.filter('[data-optgroup=' + optgroup + ']').not($this).not('.hidden').length === 0) {
    //                     $this.addClass('hidden');
    //                     that.$lis.filter('[data-optgroup=' + optgroup + 'div]').addClass('hidden');
    //                 }
    //             });
    //
    //             var $lisVisible = that.$lis.not('.hidden');
    //
    //             // hide divider if first or last visible, or if followed by another divider
    //             $lisVisible.each(function(index) {
    //                 var $this = $(this);
    //
    //                 if ($this.hasClass('divider') && (
    //                     $this.index() === $lisVisible.first().index() ||
    //                     $this.index() === $lisVisible.last().index() ||
    //                     $lisVisible.eq(index + 1).hasClass('divider'))) {
    //                     $this.addClass('hidden');
    //                 }
    //             });
    //
    //             if (!that.$lis.not('.hidden, .no-results').length) {
    //                 if (!!$no_results.parent().length) {
    //                     $no_results.remove();
    //                 }
    //                 $no_results.html(that.noneResultsText.replace('{0}', '"' + htmlEscape(that.$searchbox.val()) + '"')).show();
    //                 that.$menuInner.append($no_results);
    //             } else if (!!$no_results.parent().length) {
    //                 $no_results.remove();
    //             }
    //         } else {
    //             that.$lis.not('.is-hidden').removeClass('hidden');
    //             if (!!$no_results.parent().length) {
    //                 $no_results.remove();
    //             }
    //         }
    //
    //         that.$lis.filter('.active').removeClass('active');
    //         if (that.$searchbox.val()) that.$lis.not('.hidden, .divider, .dropdown-header').eq(0).addClass('active').children('a').focus();
    //         $(this).focus();
    //     });
    // }
    //
    // private _searchStyle() {
    //     var styles = {
    //         begins: 'ibegins',
    //         startsWith: 'ibegins',
    //     };
    //
    //     return styles[this.liveSearchStyle] || 'icontains';
    // }
    //
    // private val(value: any) {
    //     if (typeof value !== 'undefined') {
    //         this.$element.val(value);
    //         this.render();
    //
    //         return this.$element;
    //     } else {
    //         return this.$element.val();
    //     }
    // }
    //
    // private changeAll(status: boolean) {
    //     if (!this.multiple) return;
    //     if (typeof status === 'undefined') status = true;
    //
    //     this.findLis();
    //
    //     var $options = this.$element.find('option'),
    //         $lisVisible = this.$lis.not('.divider, .dropdown-header, .disabled, .hidden'),
    //         lisVisLen = $lisVisible.length,
    //         selectedOptions: any = [];
    //
    //     if (status) {
    //         if ($lisVisible.filter('.selected').length === $lisVisible.length) return;
    //     } else {
    //         if ($lisVisible.filter('.selected').length === 0) return;
    //     }
    //
    //     $lisVisible.toggleClass('selected', status);
    //
    //     for (var i = 0; i < lisVisLen; i++) {
    //         var origIndex = +$lisVisible[i].getAttribute('data-original-index');
    //         selectedOptions[selectedOptions.length] = $options.eq(origIndex)[0];
    //     }
    //
    //     $(selectedOptions).prop('selected', status);
    //
    //     this.render(false);
    //
    //     this.togglePlaceholder();
    //
    //     (<any>this.$element)
    //         .triggerNative('change');
    // }
    //
    // private selectAll() {
    //     return this.changeAll(true);
    // }
    //
    // private deselectAll() {
    //     return this.changeAll(false);
    // }
    //
    // private toggle(e: Event) {
    //     e = e || window.event;
    //
    //     if (e) e.stopPropagation();
    //
    //     this.$button.trigger('click');
    // }
    //
    // private keydown(e: JQueryKeyEventObject) {
    //     var $this = $(this),
    //         $parent = $this.is('input') ? $this.parent().parent() : $this.parent(),
    //         $items: any,
    //         that = $parent.data('this'),
    //         index: number,
    //         next: number,
    //         first: number,
    //         last: any,
    //         prev: any,
    //         nextPrev: number,
    //         prevIndex: number,
    //         isActive: boolean,
    //         selector = ':not(.disabled, .hidden, .dropdown-header, .divider)',
    //         keyCodeMap = {
    //             32: ' ',
    //             48: '0',
    //             49: '1',
    //             50: '2',
    //             51: '3',
    //             52: '4',
    //             53: '5',
    //             54: '6',
    //             55: '7',
    //             56: '8',
    //             57: '9',
    //             59: ';',
    //             65: 'a',
    //             66: 'b',
    //             67: 'c',
    //             68: 'd',
    //             69: 'e',
    //             70: 'f',
    //             71: 'g',
    //             72: 'h',
    //             73: 'i',
    //             74: 'j',
    //             75: 'k',
    //             76: 'l',
    //             77: 'm',
    //             78: 'n',
    //             79: 'o',
    //             80: 'p',
    //             81: 'q',
    //             82: 'r',
    //             83: 's',
    //             84: 't',
    //             85: 'u',
    //             86: 'v',
    //             87: 'w',
    //             88: 'x',
    //             89: 'y',
    //             90: 'z',
    //             96: '0',
    //             97: '1',
    //             98: '2',
    //             99: '3',
    //             100: '4',
    //             101: '5',
    //             102: '6',
    //             103: '7',
    //             104: '8',
    //             105: '9',
    //         };
    //
    //     if (that.options.liveSearch) $parent = $this.parent().parent();
    //
    //     if (that.options.container) $parent = that.$menu;
    //
    //     $items = $('[role="listbox"] li', $parent);
    //
    //     isActive = that.$newElement.hasClass('open');
    //
    //     if (!isActive && (e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 96 && e.keyCode <= 105 || e.keyCode >= 65 && e.keyCode <= 90)) {
    //         if (!that.options.container) {
    //             that.setSize();
    //             that.$menu.parent().addClass('open');
    //             isActive = true;
    //         } else {
    //             that.$button.trigger('click');
    //         }
    //         that.$searchbox.focus();
    //         return;
    //     }
    //
    //     if (that.options.liveSearch) {
    //         if (/(^9$|27)/.test(e.keyCode.toString(10)) && isActive) {
    //             e.preventDefault();
    //             e.stopPropagation();
    //             that.$button.click().focus();
    //         }
    //         // $items contains li elements when liveSearch is enabled
    //         $items = $('[role="listbox"] li' + selector, $parent);
    //         if (!$this.val() && !/(38|40)/.test(e.keyCode.toString(10))) {
    //             if ($items.filter('.active').length === 0) {
    //                 $items = that.$menuInner.find('li');
    //                 if (that.options.liveSearchNormalize) {
    //                     $items = $items.filter(':a' + that._searchStyle() + '(' + normalizeToBase(keyCodeMap[e.keyCode]) + ')');
    //                 } else {
    //                     $items = $items.filter(':' + that._searchStyle() + '(' + keyCodeMap[e.keyCode] + ')');
    //                 }
    //             }
    //         }
    //     }
    //
    //     if (!$items.length) return;
    //
    //     if (/(38|40)/.test(e.keyCode.toString(10))) {
    //         index = $items.index($items.find('a').filter(':focus').parent());
    //         first = $items.filter(selector).first().index();
    //         last = $items.filter(selector).last().index();
    //         next = $items.eq(index).nextAll(selector).eq(0).index();
    //         prev = $items.eq(index).prevAll(selector).eq(0).index();
    //         nextPrev = $items.eq(next).prevAll(selector).eq(0).index();
    //
    //         if (that.options.liveSearch) {
    //             $items.each(function(i: JQuery) {
    //                 if (!$(this).hasClass('disabled')) {
    //                     $(this).data('index', i);
    //                 }
    //             });
    //             index = $items.index($items.filter('.active'));
    //             first = $items.first().data('index');
    //             last = $items.last().data('index');
    //             next = $items.eq(index).nextAll().eq(0).data('index');
    //             prev = $items.eq(index).prevAll().eq(0).data('index');
    //             nextPrev = $items.eq(next).prevAll().eq(0).data('index');
    //         }
    //
    //         prevIndex = $this.data('prevIndex');
    //
    //         if (e.keyCode === 38) {
    //             if (that.options.liveSearch) index--;
    //             if (index !== nextPrev && index > prev) index = prev;
    //             if (index < first) index = first;
    //             if (index === prevIndex) index = last;
    //         } else if (e.keyCode === 40) {
    //             if (that.options.liveSearch) index++;
    //             if (index === -1) index = 0;
    //             if (index !== nextPrev && index < next) index = next;
    //             if (index > last) index = last;
    //             if (index === prevIndex) index = first;
    //         }
    //
    //         $this.data('prevIndex', index);
    //
    //         if (!that.options.liveSearch) {
    //             $items.eq(index).children('a').focus();
    //         } else {
    //             e.preventDefault();
    //             if (!$this.hasClass('dropdown-toggle')) {
    //                 $items.removeClass('active').eq(index).addClass('active').children('a').focus();
    //                 $this.focus();
    //             }
    //         }
    //
    //     } else if (!$this.is('input')) {
    //         var keyIndex: any = [],
    //             count: number,
    //             prevKey: any;
    //
    //         $items.each(function() {
    //             if (!$(this).hasClass('disabled')) {
    //                 if ($.trim($(this).children('a').text().toLowerCase()).substring(0, 1) === keyCodeMap[e.keyCode]) {
    //                     keyIndex.push($(this).index());
    //                 }
    //             }
    //         });
    //
    //         count = $(document).data('keycount');
    //         count++;
    //         $(document).data('keycount', count);
    //
    //         prevKey = $.trim($(':focus').text().toLowerCase()).substring(0, 1);
    //
    //         if (prevKey !== keyCodeMap[e.keyCode]) {
    //             count = 1;
    //             $(document).data('keycount', count);
    //         } else if (count >= keyIndex.length) {
    //             $(document).data('keycount', 0);
    //             if (count > keyIndex.length) count = 1;
    //         }
    //
    //         $items.eq(keyIndex[count - 1]).children('a').focus();
    //     }
    //
    //     // Select focused option if "Enter", "Spacebar" or "Tab" (when selectOnTab is true) are pressed inside the menu.
    //     if ((/(13|32)/.test(e.keyCode.toString(10)) || (/(^9$)/.test(e.keyCode.toString(10)) && that.options.selectOnTab)) && isActive) {
    //         if (!/(32)/.test(e.keyCode.toString(10))) e.preventDefault();
    //         if (!that.options.liveSearch) {
    //             var elem = $(':focus');
    //             elem.click();
    //             // Bring back focus for multiselects
    //             elem.focus();
    //             // Prevent screen from scrolling if the user hit the spacebar
    //             e.preventDefault();
    //             // Fixes spacebar selection of dropdown items in FF & IE
    //             $(document).data('spaceSelect', true);
    //         } else if (!/(32)/.test(e.keyCode.toString(10))) {
    //             that.$menuInner.find('.active a').click();
    //             $this.focus();
    //         }
    //         $(document).data('keycount', 0);
    //     }
    //
    //     if ((/(^9$|27)/.test(e.keyCode.toString(10)) && isActive && (that.multiple || that.options.liveSearch)) || (/(27)/.test(e.keyCode.toString(10)) && !isActive)) {
    //         that.$menu.parent().removeClass('open');
    //         if (that.options.container) that.$newElement.removeClass('open');
    //         that.$button.focus();
    //     }
    // }
    //
    // private mobile() {
    //     this.$element.addClass('mobile-device');
    // }
    //
    // private refresh() {
    //     this.$lis = null;
    //     this.liObj = {};
    //     this.reloadLi();
    //     this.render();
    //     this.checkDisabled();
    //     this.liHeight(true);
    //     this.setStyle();
    //     this.setWidth();
    //     if (this.$lis) this.$searchbox.trigger('propertychange');
    //
    //     this.$element.trigger('refreshed.bs.select');
    // }
    //
    // private hide() {
    //     this.$newElement.hide();
    // }
    //
    // private show() {
    //     this.$newElement.show();
    // }
    //
    // private remove() {
    //     this.$newElement.remove();
    //     this.$element.remove();
    // }
    //
    // private destroy() {
    //     this.$newElement.before(this.$element).remove();
    //
    //     if (this.$bsContainer) {
    //         this.$bsContainer.remove();
    //     } else {
    //         this.$menu.remove();
    //     }
    //
    //     this.$element
    //         .off('.bs.select')
    //         .removeData('selectpicker')
    //         .removeClass('bs-select-hidden selectpicker');
    // }

}
