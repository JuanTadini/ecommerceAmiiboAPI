const products = [
  {
    "amiiboSeries": "Super Nintendo World",
    "character": "Peach",
    "gameSeries": "Super Mario",
    "head": "00020003",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00020003-039dff02.png",
    "name": "Peach - Power Up Band",
    "release": {
      "au": null,
      "eu": null,
      "jp": "2021-02-04",
      "na": null
    },
    "tail": "039dff02",
    "type": "Band"
  },
  {
    "amiiboSeries": "Super Nintendo World",
    "character": "Mario",
    "gameSeries": "Super Mario",
    "head": "00000003",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000003-0430ff02.png",
    "name": "Golden - Power Up Band",
    "release": {
      "au": null,
      "eu": null,
      "jp": "2023-03-18",
      "na": null
    },
    "tail": "0430ff02",
    "type": "Band"
  },
  {
    "amiiboSeries": "Super Mario Bros.",
    "character": "Rosalina",
    "gameSeries": "Super Mario",
    "head": "00040000",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00040000-02620102.png",
    "name": "Rosalina",
    "release": {
      "au": "2016-10-08",
      "eu": "2016-10-07",
      "jp": "2016-10-20",
      "na": "2016-11-04"
    },
    "tail": "02620102",
    "type": "Figure"
  },
  {
    "amiiboSeries": "Super Smash Bros.",
    "character": "Rosalina",
    "gameSeries": "Super Mario",
    "head": "00040100",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00040100-00130002.png",
    "name": "Rosalina & Luma",
    "release": {
      "au": "2015-01-29",
      "eu": "2015-01-23",
      "jp": "2015-01-22",
      "na": "2015-02-01"
    },
    "tail": "00130002",
    "type": "Figure"
  },
  {
    "amiiboSeries": "Super Smash Bros.",
    "character": "Wario",
    "gameSeries": "Super Mario",
    "head": "00070000",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00070000-001a0002.png",
    "name": "Wario",
    "release": {
      "au": "2015-04-25",
      "eu": "2015-04-24",
      "jp": "2015-04-29",
      "na": "2015-05-29"
    },
    "tail": "001a0002",
    "type": "Figure"
  },
  {
    "amiiboSeries": "Super Smash Bros.",
    "character": "Diddy Kong",
    "gameSeries": "Super Mario",
    "head": "00090000",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00090000-000d0002.png",
    "name": "Diddy Kong",
    "release": {
      "au": "2014-12-12",
      "eu": "2014-12-19",
      "jp": "2014-12-06",
      "na": "2014-12-14"
    },
    "tail": "000d0002",
    "type": "Figure"
  },
  {
    "amiiboSeries": "Super Nintendo World",
    "character": "Luigi",
    "gameSeries": "Super Mario",
    "head": "00010003",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00010003-039cff02.png",
    "name": "Luigi - Power Up Band",
    "release": {
      "au": null,
      "eu": null,
      "jp": "2021-02-04",
      "na": null
    },
    "tail": "039cff02",
    "type": "Band"
  },
  {
    "amiiboSeries": "Super Smash Bros.",
    "character": "Yoshi",
    "gameSeries": "Super Mario",
    "head": "00030000",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00030000-00020002.png",
    "name": "Yoshi",
    "release": {
      "au": "2014-11-29",
      "eu": "2014-11-28",
      "jp": "2014-12-06",
      "na": "2014-11-21"
    },
    "tail": "00020002",
    "type": "Figure"
  },
  {
    "amiiboSeries": "Super Mario Bros.",
    "character": "Luigi",
    "gameSeries": "Super Mario",
    "head": "00010000",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00010000-00350102.png",
    "name": "Luigi",
    "release": {
      "au": "2015-03-21",
      "eu": "2015-03-20",
      "jp": "2015-03-12",
      "na": "2015-03-20"
    },
    "tail": "00350102",
    "type": "Figure"
  },
  {
    "amiiboSeries": "Skylanders",
    "character": "Bowser",
    "gameSeries": "Super Mario",
    "head": "0005ff00",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_0005ff00-023a0702.png",
    "name": "Hammer Slam Bowser",
    "release": {
      "au": "2015-09-24",
      "eu": "2015-09-25",
      "jp": null,
      "na": "2015-09-20"
    },
    "tail": "023a0702",
    "type": "Figure"
  },
  {
    "amiiboSeries": "Yoshi's Woolly World",
    "character": "Yoshi",
    "gameSeries": "Super Mario",
    "head": "00030102",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00030102-023e0302.png",
    "name": "Mega Yarn Yoshi",
    "release": {
      "au": "2015-11-28",
      "eu": "2015-11-27",
      "jp": "2015-12-10",
      "na": "2015-11-15"
    },
    "tail": "023e0302",
    "type": "Yarn"
  },
  {
    "amiiboSeries": "Super Smash Bros.",
    "character": "Luigi",
    "gameSeries": "Super Mario",
    "head": "00010000",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00010000-000c0002.png",
    "name": "Luigi",
    "release": {
      "au": "2014-12-12",
      "eu": "2014-12-19",
      "jp": "2014-12-06",
      "na": "2014-12-14"
    },
    "tail": "000c0002",
    "type": "Figure"
  },
  {
    "amiiboSeries": "Super Mario Bros.",
    "character": "Yoshi",
    "gameSeries": "Super Mario",
    "head": "00030000",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00030000-00370102.png",
    "name": "Yoshi",
    "release": {
      "au": "2015-03-21",
      "eu": "2015-03-20",
      "jp": "2015-03-12",
      "na": "2015-03-20"
    },
    "tail": "00370102",
    "type": "Figure"
  },
  {
    "amiiboSeries": "Super Mario Bros.",
    "character": "Bowser",
    "gameSeries": "Super Mario",
    "head": "00050000",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00050000-03730102.png",
    "name": "Bowser - Wedding",
    "release": {
      "au": "2017-10-27",
      "eu": "2017-10-27",
      "jp": "2017-10-27",
      "na": "2017-10-27"
    },
    "tail": "03730102",
    "type": "Figure"
  },
  {
    "amiiboSeries": "Super Mario Bros.",
    "character": "Mario",
    "gameSeries": "Super Mario",
    "head": "00000000",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00340102.png",
    "name": "Mario",
    "release": {
      "au": "2015-03-21",
      "eu": "2015-03-20",
      "jp": "2015-03-12",
      "na": "2015-03-20"
    },
    "tail": "00340102",
    "type": "Figure"
  },
  {
    "amiiboSeries": "Super Mario Bros.",
    "character": "Peach",
    "gameSeries": "Super Mario",
    "head": "00020000",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00020000-03720102.png",
    "name": "Peach - Wedding",
    "release": {
      "au": "2017-10-27",
      "eu": "2017-10-27",
      "jp": "2017-10-27",
      "na": "2017-10-27"
    },
    "tail": "03720102",
    "type": "Figure"
  },
  {
    "amiiboSeries": "Skylanders",
    "character": "Donkey Kong",
    "gameSeries": "Super Mario",
    "head": "0008ff00",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_0008ff00-023b0702.png",
    "name": "Turbo Charge Donkey Kong",
    "release": {
      "au": "2015-09-24",
      "eu": "2015-09-25",
      "jp": null,
      "na": "2015-09-20"
    },
    "tail": "023b0702",
    "type": "Figure"
  },
  {
    "amiiboSeries": "8-bit Mario",
    "character": "Mario",
    "gameSeries": "Super Mario",
    "head": "00000000",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-02390602.png",
    "name": "8-Bit Mario Modern Color",
    "release": {
      "au": "2015-10-24",
      "eu": "2015-10-23",
      "jp": "2015-09-10",
      "na": "2015-09-11"
    },
    "tail": "02390602",
    "type": "Figure"
  },
  {
    "amiiboSeries": "Super Smash Bros.",
    "character": "Mario",
    "gameSeries": "Super Mario",
    "head": "00000100",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000100-00190002.png",
    "name": "Dr. Mario",
    "release": {
      "au": "2015-07-23",
      "eu": "2015-07-17",
      "jp": "2015-07-17",
      "na": "2015-09-11"
    },
    "tail": "00190002",
    "type": "Figure"
  },
  {
    "amiiboSeries": "Super Smash Bros.",
    "character": "Bowser",
    "gameSeries": "Super Mario",
    "head": "00050000",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00050000-00140002.png",
    "name": "Bowser",
    "release": {
      "au": "2015-01-29",
      "eu": "2015-01-23",
      "jp": "2015-01-22",
      "na": "2015-02-01"
    },
    "tail": "00140002",
    "type": "Figure"
  },
  {
    "amiiboSeries": "Super Mario Bros.",
    "character": "Mario",
    "gameSeries": "Super Mario",
    "head": "00000300",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000300-03a60102.png",
    "name": "Mario - Cat",
    "release": {
      "au": "2021-02-12",
      "eu": "2021-02-12",
      "jp": "2021-02-12",
      "na": "2021-02-12"
    },
    "tail": "03a60102",
    "type": "Figure"
  },
  {
    "amiiboSeries": "Super Mario Bros.",
    "character": "Mario",
    "gameSeries": "Super Mario",
    "head": "00000000",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-03710102.png",
    "name": "Mario - Wedding",
    "release": {
      "au": "2017-10-27",
      "eu": "2017-10-27",
      "jp": "2017-10-27",
      "na": "2017-10-27"
    },
    "tail": "03710102",
    "type": "Figure"
  },
  {
    "amiiboSeries": "Yoshi's Woolly World",
    "character": "Yoshi",
    "gameSeries": "Super Mario",
    "head": "00030102",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00030102-00430302.png",
    "name": "Light Blue Yarn Yoshi",
    "release": {
      "au": "2015-06-25",
      "eu": "2015-06-26",
      "jp": "2015-07-16",
      "na": "2015-10-16"
    },
    "tail": "00430302",
    "type": "Yarn"
  },
  {
    "amiiboSeries": "Super Mario Bros.",
    "character": "Peach",
    "gameSeries": "Super Mario",
    "head": "00020100",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00020100-03a70102.png",
    "name": "Peach - Cat",
    "release": {
      "au": "2021-02-12",
      "eu": "2021-02-12",
      "jp": "2021-02-12",
      "na": "2021-02-12"
    },
    "tail": "03a70102",
    "type": "Figure"
  },
  {
    "amiiboSeries": "Super Mario Bros.",
    "character": "Wario",
    "gameSeries": "Super Mario",
    "head": "00070000",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00070000-02630102.png",
    "name": "Wario",
    "release": {
      "au": "2016-10-08",
      "eu": "2016-10-07",
      "jp": "2016-10-20",
      "na": "2016-11-04"
    },
    "tail": "02630102",
    "type": "Figure"
  },
  {
    "amiiboSeries": "Super Smash Bros.",
    "character": "Bowser Jr.",
    "gameSeries": "Super Mario",
    "head": "00060000",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00060000-00150002.png",
    "name": "Bowser Jr.",
    "release": {
      "au": "2015-07-23",
      "eu": "2015-07-17",
      "jp": "2015-07-17",
      "na": "2015-09-11"
    },
    "tail": "00150002",
    "type": "Figure"
  },
  {
    "amiiboSeries": "Super Smash Bros.",
    "character": "Donkey Kong",
    "gameSeries": "Super Mario",
    "head": "00080000",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00080000-00030002.png",
    "name": "Donkey Kong",
    "release": {
      "au": "2014-11-29",
      "eu": "2014-11-28",
      "jp": "2014-12-06",
      "na": "2014-11-21"
    },
    "tail": "00030002",
    "type": "Figure"
  },
  {
    "amiiboSeries": "Super Nintendo World",
    "character": "Toad",
    "gameSeries": "Super Mario",
    "head": "000a0003",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_000a0003-03a0ff02.png",
    "name": "Toad - Power Up Band",
    "release": {
      "au": null,
      "eu": null,
      "jp": "2021-02-04",
      "na": null
    },
    "tail": "03a0ff02",
    "type": "Band"
  },
  {
    "amiiboSeries": "Super Smash Bros.",
    "character": "Mario",
    "gameSeries": "Super Mario",
    "head": "00000000",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png",
    "name": "Mario",
    "release": {
      "au": "2014-11-29",
      "eu": "2014-11-28",
      "jp": "2014-12-06",
      "na": "2014-11-21"
    },
    "tail": "00000002",
    "type": "Figure"
  },
  {
    "amiiboSeries": "Super Mario Bros.",
    "character": "Peach",
    "gameSeries": "Super Mario",
    "head": "00020000",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00020000-00360102.png",
    "name": "Peach",
    "release": {
      "au": "2015-03-21",
      "eu": "2015-03-20",
      "jp": "2015-03-12",
      "na": "2015-03-20"
    },
    "tail": "00360102",
    "type": "Figure"
  },
  {
    "amiiboSeries": "Super Smash Bros.",
    "character": "Peach",
    "gameSeries": "Super Mario",
    "head": "00020000",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00020000-00010002.png",
    "name": "Peach",
    "release": {
      "au": "2014-11-29",
      "eu": "2014-11-28",
      "jp": "2014-12-06",
      "na": "2014-11-21"
    },
    "tail": "00010002",
    "type": "Figure"
  },
  {
    "amiiboSeries": "Super Mario Bros.",
    "character": "Mario",
    "gameSeries": "Super Mario",
    "head": "00000000",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-003c0102.png",
    "name": "Mario - Gold Edition",
    "release": {
      "au": "2015-06-25",
      "eu": null,
      "jp": "2015-12-17",
      "na": "2015-03-20"
    },
    "tail": "003c0102",
    "type": "Figure"
  },
  {
    "amiiboSeries": "Super Nintendo World",
    "character": "Mario",
    "gameSeries": "Super Mario",
    "head": "00000003",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000003-039bff02.png",
    "name": "Mario - Power Up Band",
    "release": {
      "au": null,
      "eu": null,
      "jp": "2021-02-04",
      "na": null
    },
    "tail": "039bff02",
    "type": "Band"
  },
  {
    "amiiboSeries": "Yoshi's Woolly World",
    "character": "Yoshi",
    "gameSeries": "Super Mario",
    "head": "00030102",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00030102-00420302.png",
    "name": "Pink Yarn Yoshi",
    "release": {
      "au": "2015-06-25",
      "eu": "2015-06-26",
      "jp": "2015-07-16",
      "na": "2015-10-16"
    },
    "tail": "00420302",
    "type": "Yarn"
  },
  {
    "amiiboSeries": "Super Mario Bros.",
    "character": "Diddy Kong",
    "gameSeries": "Super Mario",
    "head": "00090000",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00090000-02650102.png",
    "name": "Diddy Kong",
    "release": {
      "au": "2016-11-05",
      "eu": "2016-11-04",
      "jp": "2016-10-20",
      "na": "2016-11-04"
    },
    "tail": "02650102",
    "type": "Figure"
  },
  {
    "amiiboSeries": "Yoshi's Woolly World",
    "character": "Yoshi",
    "gameSeries": "Super Mario",
    "head": "00030102",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00030102-00410302.png",
    "name": "Green Yarn Yoshi",
    "release": {
      "au": "2015-06-25",
      "eu": "2015-06-26",
      "jp": "2015-07-16",
      "na": "2015-10-16"
    },
    "tail": "00410302",
    "type": "Yarn"
  },
  {
    "amiiboSeries": "Super Nintendo World",
    "character": "Yoshi",
    "gameSeries": "Super Mario",
    "head": "00030003",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00030003-039fff02.png",
    "name": "Yoshi - Power Up Band",
    "release": {
      "au": null,
      "eu": null,
      "jp": "2021-02-04",
      "na": null
    },
    "tail": "039fff02",
    "type": "Band"
  },
  {
    "amiiboSeries": "Super Mario Bros.",
    "character": "Bowser",
    "gameSeries": "Super Mario",
    "head": "00050000",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00050000-00390102.png",
    "name": "Bowser",
    "release": {
      "au": "2015-03-21",
      "eu": "2015-03-20",
      "jp": "2015-03-12",
      "na": "2015-03-20"
    },
    "tail": "00390102",
    "type": "Figure"
  },
  {
    "amiiboSeries": "Super Mario Bros.",
    "character": "Mario",
    "gameSeries": "Super Mario",
    "head": "00000000",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-003d0102.png",
    "name": "Mario - Silver Edition",
    "release": {
      "au": "2015-05-30",
      "eu": null,
      "jp": null,
      "na": "2015-05-29"
    },
    "tail": "003d0102",
    "type": "Figure"
  },
  {
    "amiiboSeries": "8-bit Mario",
    "character": "Mario",
    "gameSeries": "Super Mario",
    "head": "00000000",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-02380602.png",
    "name": "8-Bit Mario Classic Color",
    "release": {
      "au": "2015-09-12",
      "eu": "2015-11-09",
      "jp": "2015-09-10",
      "na": "2015-09-11"
    },
    "tail": "02380602",
    "type": "Figure"
  },
  {
    "amiiboSeries": "Super Mario Bros.",
    "character": "Donkey Kong",
    "gameSeries": "Super Mario",
    "head": "00080000",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00080000-02640102.png",
    "name": "Donkey Kong",
    "release": {
      "au": "2016-10-08",
      "eu": "2016-10-07",
      "jp": "2016-10-20",
      "na": "2016-11-04"
    },
    "tail": "02640102",
    "type": "Figure"
  },
  {
    "amiiboSeries": "Super Mario Bros.",
    "character": "Toad",
    "gameSeries": "Super Mario",
    "head": "000a0000",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_000a0000-00380102.png",
    "name": "Toad",
    "release": {
      "au": "2015-03-21",
      "eu": "2015-03-20",
      "jp": "2015-03-12",
      "na": "2015-03-20"
    },
    "tail": "00380102",
    "type": "Figure"
  }
]

const agregarIDs = data => {
  const resultados = JSON.stringify(data.map((item, index) => {
    return {
    ...item,
    id: index
    }
  }), null, 2)
  console.log(resultados)
}

agregarIDs(products);
