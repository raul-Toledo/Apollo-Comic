const db = require('../../database/db');

const resolvers = {
  Query: {
    comics: async () => await db.select().table('Comics'),
    getComics: async () => {
      const result = await db.raw('CALL getComicS');
      const comicsSP = result[0][0];
      return comicsSP;
    },
  },
  Mutation: {
    addComic: async (_, { comicName, comicYear, comicNumber, idPublisher }) => {
      const [idComic] = await db('Comics').insert({ comicName, comicYear, comicNumber, idPublisher });
      const newComic = await db('Comics').where({ idComic }).first();
      return newComic;
    },
    
    updateComic: async (_, { idComic, comicName, comicYear, comicNumber, idPublisher }) => {
      await db('Comics').where({ idComic }).update({ comicName, comicYear, comicNumber, idPublisher });
      const updatedComic = await db('Comics').where({ idComic }).first();
      return updatedComic;
    },
    
    deleteComic: async (_, { idComic }) => {
      await db('Comics').where({ idComic }).del();
      return idComic;
    },
  },
};

module.exports = resolvers;