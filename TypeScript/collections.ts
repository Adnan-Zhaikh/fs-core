interface MediaTrack {
    trackId: string;
    title: string;
    artist: string;
    durationSeconds: number;
    isStreamable: boolean;
}

const streamingQueue: MediaTrack[] = [
    { trackId: "PP1", title: "BabyDoll", artist: "Stranger", durationSeconds: 180, isStreamable: true },
    { trackId: "PE2", title: "Ransom", artist: "Strangers", durationSeconds: 120, isStreamable: true }
];

function displayQueue(track: MediaTrack[]): void {
    for (let i = 0; i < track.length; i++) {
        console.log(`Track #${i + 1}: "${track[i].title}" by ${track[i].artist}`);
    }
}

displayQueue(streamingQueue);
