
import Analytics from '../components/Analytics';

import Navbar from '../components/Navbar';
import Newsletter from '../components/NewsLetter';

function LandingPage(): JSX.Element {
  return (
    <div className='bg-white'>
      <Navbar />
     
      <Analytics />
      
      <Newsletter />
      
     
    </div>
  );
}

export default LandingPage;
