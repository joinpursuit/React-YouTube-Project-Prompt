import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <h1>Our Youtube App</h1>
        <p>This project is an artifical clone of the application Youtube. The program is built using React<br/> and calls upon the Youtube API 
                to render different videos based upon the search query. <br/> A user is able to type into a search bar and after submitting are able to see videos corresponding to that search. </p>
                <div className="collaborators">
                <img src='https://media-exp1.licdn.com/dms/image/C4D03AQHytxjtRoZ8Kw/profile-displayphoto-shrink_200_200/0/1607012315788?e=1622073600&v=beta&t=pVmt334EG1LgO7aqXUtNEbCCF5B7z-jg72b8fIUwyRo' alt='Ray pic'/>
                <h3>Rayvon Finney-Pinkston</h3>
                <p>
                Hey, my name is Ray, I’m 28 from Harlem, NY. I joined Pursuit to gain a better advantage for my son and family and change my career trajectory.  I’m hoping to use my love for tech to be able to transition to an engineering role like I hoped to before I left school. Fun Fact: in college I was the music coordinator for multiple college radio programs. 
                </p>
                <img src='https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F882211d0-d840-4027-a167-c0ef0c718763%2FWhatsAppImage2020-10-24at8.20.48PM.jpg?table=block&id=2939b869-df9d-44dd-bf21-a726c56c799e&spaceId=e2735e9b-8fe9-4c16-bdc1-be142cd1014e&width=1420&userId=c3b0fb20-3568-49fe-862e-3e2ebe5c3c2a&cache=v2' alt='Alex Pic' style={{height: "200px", width: "200px" }} />
                <h3>Alexander La Rosa Perez</h3>
                <p>
                I'm from Cuba. I grew up in a family of artists and athletes. I went to a professional training school for dancers, teachers and choreographers and for most of my career I have been working as a professional dancer.  In 2016 I moved to the United States to dance in an Afro Cuban Dance company, however, after moving here have also worked in different spaces such as recycling, construction, electricity, dishwasher, service, while dancing and teaching at the same time. I like music, history, technology in all its aspects
                </p>
                </div>

                
            </div>
        )
    }
}
