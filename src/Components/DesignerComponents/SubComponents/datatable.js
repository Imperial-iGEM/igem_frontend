import React, { Component } from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class TheDataTable extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div
                className="ag-theme-balham"
                style={{ height: '300px', width: '100%' }}
            >
                <AgGridReact
                    enableSorting={true}
                    columnDefs={this.props.columnDefs}
                    rowData={this.props.rowData}>
                </AgGridReact>
            </div>
        );
    }
}

export default TheDataTable;