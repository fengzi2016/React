import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// -> constructor()
// -> componentWillMount()
// -> render()
// // 然后构造 DOM 元素插入页面
// -> componentDidMount()
// // ...
// // 即将从页面中删除
// -> componentWillUnmount()
// // 从页面中删除


// class Index extends Component{
//     render(){
//       return (
//         <div>
//           <LessonsList lessons = {lessons} />
//         </div>
        
//         )
//     }
//   }
//   class Lesson extends Component {
//     print(){
//       const index = this.props.in;
//       console.log(index+ '-' + this.props.lesson.title);
//     }
//     render(){
//       const lesson = this.props.lesson
//       return (
//         <div onClick = {this.print.bind(this)} >
//           <h1>{lesson.title}</h1>
//           <p>{lesson.description}</p>
//         </div>
//         )
//     }
//   }
  
//   class LessonsList extends Component {
//     render(){
//       const lessons =this.props.lessons
//       return(
//         <div>
//         {lessons.map((les,index)=>
//           <Lesson lesson = {les} key = {index} in = {index} />
//         )}
//         </div>
//         )
//     }
//   }
  
  
//   const lessons = [
//     { title: 'Lesson 1: title', description: 'Lesson 1: description' },
//     { title: 'Lesson 2: title', description: 'Lesson 2: description' },
//     { title: 'Lesson 3: title', description: 'Lesson 3: description' },
//     { title: 'Lesson 4: title', description: 'Lesson 4: description' }

//   ]
class Input extends Component {
  constructor(){
    super();
    this.state = {
      number: ''
    }
  }
  handleNumberChange(event){
    this.setState({
      number:event.target.value
    })
  
    this.props.onChange(event.target.value)
  }
  render () {
    return (
      <div>
        <input type='number' value = {this.state.number} 
          onChange = {this.handleNumberChange.bind(this)}/>
      </div>
    )
  }
}

class PercentageShower extends Component {
  render () {
    return (
      <div>{this.props.number}</div>
    )
  }
}

class PercentageApp extends Component {
  constructor(){
    super();
    this.state = {
      number: ''
    }
  }
  handleChangeNumber(num){
    num= Number(num)*100;
    num=num.toFixed(2)+'%';
    this.setState({
      number:num
    })
    
  }
  render () {
    return (
      <div>
      <Input onChange ={this.handleChangeNumber.bind(this)}/>
      <PercentageShower number = {this.state.number} />
      </div>
    )
  }
}

ReactDOM.render(
  <PercentageApp />,
  document.getElementById('root')
)