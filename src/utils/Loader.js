// import react from 'react';
// import { Spin } from 'antd';

import { Loading3QuartersOutlined } from '@ant-design/icons';

const Loader = () => (
  <div className='loader'>
    <Loading3QuartersOutlined style={{ fontSize: 100 }} spin />;
  </div>  
);

export default Loader;
