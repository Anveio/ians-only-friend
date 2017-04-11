class YouTubeClip {
  constructor(videoTitle, videoUrl, seek, duration=null, volume=2){
    this.videoTitle = videoTitle;
    this.videoUrl = videoUrl;
    this.options = {
      seek: seek,
      volume: volume
    };
    this.duration = duration;
  }
}

exports.ericAndreClips = [
  new YouTubeClip("Ranch It Up", "https://www.youtube.com/watch?v=nseBliU80LM", 0, 3400),
  new YouTubeClip("Wanna Hit This Ranch?", "https://www.youtube.com/watch?v=nseBliU80LM", 19, 1500),
  new YouTubeClip("You're Mellow Mike", "https://www.youtube.com/watch?v=nseBliU80LM", 70, 3800),
  new YouTubeClip("You're Watching Bird Up", "https://www.youtube.com/watch?v=lY2K6urgZzs", 0, 4500, 1),
  new YouTubeClip("Can I Get a Squirt", "https://www.youtube.com/watch?v=lY2K6urgZzs", 320, 3000, 1),
  new YouTubeClip("Yah Boobay", "https://www.youtube.com/watch?v=zdOQ5pCWiyI", 91.5, 3000),
  new YouTubeClip("Legalize Ranch", "https://www.youtube.com/watch?v=0V7FGCtnoJo", 46.5, 3500),
  new YouTubeClip("Investigate 311", "https://www.youtube.com/watch?v=E-TRR5zBLrI", 3, 9000, 3),
  new YouTubeClip("I Don't Give a Shit About Baseball", "https://www.youtube.com/watch?v=BaWa4ScfQXc", 46.5, 7400),
  new YouTubeClip("I Go Hard In The Paint", "https://www.youtube.com/watch?v=rSHvJJqrd2k", 46, 8000, 3),
  new YouTubeClip("You Didn't Get the Abortion?", "https://www.youtube.com/watch?v=XQxCCuUEI9E", 375, 3000),
  new YouTubeClip("L Ron Hubbard Was a Black Man", "https://www.youtube.com/watch?v=yet2Q0M32GQ", 8, 10500),
  new YouTubeClip("Hillary I'm Gonna Squirt", "https://www.youtube.com/watch?v=soDG0276JEs", 159, 10000),
  new YouTubeClip("I Want You To Have Sex With My Wife", "https://www.youtube.com/watch?v=vL8Dz4mGv1g", 108, 13000),
  new YouTubeClip("This Desk Looks Like A Boat", "https://www.youtube.com/watch?v=efzL_8jOx7s", 35, 9000),
  new YouTubeClip("You Said Ching Chong", "https://www.youtube.com/watch?v=UpHQTU6Jcd8", 38, 12000, 3),
  new YouTubeClip("I Believe in White Supremacy", "https://www.youtube.com/watch?v=umHEax4N29o", 20.5, 11000, 3),
  new YouTubeClip("Nightmare, Nightmare, Nightmare", "https://www.youtube.com/watch?v=OUIT51Bp-Is", 0,  15000),
  new YouTubeClip("Jacking Off to Django Unchained", "https://www.youtube.com/watch?v=q4fR2vvTkpI", 205, 11500),
  new YouTubeClip("I Did Not Get the Job at Froot Loops", "https://www.youtube.com/watch?v=9UlXcoVHnog", 5.5, 15000),
  new YouTubeClip("My Real Voice", "https://www.youtube.com/watch?v=ZqFg0autvM8", 89, 2400),
  new YouTubeClip("Have You Been Exposed to HIV", "https://www.youtube.com/watch?v=TtJI85veuPc", 156.5, 11000),
  new YouTubeClip("Yo You're Beautiful Man", "https://www.youtube.com/watch?v=IS-F50GI9Zo", 43, 3500),
  new YouTubeClip("Snort As Much As Possible", "https://www.youtube.com/watch?v=XFNVeFQ0cEk", 2, 8000, 3),
  new YouTubeClip("Are You a Boat or Not", "https://www.youtube.com/watch?v=efzL_8jOx7s", 65, 4000, 2),
  new YouTubeClip("You Ever Have Sex With Somebody That's Asleep", "https://www.youtube.com/watch?v=mHX0kR58Y1w", 112, 5500),
  new YouTubeClip("Are You For Real?", "https://www.youtube.com/watch?v=lTGpBdVtf4s", 30, 5000),
  new YouTubeClip("You Ready For Some Autism?", "https://www.youtube.com/watch?v=lTGpBdVtf4s", 105, 2000),
  new YouTubeClip("I'm Against Abortion", "https://www.youtube.com/watch?v=VH-gi3lT8p0", 34, 13000),
  new YouTubeClip("You Were in a Controversial Show", "https://www.youtube.com/watch?v=gFHNJ8PtLNA", 70, 7000),
  new YouTubeClip("Do You Shave Your Pubes?", "https://www.youtube.com/watch?v=y6A_lSlD8sM", 46, 6000),
  new YouTubeClip("311 Never Happened", "https://www.youtube.com/watch?v=y6A_lSlD8sM", 208, 8000, 3),
  new YouTubeClip("I Don't Trust Like That", "https://www.youtube.com/watch?v=zONW46d50A0", 39.5, 5000, 2),
  ];

exports.ianClips = [
  new YouTubeClip("Age of Mythology's 999 Theme ", "https://www.youtube.com/watch?v=wP4B6KOcbo0", 10, 8000, 2)
];