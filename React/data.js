const data = [
  {
    id: 1,
    img: "./it.png",
    title: "IT MOVIE",
    desc: "Horror movie ",
  },
  {
    id: 2,
    img: "./run.png",
    title: "RUN MOVIE",
    desc: "Suspence Thriller Movie ",
  },
  {
    id: 3,
    img: "./harryp.png",
    title: "HARRY POTTER MOVIE",
    desc: "Fantacy Movie ",
  },
  {
    id: 4,
    img: "./avatar.png",
    title: "Avatar MOVIE",
    desc: "Fantacy movie ",
  },
  {
    id: 5,
    img: "./fall.png",
    title: "FALL MOVIE",
    desc: "Survival movie ",
  },
  {
    id: 6,
    img: "./martian.jpg",
    title: "Martian MOVIE",
    desc: "Science fiction movie ",
  },
  {
    id: 7,
    img: "./scream.png",
    title: "Scream MOVIE",
    desc: "Horror movie ",
  },
  {
    id: 8,
    img: "./silence.png",
    title: "Silence MOVIE",
    desc: "Thriller movie ",
  },
  {
    id: 9,
    img: "./shutter.png",
    title: "Shutter MOVIE",
    desc: "Psychateric movie ",
  },
  {
    id: 10,
    img: "./heridity.png",
    title: "HERIDITARY MOVIE",
    desc: "Horror movie ",
  },
];

data.map((item)=>{
console.log(`ID:${item.id}`)
console.log(`IMG:${item.img}`)
console.log(`TITLE:${item.title}`)
console.log(`DESCRIPTION:${item.desc}`)
console.log("---------------------------------")
})

