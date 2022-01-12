// import { Component } from "react";

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Subject</th>
                <th>Ser</th>
                <th>Ver</th>
                <th>Tener</th>
                <th>Hablar</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const rows = props.sdata.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.subject}</td>
                <td>{row.ser}</td>
                <td>{row.ver}</td>
                <td>{row.tener}</td>
                <td>{row.hablar}</td>
                <td>
                    <button onClick={() => {props.removeData(index)}}>Delete</button>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

const Table = (props) => {
    const {sdata, removeData} = props
    return (
        <table>
            <TableHeader />
            <TableBody sdata={sdata} removeData={removeData} />
        </table>
    )
}

// class Table extends Component {
//     render() {
//         const {sdata} = this.props

//         return (
//             <table>
//                 <TableHeader />
//                 <TableBody sdata={sdata} />
//             </table>
//         )
//     }
// }

export default Table