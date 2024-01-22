 
import Header from './Header';
 
import Sidebar from './Sidebar';

import Noti from './Noti';
import Upheader from './Upheader';
function DefaultLayout({children}) {
  return (
    <div>
        <Noti/>
        <Upheader/>
        <Header />

        <div className='container'>

            <Sidebar />


            <div className='content'>{children} </div>

        </div>



    </div>



  )
}

export default DefaultLayout
