const videoPlayer = document.getElementById('video-player')
const videoSource = videoPlayer.querySelector('source')

console.log(videoSource)

const listOfVids = [
  "https://s3.amazonaws.com/drawing.on.web/media+lettingGo/Chess_06_Videvo.mp4",
  "https://s3.amazonaws.com/drawing.on.web/media+lettingGo/Chess_03_Videvo.mp4",
  "https://s3.amazonaws.com/drawing.on.web/media+lettingGo/Chess_16_Videvo.mp4",
  "https://s3.amazonaws.com/drawing.on.web/media+lettingGo/Dense_fog_ahead_of_Forest.mp4",
  "https://s3.amazonaws.com/drawing.on.web/media+lettingGo/hd0970.mp4",
  "https://s3.amazonaws.com/drawing.on.web/media+lettingGo/hd0936.mp4",
  "https://s3.amazonaws.com/drawing.on.web/media+lettingGo/171124_C1_HD_012.mp4",
  "https://s3.amazonaws.com/drawing.on.web/media+lettingGo/JP_Park_Sakura_E_20180330.mp4"
]

let currVideo = 0

setInterval(() => {
  videoPlayer.pause();
  currVideo = (++currVideo) % listOfVids.length;
  videoSource.setAttribute("src", listOfVids[currVideo])
  videoPlayer.load();
  videoPlayer.play();

  console.log('ready')

}, 12000)
