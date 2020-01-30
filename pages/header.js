import Myheader from '../components/myheader'
import '../static/test.css'
import {Button} from 'antd'



function Header() {
    return (
        <div>
            <Myheader></Myheader>
            <div>JSPang.com</div>
            <div><Button>按钮</Button></div>
        </div>
    )
}
export default Header