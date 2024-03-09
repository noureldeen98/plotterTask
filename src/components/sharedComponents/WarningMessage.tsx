import React, { useEffect } from 'react';
import {  message } from 'antd';

const App: React.FC<{messages:string} >= ({messages}) => {
  const [messageApi, contextHolder] = message.useMessage();

useEffect(()=>{
  const warning = () => {
    messageApi.open({
      type: 'warning',
      content: `${messages}`,
    });
  };
  warning();
},[messageApi, messages])

  return (
    <>
      {contextHolder}

    </>
  );
};

export default App;