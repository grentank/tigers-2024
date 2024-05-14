const { Album, Artist, Track } = require('./db/models');

async function main() {
  //   const tracks = await Track.findAll();
  //   console.log(tracks);
  //   const oneTrack = await Track.findOne({ where: { duration: 300 } });
  //   console.log(oneTrack.get());
  //   const tracks = await Track.findAll({ where: { albumId: 1 } });
  //   console.log(tracks.map((el) => el.get()));
  // album.name === '25'
  //   const tracks = await Track.findAll({ where: { albumId: 1 }, include: Album });
  //   console.log(
  //     tracks.map((el) => el.get()),
  //     tracks[1].Album.name,
  //   );
  //   const targetAlbum = await Album.findOne({
  //     where: { name: '25' },
  //     include: Track,
  //   });
  //   console.log(
  //     JSON.parse(JSON.stringify(targetAlbum)).Tracks.map((track) => track.title),
  //   );
  //   const albumTracks = await Track.findAll({
  //     include: {
  //       model: Album,
  //       where: { name: '25' },
  //     },
  //   });
  //   console.log(JSON.parse(JSON.stringify(albumTracks)));
  const artist = await Artist.findOne({
    where: { name: 'The Beatles' },
    include: {
      model: Album,
      include: Track,
    },
  });
  console.log(
    JSON.stringify(artist, null, 2),
    artist.Albums[0].Tracks.map((track) => track.title),
  );
}

main();
