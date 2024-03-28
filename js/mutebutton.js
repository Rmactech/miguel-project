function toggleMute() {
    var videoPlayer = document.getElementById("video-player");
    
    if (videoPlayer.muted) {
        videoPlayer.muted = false;
        document.getElementById("mute-toggle-button").textContent = "mute";
    } else {
        videoPlayer.muted = true;
        document.getElementById("mute-toggle-button").textContent = "unmute";
    }
}
