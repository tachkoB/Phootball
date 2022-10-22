// Styles
import { Header, Link } from './styled'

// Images
import Football from 'images/football.png'


const PageHeader = () => {
    return (
        <Header>
            <Link to={'/'} >
                <div>

                    <img src={Football} alt='Football' />
                    <p>Phootball</p>

                </div>
            </Link>
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