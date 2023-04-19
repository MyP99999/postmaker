import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getCount, incrementCount } from '../features/posts/postsSlice'

const Header = () => {
    const count = useSelector(getCount)
    const dispatch = useDispatch()

  return (
    <header className='Header'>
        <h1>Redux</h1>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='post'>Post</Link></li>
                <li><Link to='user'>Users</Link></li>
            </ul>
            <button onClick={() => dispatch(incrementCount())}>{count}</button>
        </nav>
    </header>
    )
}

export default Header