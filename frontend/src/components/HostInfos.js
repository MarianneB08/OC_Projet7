import React from 'react';

const HostInfos = ({ host, rating }) => {
    return (
        <div>
            <div>
                <p>{host.name}</p>
                <img src={host.picture} alt={host.name} />
                <div>{rating}</div>
            </div>

        </div>
    );
};

export default HostInfos;