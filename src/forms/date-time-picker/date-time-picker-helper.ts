export const datePickerModes = [
    {
        clsName: 'days',
        navFnc: 'M',
        navStep: 1,
    },
    {
        clsName: 'months',
        navFnc: 'y',
        navStep: 1,
    },
    {
        clsName: 'years',
        navFnc: 'y',
        navStep: 10,
    },
    {
        clsName: 'decades',
        navFnc: 'y',
        navStep: 100,
    },
];

export const keyMap = {
    'up': 38,
    38: 'up',
    'down': 40,
    40: 'down',
    'left': 37,
    37: 'left',
    'right': 39,
    39: 'right',
    'tab': 9,
    9: 'tab',
    'escape': 27,
    27: 'escape',
    'enter': 13,
    13: 'enter',
    'pageUp': 33,
    33: 'pageUp',
    'pageDown': 34,
    34: 'pageDown',
    'shift': 16,
    16: 'shift',
    'control': 17,
    17: 'control',
    'space': 32,
    32: 'space',
    't': 84,
    84: 't',
    'delete': 46,
    46: 'delete',
};

export const viewModes = ['days', 'months', 'years', 'decades'];
export const verticalModes = ['top', 'bottom', 'auto'];
export const horizontalModes = ['left', 'right', 'auto'];
export const toolbarPlacements = ['default', 'top', 'bottom'];
