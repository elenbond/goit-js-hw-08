import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector("#vimeo-player");

const LOCALSTORAGE_KEY_TIME = "videoplayer-current-time";

const player = new Vimeo.Player(iframe);

const onPlay = (data) => {
    localStorage.setItem(LOCALSTORAGE_KEY_TIME, data.seconds);
}
player.on("timeupdate", throttle(onPlay, 1000));

const currentTime = localStorage.getItem(LOCALSTORAGE_KEY_TIME);
player.setCurrentTime(currentTime);