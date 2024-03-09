import { useEffect } from "react";
import { notification } from "antd";
import { NotificationData, NotificationType } from "../utils/models/notification";

const NotificationComponent:React.FC<{ notificationData:NotificationData }> = ({ notificationData }) => {
  const [api, contextHolder] = notification.useNotification();
  //Method to show the notification component
  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: notificationData.message,
      description: notificationData.description,
    });
  };

  useEffect(() => {
    if (notificationData.type === "error") {
      openNotificationWithIcon(notificationData.type);
    }
    if (notificationData.type === "warning") {
      openNotificationWithIcon(notificationData.type);
    }
  }, []);

  return <>{contextHolder}</>;
};

export default NotificationComponent;
