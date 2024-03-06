import  { useEffect } from 'react';
import { notification } from 'antd';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const NotificationComponent = ({notificationData}) => {
  const [api, contextHolder] = notification.useNotification();
//Method to show the notification component  
  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
        message:notificationData.message,
        description:notificationData.description
    });
  };

  useEffect(()=>{
    if(notificationData.type==='error'){
        openNotificationWithIcon(notificationData.type)
    }
  },[])

  return (
    <>
      {contextHolder}
    </>
  );
};

export default NotificationComponent;