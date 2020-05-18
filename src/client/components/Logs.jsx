import React, { Component } from 'react'

class Logs extends Component {
    tableData = [
        {
            "key": "#",
            "tag": "Tag",
            "category": "Category",
            "time": "Time",
            "duration": "Duration",
            "details": "Details",
            "operations": "Operations"
        },
        {
            "key": 1,
            "tag": "sleeping",
            "category": "official",
            "time": "8:30 AM",
            "duration": "5min",
            "details": "--"
        },
        {
            "key": 2,
            "tag": "sleeping",
            "category": "official",
            "time": "8:30 AM",
            "duration": "10min",
            "details": "--"
        },
        {
            "key": 3,
            "tag": "sleeping",
            "category": "official",
            "time": "8:30 AM",
            "duration": "15min",
            "details": "--"
        },
        {
            "key": 4,
            "tag": "sleeping",
            "category": "official",
            "time": "8:30 AM",
            "duration": "20min",
            "details": "--"
        },
        {
            "key": 5,
            "tag": "sleeping",
            "category": "official",
            "time": "8:30 AM",
            "duration": "25min",
            "details": "--"
        },
        {
            "key": 6,
            "tag": "sleeping",
            "category": "official",
            "time": "8:30 AM",
            "duration": "30min",
            "details": "--"
        },
        {
            "key": 7,
            "tag": "sleeping",
            "category": "official",
            "time": "8:30 AM",
            "duration": "35min",
            "details": "--"
        },
        {
            "key": 8,
            "tag": "sleeping",
            "category": "official",
            "time": "8:30 AM",
            "duration": "40min",
            "details": "--"
        },
        {
            "key": 9,
            "tag": "sleeping",
            "category": "official",
            "time": "8:30 AM",
            "duration": "45min",
            "details": "--"
        },
        {
            "key": 10,
            "tag": "sleeping",
            "category": "official",
            "time": "8:30 AM",
            "duration": "50min",
            "details": "--"
        },
        {
            "key": 11,
            "tag": "sleeping",
            "category": "official",
            "time": "8:30 AM",
            "duration": "55min",
            "details": "--"
        },
        {
            "key": 12,
            "tag": "sleeping",
            "category": "official",
            "time": "8:30 AM",
            "duration": "60min",
            "details": "--"
        }
    ];
    render() {
        let BUTTON_FLAG = false;
        return (
            <>
                <h2>Logs Component</h2>
                <center>
                    <div className="container">
                        <table className="table table-dark table-striped log-table-css">
                            <tbody>
                                {

                                    this.tableData.map(row => {
                                        let rowData = [];
                                        rowData.push(<tr>

                                        </tr>)
                                        for (let attribute in row) {
                                            rowData.push(<><td key={attribute + row.id}>{row[attribute]}</td></>);
                                        }
                                        if (BUTTON_FLAG === true)
                                            rowData.push(<td><button id="editButton">Edit</button><button id="deleteButton">Delete</button></td>);
                                        BUTTON_FLAG = true;
                                        return (<tr key={row.id}>{rowData}</tr>);
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </center>
            </>
        )
    }
}

export default Logs;