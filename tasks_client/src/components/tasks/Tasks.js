import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import List from './list/List'
import Create from './create/Create'

class Tasks extends Component {
  constructor(props) {
    super (props)

    this.state = {
      tasks: []
    }

    this.loadTasks = this.loadTasks.bind(this)
  }

  componentDidMount() {
    this.loadTasks()
  }

  async loadTasks() {
    let response = await fetch(`http://localhost:3001/tasks`);
    const tasks = await response.json();
    this.setState({ tasks: tasks });
  }
  render() {
    return (
      <Row>
        <Col xs={{ span: 8, offset: 2 }} className="tasks_list">
          <p className="title">To-do</p>
          <List loadTasks={this.loadTasks} tasks={this.state.tasks.filter((task) => task.done !== true)} />
          <Create loadTasks={this.loadTasks} />
        </Col>
        <Col xs={{ span: 8, offset: 2 }} className="tasks_list">
          <p className="title">Done</p>
          <List loadTasks={this.loadTasks} tasks={this.state.tasks.filter((task) => task.done === true)} />
        </Col>
      </Row>
    );
  }
}

export default Tasks
