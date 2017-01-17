import React from 'react';
import YearItem from './yearItem';

const YearsList = ({onYearSelect}) => {

    const Years = [];
    const startAPIYear = 2000;
    const currentYear = new Date().getFullYear();

    const getYears = () => {
        for (let i = startAPIYear; i <= currentYear; i++) {
            Years.push(i);
        }
        return Years;
    };

    const YearsArray = getYears();

    const YearsItems = YearsArray.map((Year) => {
            return (
                <YearItem
                    key={Year}
                    Year={Year}
                    onYearSelect={onYearSelect}
                />
            );
        }
    );

    return (
        <ul className="col-md-4 list-group">
            {YearsItems}
        </ul>
    );
};

export default YearsList;