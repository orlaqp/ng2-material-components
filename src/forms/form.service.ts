import { Injectable } from '@angular/core';

@Injectable()
export class FormService {
    private _i18nProcessor: Function;

    /**
     * Inject an i18n processor into the library
     */
    setI18nProcessor(processor: Function) {
        this._i18nProcessor = processor;
    }

    /**
     * Translate an string to the selected locale for the i18n processor
     */
    translate(key: string, ...args: any[]) {
        if (this._i18nProcessor) {
            return this._i18nProcessor(key, ...args);
        }

        return key;
    }
}
