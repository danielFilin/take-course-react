import React from 'react';

import Aux from '../../hoc/Auxil';

const Layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className='mt-3 container'>
           
            {props.children}
        </main>
    </Aux>
   
)

export default Layout;