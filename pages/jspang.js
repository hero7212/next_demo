import React, {useState} from 'react'

function Jspang() {

    const [color, setColor] = useState('blue')

    const changeColor = () => {
        setColor(color === 'blue' ? 'red' : 'blue')
    }

    return (
        <div>
            <div>朱莉</div>
            <div><button onClick={changeColor}>改变颜色</button></div>
            <style jsx>
                {`
                    div{color: ${color};}
                    
                `}
            </style>

        </div>
    )
}

export default Jspang