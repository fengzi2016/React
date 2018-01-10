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



//----------------------------------------------------------------------------
// 数据流在父子中传递
// class Input extends Component {
//   constructor(){
//     super();
//     this.state = {
//       number: ''
//     }
//   }
//   handleNumberChange(event){
//     this.setState({
//       number:event.target.value
//     })
  
//     this.props.onChange(event.target.value)
//   }
//   render () {
//     return (
//       <div>
//         <input type='number' value = {this.state.number} 
//           onChange = {this.handleNumberChange.bind(this)}/>
//       </div>
//     )
//   }
// }

// class PercentageShower extends Component {
//   render () {
//     return (
//       <div>{this.props.number}</div>
//     )
//   }
// }

// class PercentageApp extends Component {
//   constructor(){
//     super();
//     this.state = {
//       number: ''
//     }
//   }
//   handleChangeNumber(num){
//     num= Number(num)*100;
//     num=num.toFixed(2)+'%';
//     this.setState({
//       number:num
//     })
    
//   }
//   render () {
//     return (
//       <div>
//       <Input onChange ={this.handleChangeNumber.bind(this)}/>
//       <PercentageShower number = {this.state.number} />
//       </div>
//     )
//   }
// }

//--------------
//ref，获取htmlDOM
// class Post extends Component {
//   constructor(){
//     super();

//   }

//   print(){
//     console.log(this.p.clientHeight)
//   }
//   render () {
//     return (<p onClick = {this.print.bind(this)}  ref ={(p)=> this.p = p} >{this.props.content}</p>)
//   }
// }
// class Index extends Component{
//   render(){
//     return (
//       <div>
//         <Post content = 'sss' />
//       </div>
//       )
//   }
  
// }
// class BlackBorderContainer extends Component {
//   render(){
//     return(
//       <div>
//       {this.props.children.map((item)=>{
//           return(
//           <div className = 'blackBorder'>
//             {item}
//           </div>)
//         })}
//       </div>
//       )
//   }
// }
//---------------------------------
// class Index extends Component{
//   render(){
//     return(
//       <BlackBorderContainer>
//         <div className='name'>My Name：Lucy</div>
//         <p className='age'>
//           My Age：<span>12</span>
//         </p>
//       </BlackBorderContainer>
//     )
//   }
// }
//--------------
// const getDefaultStyledPost = (defaultStyle) => {
//   return(  
//     class Post extends Component {
//     render(){
//       return(
//         <p style = { Object.assign(defaultStyle, this.props.style)}></p>
//         )
//     }
//   }
// )

// }
//高阶组件，逻辑抽离
// getData(url) 已经可以直接使用
// 本站的环境都可以使用 async/await

// const loadAndRefresh = (url)=>(WrappedComponent)=>{
//   class NewComponent extends Component{
//     constructor(){
//       super();
//       this.state = {
//         content:null
//       }
//     }
//     componentWillMount(){
//        this.setState({content:"数据加载中..."})
//       // const content = await getData(url)
//       getData(url).then((content)=>{
//         this.setState({content})
//       });
//     }
//     handleRefresh(){
//       this.componentWillMount();
//     }
//     render(){

//       return(
//         <WrappedComponent  content ={this.state.content}  refresh={ this.handleRefresh.bind(this)} {...this.props}/>
//         )
//     }
//   }
//   return NewComponent
 
// }
//----------------------------------------
//高阶组件+content
// const makeProvider = (data)=>(WrappedComponent)=>{
//   class NewComponent extends Component{
//     static childContextTypes ={
//       data : PropTypes.object
//     }
//     constructor(){
//       super();
//       this.state ={
//         data : data
//       }
//     }
//     getChildContext(){
//       return {data: this.state.data}
//     }
//     render(){
//       return(
//         <WrappedComponent />
//         )
//     }
//   }
//   return NewComponent
// }
//UserReducer修改纯函数
const usersReducer = (state,action)=>{
  switch(action.type){
    case 'ADD_USER':
        return state.push(action.user)
     case 'DELETE_USER':
       return state.splice(action.index,1)
     case 'UPDATE_USER':
       return 
         state.map((item,i)=>{
           if(i===action.index){
             return {
               ...item,
               ...action.user
             }
           }
          
         })
       }
  }
  

ReactDOM.render(
  <Header />,
  document.getElementById('root')
)
