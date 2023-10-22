import PropTypes from 'prop-types';

export const AlbumName = ({ albumName, externalUrl}) => {
    return (
        <div className="albumName">
            <a className="albumNameColor" href={externalUrl} target="_blank" rel="noopener noreferrer">
                {albumName}
            </a>
        </div>
    );
};

AlbumName.propTypes = {
    albumName: PropTypes.string.isRequired,
    externalUrl: PropTypes.string.isRequired,
};