# Consultas en POSTman
{
  "query": "mutation { addComic(comicName: \"NEW MUTANTS\", comicYear: 2024, comicNumber: 1, idPublisher: 1) { idComic, comicName, comicYear, comicNumber, idPublisher } }"
}

{
    "query": "{ comics { comicName, comicNumber } }"
}

# Consultas en apollo server studio
query {
  comics {
    idComic, comicName, comicNumber
  } 
}


mutation {
  addComic(comicName: "Nombre del cómic", comicYear: 2022, comicNumber: 1, idPublisher: 1) {
    idComic
    comicName
    comicYear
    comicNumber
    idPublisher
  }
}

mutation {
  updateComic(idComic: "8", comicName: "wuchumara") {
    idComic
    comicName
    comicYear
    comicNumber
    idPublisher
  }
}

mutation {
  deleteComic(idComic: "8")
}

query {
  getComics {
    idComic
    idPublisher
    comicName
    comicYear
    comicNumber
    publisherName
  }
}