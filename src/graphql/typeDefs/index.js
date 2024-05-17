const { gql } = require('apollo-server');

const typeDefs = gql`
  type Mutation {
    addComic(comicName: String!, comicYear: Int, comicNumber: Int, idPublisher: Int): Comic!
    updateComic(idComic: ID!, comicName: String, comicYear: Int, comicNumber: Int, idPublisher: Int): Comic!
    deleteComic(idComic: ID!): ID!
  } 
  
  type Comic {
    idComic: ID!
    comicName: String
    comicYear: Int
    comicNumber: Int
    idPublisher: ID
  }

  type ComicSP {
    idComic: ID
    idPublisher: ID
    comicName: String
    comicYear: Int
    comicNumber: Int
    publisherName: String
  }

  type Publisher {
    idPublisher: ID!
    publisherName: String
  }

  type Query {
    comics: [Comic]
    getComics: [ComicSP]
  }
`;

module.exports = typeDefs;