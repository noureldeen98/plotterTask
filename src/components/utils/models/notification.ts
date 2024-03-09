export type NotificationType = "success" | "info" | "warning" | "error";

export interface NotificationData{
   type:NotificationType;
   message:string;
   description:string;
}