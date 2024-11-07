import alt from '@altv/server';
import DBService from "./services/DBService";

alt.Events.onResourceStart(async () => {
    alt.log(`~g~Resource Starting...`);

    await DBService.create()

    alt.log(`~g~Resource Started`);
});