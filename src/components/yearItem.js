import React from 'react';

const YearItem = ({onYearSelect, Year}) => {
    return (
        <li className="list-group-item" onClick={() => onYearSelect(Year)}>
            <div className="media">
                <div className="media-body">
                    <div className="media-heading">
                        {Year}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default YearItem;