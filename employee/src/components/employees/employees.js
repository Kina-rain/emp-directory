import React, { Component } from 'react';

class Employees extends Component {
    constructor() {
        super();
        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        fetch("/api/employees")
        .then(res => res.json())
        .then(employees => this.setState({employees}));
    }

    render(){
    return (
        <div className="container mt-4">
            <input className="form-control light-table-filter" data-table="order-table" type="text" id="myInput" placeholder="Search.."></input>
            <table className="order-table table sortable mt-3" id="myTable">
                <thead className="tHead">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Title</th>
                        <th>Salary</th>
                        <th>Manager</th>
                        <th>Department</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.employees.map(employee =>
                    <tr key={ employee.id }>
                        <td>
                            { employee.firstName }
                        </td>
                        <td>
                            { employee.lastName }
                        </td>
                        <td>
                            { employee.title }
                        </td>
                        <td>
                            { employee.salary }
                        </td>
                        <td>
                            { employee.manager }
                        </td>
                        <td>
                            { employee.department }
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
    }
}
export default Employees;