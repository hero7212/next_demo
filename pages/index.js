import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

const Home = () =>{

    function gotoA() {
        Router.push('/jspangA')
    }

    return (
        <div>
            <div>我是首页</div>
            <div><Link href="/jspangA"><a>去JSPangA页面</a></Link></div>
            <div><Link href="/jspangB"><a>去JSPangB页面</a></Link></div>
            <div>
                <button onClick={gotoA}>JSPangA</button>
                <button onClick={gotoA}>JSPang----</button>
            </div>
        </div>
    )
    
}

export default Home