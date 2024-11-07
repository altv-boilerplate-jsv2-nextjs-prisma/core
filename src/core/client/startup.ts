import alt from '@altv/client';

alt.Events.onResourceStart(async () => {
    alt.log("Client starting...")

    await alt.Streaming.loadModel(alt.hash("mp_m_freemode_01"), true);
    await alt.Streaming.loadModel(alt.hash("mp_f_freemode_01"), true);

    alt.log("Client started")
});