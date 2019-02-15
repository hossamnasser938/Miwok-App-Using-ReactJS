import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return(
        <nav>
          <ul>
            <li><Link to="numbers">Numbers</Link></li>
            <li><Link to="colors">Colors</Link></li>
            <li><Link to="phrases">Phrases</Link></li>
            <li><Link to="family_members">Family Members</Link></li>
          </ul>
        </nav>
    );
}
