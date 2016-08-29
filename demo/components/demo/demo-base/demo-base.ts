export interface IComponent {
    category: string;
    key: string;
    component: any;
    title?: string;
    readme?: string;
    html?: string;
    htmlRaw?: string;
    ts?: string;
    tsRaw?: string;
    api?: string;
};

export function processComponents(components: IComponent[]): void {
    components.forEach(component => {
        const { category, key } = component;
        const componentFolder = category + '/' + key + '/';
        const componentFile = componentFolder + key;

        component.html = require('!!prismjs?lang=markup!../' + componentFile + '.html');
        component.ts = require('!!string-replace?search=../../../../../dist&replace=ng2-materialform!prismjs?lang=typescript!../' + componentFile + '.ts');

        if (!component.title) {
            component.title = key.charAt(0).toUpperCase() + key.slice(1);
        }

        if (!component.readme) {
            component.readme = require('../' + componentFolder + 'README.md');
        }

        if (!component.api) {
            component.api = require('../' + componentFolder + 'API.md');
        }

        // Retrieve raw for live editing in plunker
        component.htmlRaw = require('!!raw!../' + componentFile + '.html');
        component.tsRaw = require('!!raw!../' + componentFile + '.ts');
    });
}
