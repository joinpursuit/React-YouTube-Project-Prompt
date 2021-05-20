import React, { Component } from 'react'
import axios from 'axios'


export default class Home extends Component {
    constructor(){
        super()
        this.state={
            videos: {},
            searchvideo:'',
            isError: false
        }
    }
    handleSubmit = (e)=>{
        console.log('estoyaqui')
       this.setState({
           searchvideo: e.target.value
       })
    }
    handleApi= async(e)=>{
        e.preventDefault()
        const {searchvideo} = this.state
        try{
            const {data} = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDi-oQkFDT7KXTOjGxOtYcl9C45EEHLUjk&type=video&part=snippet&maxResults=20&q=music${e.target.value}`)
        console.log(data)
        const currentvideos=data.find((mov)=> mov.items.id === searchvideo)
        if(currentvideos !== searchvideo){
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
    
    render() {
        const {searchvideo,videos} = this.state
        // const disvideos = videos.map((ved )=> <div key={ved.id} >{ved.videoId}</div>)
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
                    
                    {videos.videosId}
                </div>
            </div>
        )
    }
}
