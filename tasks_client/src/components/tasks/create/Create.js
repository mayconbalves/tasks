import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from '../../button/Button'
import Form from 'react-bootstrap/Form'
import { CREATE_TASK } from '../../../api'

const CreateTask = ({ loadTasks }) => {
  const [title, setTitle] = useState('')
  const [show, setShow] = useState('')

  const handleSubmit = async () => {
    await fetch(`${CREATE_TASK}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        task: { title: title, done: false }
      })
    })
    setShow(false)
    setTitle('')
    loadTasks()
  }

  return (
    <>
      <Button
        onClick={() => setShow(true)}
        variant="dark"
        className="float-right create_task_btn"
        title="+ Tasks"
      />

      <Modal show={show || false} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="email"
            placeholder="Enter with your task..."
            value={title || ''}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShow(false)}
            title="Close"
          />

          <Button
            variant="dark"
            type="button"
            onClick={handleSubmit}
            title="Create"
          />
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CreateTask
