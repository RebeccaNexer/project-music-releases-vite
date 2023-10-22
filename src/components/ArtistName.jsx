import PropTypes from 'prop-types';

export const ArtistName = ({ artistName, externalUrl}) => {
    return (
        <div className="artistName">
             <a className="artistNameColor" href={externalUrl} target="_blank" rel=" noopener noreferrer">
               {artistName}
            </a>
        </div>
    );
};

ArtistName.propTypes = {
    artistName: PropTypes.string.isRequired,
    externalUrl: PropTypes.string.isRequired
};