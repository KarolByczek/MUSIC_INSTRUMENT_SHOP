import React from 'react';
import { Link } from 'react-router-dom';

const CompanyIcon = () => {
    return (
        <div className='company_icon'>
            <Link className='company_icon_image' to='/'>
                <img src="src/assets/company-icon.jpg" alt="company icon/return to homepage" />
            </Link>
        </div>
    )
}

export default CompanyIcon
