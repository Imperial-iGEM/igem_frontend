import React, { Component } from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class TheDataTable extends Component {
    constructor(props) {
        super();

        this.state = {
            columnDefs: [
                {headerName: 'Part / Linker ID', field: 'part', width: '227'},
                {headerName: 'Concentration (μg/ml)', field: 'concentration', editable: true, width: '227'},
                {headerName: 'Plate Number', field: 'plate_number', editable: true, width: '227'},
                {headerName: 'Well', field: 'well', editable: true, width: '227'}

            ],
            rowData: [
                {part: 'BASIC_mCherry_ORF.1', concentration: '50.0', plate_number: '1', well: 'A1'},
                {part: 'BASIC_sfGFP_ORF.1', concentration: '50.0', plate_number: '1', well: 'A2'},
                {part: 'BASIC_mTagBFP2_ORF.1', concentration: '50.0', plate_number: '1', well: 'A3'}
            ]
        }
    }

    render() {

        var outputArray = []
        var i;
        for (i = 0; i < this.props.partsList.length; i++) {
            var temp = {
                part: this.props.partsList[i], concentration: '50.0', plate_number: '1', well: 'A'+String(i+1)
            }
            outputArray.push(temp);
            temp = {};
        }

        this.state.rowData = outputArray;


        return (
            <div
                className="ag-theme-balham"
                style={{ height: '300px', width: '100%' }}
            >
                <AgGridReact
                    enableSorting={true}
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}>
                </AgGridReact>
            </div>
        );
    }
}

export default TheDataTable;