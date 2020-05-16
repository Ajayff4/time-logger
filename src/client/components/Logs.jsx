import React, { Component } from 'react'

class Logs extends Component {
    tableData = [
        {
            "key": 1,
            "tag": "sleeping",
            "category": "official",
            "time": "8:30 AM",
            "details": "--"
        },
        {
            "key": 2,
            "tag": "sleeping",
            "category": "official",
            "time": "8:30 AM",
            "details": "--"
        },
        {
            "key": 3,
            "tag": "sleeping",
            "category": "official",
            "time": "8:30 AM",
            "details": "--"
        },
        {
            "key": 4,
            "tag": "sleeping",
            "category": "official",
            "time": "8:30 AM",
            "details": "--"
        },
        {
            "key": 5,
            "tag": "sleeping",
            "category": "official",
            "time": "8:30 AM",
            "details": "--"
        },
        {
            "key": 6,
            "tag": "sleeping",
            "category": "official",
            "time": "8:30 AM",
            "details": "--"
        },
        {
            "key": 7,
            "tag": "sleeping",
            "category": "official",
            "time": "8:30 AM",
            "details": "--"
        },
        {
            "key": 8,
            "tag": "sleeping",
            "category": "official",
            "time": "8:30 AM",
            "details": "--"
        },
        {
            "key": 9,
            "tag": "sleeping",
            "category": "official",
            "time": "8:30 AM",
            "details": "--"
        },
        {
            "key": 10,
            "tag": "sleeping",
            "category": "official",
            "time": "8:30 AM",
            "details": "--"
        },
        {
            "key": 11,
            "tag": "sleeping",
            "category": "official",
            "time": "8:30 AM",
            "details": "--"
        },
        {
            "key": 12,
            "tag": "sleeping",
            "category": "official",
            "time": "8:30 AM",
            "details": "--"
        }
    ];
    render() {
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
                                        for (let attribute in row) {
                                            rowData.push(<><td key={attribute}>{row[attribute]}</td></>);
                                        }
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