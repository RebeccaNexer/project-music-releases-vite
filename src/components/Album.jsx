import { AlbumName } from "./AlbumName";
import { ArtistName } from "./ArtistName";
import { CoverImage } from "./CoverImage";
import PropTypes from 'prop-types';

export const Album = ({ albumInfo }) => {
     const artists = albumInfo.artists.map(artist => artist.name).join(', ');

    return (
        <div className="albumCover">
            <CoverImage images={albumInfo.images[1].url} />
            <div className="albumName">
                <AlbumName albumName={albumInfo.name} externalUrl={albumInfo.external_urls.spotify} />
                <ArtistName artistName={artists} externalUrl={albumInfo.artists[0].external_urls.spotify} />
            </div>
        </div>
    );
};

Album.propTypes = {
    albumInfo: PropTypes.object.isRequired,
};