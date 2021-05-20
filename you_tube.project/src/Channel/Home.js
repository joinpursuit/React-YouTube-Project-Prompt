import React, { Component } from 'react'

export default class Home extends Component {
    constructor(){
        super()
        this.state={
            videos: {},
            searchvideo:'',
            isError: false
        }
    }
    handleApi= async(e)=>{
        e.preventDefault()
        const {searchvideo} = this.state
        try{
            const {data} = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDi-oQkFDT7KXTOjGxOtYcl9C45EEHLUjk&type=video&part=snippet&maxResults=20&q=music${e.target.value}`)
        console.log(data)
        const currentvideos=data.find((mov)=> mov.items === searchvideo)
        if(currentvideos !== searchvideo ){
            this.setState({
                videos: {},
                searchvideo: "",
                isError: true
            })
         } this.setState({
            videos: currentvideos,
            searchvideo: "",
            isError: false
        })

        }catch(e){
            this.setState({
                videos: {},
                searchvideo: "",
                isError: true
            })
        }
        
    }
    handleSubmit = (e)=>{
        console.log('estoyaqui')
       this.setState({
           searchvideo: e.target.value
       })
    }
    render() {
        const {searchvideo,videos} = this.state
        const currentvideos = videos.map((ved)=> ved.snippet)
        return (
            <div>
                <div className="input">
                    <form onSubmit={this.handleSubmit}>
                      <input 
                         onChange={this.handleApi}
                         type="text" 
                         id=""
                         placeholder="Search..."
                         value={searchvideo}></input>
                      <button>Search</button>
                    </form>
                    
                    {currentvideos}
                </div>
            </div>
        )
    }
}
