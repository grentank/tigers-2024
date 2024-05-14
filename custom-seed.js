const { Track, Album, Artist } = require('./db/models');

async function seed() {
  await Artist.bulkCreate([{ name: 'Adele' }, { name: 'RHCP' }, { name: 'The Beatles' }]);

  await Album.bulkCreate([
    { name: '21', year: 2011, artistId: 1 },
    { name: '25', year: 2015, artistId: 1 },
    { name: 'Californication', year: 1999, artistId: 2 },
    { name: 'Stadium Arcadium', year: 2006, artistId: 2 },
    { name: 'Abbey Road', year: 1969, artistId: 3 },
    { name: 'The Beatles', year: 1968, artistId: 3 },
  ]);

  await Track.bulkCreate([
    { title: 'Rolling in the deep', albumId: 1, duration: 228 },
    { title: 'Rumor has it', albumId: 1, duration: 233 },
    { title: 'Take it all', albumId: 1, duration: 268 },
    { title: 'Hello', albumId: 2, duration: 300 },
    { title: 'Remedy', albumId: 2, duration: 257 },
    { title: 'Californication', albumId: 3, duration: 222 },
    { title: 'Otherside', albumId: 3, duration: 255 },
    { title: 'Easily', albumId: 3, duration: 231 },
    { title: 'Snow', albumId: 4, duration: 335 },
    { title: 'Dani California', albumId: 4, duration: 286 },
    { title: 'Come together', albumId: 5, duration: 260 },
    { title: 'Something', albumId: 5, duration: 183 },
    { title: 'Eight days in a week', albumId: 6, duration: 183 },
    { title: 'No reply', albumId: 6, duration: 136 },
  ]);
}

seed();
