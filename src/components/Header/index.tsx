// Styles
import { Header, Link } from './styled'

// Images
import Football from 'images/football.png'


const PageHeader = () => {
    return (
        <Header>
            <div>
                <img src={Football} alt='Football' />
                <p>Phootball</p>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to={'/'} end>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to={'/team-builder'} >
                            Team builder
                        </Link>
                    </li>
                </ul>
            </nav>
        </Header >
    )
}

export default PageHeader