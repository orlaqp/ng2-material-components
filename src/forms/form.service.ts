import { Injectable } from '@angular/core';

@Injectable()
export class FormService {
    public localizationService: any;

    /**
     * Inject an i18n processor into the library
     */
    setLocationService(localizationService: any) {
        this.localizationService = localizationService;
    }

    translate(key: string) {
        if (!this.localizationService) {
            return key;
        }

        return this.localizationService.translate.apply(this.localizationService, [key]);
    }
}
