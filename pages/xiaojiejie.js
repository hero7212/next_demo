import {withRouter} from 'next/router'
import Link from 'next/link'

const Xiaojiejie = ({router}) => {
    return (
        <div>
            <div>{router.query.name}来为我服务了</div>
            <Link href="/"><a>返回首页</a></Link>
        </div>
    )
}

export default withRouter(Xiaojiejie)