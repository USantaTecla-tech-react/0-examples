import { useState } from 'react';
import { CountryTableLanguageFilter } from './CountryTableLanguageFilter';
import { CountryTableColumnFilter } from './CountryTableColumnFilter';
import { CountryTableHeader } from './CountryTableHeader';
import { CountryTableBody } from './CountryTableBody';
import './CountryTable.css';
import { useFetchCountries } from '../../hooks/useFetchCountries';
import { CountryColumn } from './CountryColumn.types';

export const CountryTable: () => JSX.Element = () => {
    const [isLoading, countries] = useFetchCountries();
    const [columns, setColumns] = useState<CountryColumn[]>([
        { name: 'name', isVisible: true, field: 'name.spa.common' },
        { name: 'cca3', isVisible: true, field: 'cca3' },
        { name: 'capital', isVisible: true, field: 'capital' },
        { name: 'currencies', isVisible: true, field: 'currencies' },
        { name: 'flag', isVisible: true, field: 'flag' },
        { name: 'languages', isVisible: true, field: 'languages' },
        { name: 'region', isVisible: true, field: 'region' },
        { name: 'subregion', isVisible: true, field: 'subregion' },
        { name: 'population', isVisible: true, field: 'population' },
    ]);

    return (
        <>
            {isLoading ? (
                <span>Loading...</span>
            ) : (
                <>
                    <CountryTableLanguageFilter setColumns={setColumns} />
                    <CountryTableColumnFilter
                        columns={columns}
                        setColumns={setColumns}
                    />
                    <table className="table table-striped table-sm">
                        <CountryTableHeader columns={columns} />
                        <CountryTableBody columns={columns} rows={countries} />
                    </table>
                </>
            )}
        </>
    );
};
