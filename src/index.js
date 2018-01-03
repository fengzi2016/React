import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'


class Index extends Component{
    render(){
      return (
        <div>
          <LessonsList lessons = {lessons} />
        </div>
        
        )
    }
  }
  class Lesson extends Component {
    print(){
      const index = this.props.in;
      console.log(index+ '-' + this.props.lesson.title);
    }
    render(){
      const lesson = this.props.lesson
      return (
        <div onClick = {this.print.bind(this)} >
          <h1>{lesson.title}</h1>
          <p>{lesson.description}</p>
        </div>
        )
    }
  }
  
  class LessonsList extends Component {
    render(){
      const lessons =this.props.lessons
      return(
        <div>
        {lessons.map((les,index)=>
          <Lesson lesson = {les} key = {index} in = {index} />
        )}
        </div>
        )
    }
  }
  
  
  const lessons = [
    { title: 'Lesson 1: title', description: 'Lesson 1: description' },
    { title: 'Lesson 2: title', description: 'Lesson 2: description' },
    { title: 'Lesson 3: title', description: 'Lesson 3: description' },
    { title: 'Lesson 4: title', description: 'Lesson 4: description' }

  ]
ReactDOM.render(
  <Index />,
  document.getElementById('root')
)