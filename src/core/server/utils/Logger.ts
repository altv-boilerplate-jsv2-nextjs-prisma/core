import alt from '@altv/shared'

export enum ConsoleColor {
    BLACK = '~k~',
    RED = '~r~',
    GREEN = '~g~',
    BLUE = '~b~',
    YELLOW = '~y~',
    MAGENTA = '~m~',
    CYAN = '~c~',
    WHITE = '~w~',
    GREY = '~lk~',
    LIGHT_RED = '~lr~',
    LIGHT_GREEN = '~lg~',
    LIGHT_BLUE = '~lb~',
    LIGHT_YELLOW = '~ly~',
    LIGHT_MAGENTA = '~lm~',
    LIGHT_CYAN = '~lc~',
    LIGHT_WHITE = '~lw~',
}

export default class Logger {
    private readonly _fileName: string;
    private readonly _color: ConsoleColor;

    constructor(fileName: string, color: ConsoleColor = ConsoleColor.LIGHT_WHITE) {
        this._fileName = fileName;
        this._color = color;
    }

    debug(...args: any[]) {
        alt.logDebug(`${this._color}[${this._fileName}]~lk~`, ...args);
    }

    info(...args: any[]) {
        alt.log(`${this._color}[${this._fileName}]~lw~`, ...args);
    }

    warn(...args: any[]) {
        alt.logWarning(`${this._color}[${this._fileName}]~ly~`, ...args);
    }

    error(...args: any[]) {
        alt.logError(`${this._color}[${this._fileName}]~lr~`, ...args);
    }
}
