import React,{Component} from "react";
import StudentApp from "./studentform";


export class StudentData extends Component {
    state = {
        students: [],
    }
  
    handleSubmit = (student) => {
        this.setState({ students: [...this.state.students, student] })
    }
    render() {
        const { students } = this.state
        return (
            <div className="container">
                <Table StudentData={students} />
                <br />
                <Form  handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}
