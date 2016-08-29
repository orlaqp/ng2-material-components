> Inputs

| Name     | Type     | Description   |
|----------|----------|---------------|
| color            |  string  | Sets the header color. Available values are: `blue`, `lightblue`, `pink`, `yellow`, `green`  |
| addMenuTrigger   | boolean  | Adds a menu trigger to the bar  |
| logoPath         | string   | If you want to show a log instead of brand just pass the path in here  |
| brand            | string   | your company brand, you should either use the option above or this one not both  |
| sidebarOpen      | boolean  | Indicates if the site sidebar should be opened  |

> Outputs

| Name             | Event Data       | Description   |
|------------------|------------------|---------------|
| onSidebarToggle  | boolean          | This is an event that gets fired when the sidebar toggle gets updated  |
