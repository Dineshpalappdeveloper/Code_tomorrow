import React from 'react'
import "./dashboard.css"
const Dashboard = () => {
    return (
        <div className='dashbordParent'>
            <header>
                <div className='checkboxParent'>
                    <input type='checkbox' id='checkbox' checked style={{ backgroundColor: "green" }} />
                    <label htmlFor='checkbox'> To Do's</label>
                </div>
                <div>
                    <input type='text' placeholder='🔍| Search' className='search' />
                </div>
            </header>
            <section className='taskDetailsParents'>
                <div className='taskParent'>
                    <div className='taskDetails'>
                        <span className='title'>Urma, tempor aliquet maecenas aliquam risus maeceans ut morbi.</span>
                        <br></br>   <span>Mon,21 Dec 2022 14.59 GMT</span>
                    </div>
                    <div className='cross '>{"X"}</div>
                    <div className='cross edit'>{"✍️"}</div>
                </div>
                <div className='taskParent'>
                    <div className='taskDetails'>
                        <span className='title'>Urma, tempor aliquet maecenas aliquam risus maeceans ut morbi.</span>
                        <br></br>   <span>Mon,21 Dec 2022 14.59 GMT</span>
                    </div>
                    <div className='cross '>{"X"}</div>
                    <div className='cross edit'>{"✍️"}</div>
                </div> <div className='taskParent'>
                    <div className='taskDetails'>
                        <span className='title'>Urma, tempor aliquet maecenas aliquam risus maeceans ut morbi.</span>
                        <br></br>   <span>Mon,21 Dec 2022 14.59 GMT</span>
                    </div>
                    <div className='cross '>{"X"}</div>
                    <div className='cross edit'>{"✍️"}</div>
                </div>
                <div className='pagination'>
                    <div className='page1'>{"1"}</div>
                    <div className='page2'>{"2"}</div>
                    <div className='page3'>{"3"}</div>
                    <div className='page4'>{">>"}</div>

                </div>
                <div className='addSection'>
                    <input placeholder='Add new task' className='addinput' /> <div className='addSymbol'>{"+"}</div>
                </div>
            </section>

        </div>
    )
}

export default Dashboard