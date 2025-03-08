import React, { useState, useRef, useEffect } from "react";
import { Bell } from "lucide-react";

// Notification Component with outside click detection
const NotificationIcon: React.FC = () => {
  const [notificationCount, setNotificationCount] = useState(3);
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside the notification panel
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
    }

    // Add event listener if notifications are shown
    if (showNotifications) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showNotifications]);

  return (
    <div className="relative" ref={notificationRef}>
      <button 
        className="relative p-2 rounded-full hover:bg-gray-800 transition"
        onClick={() => setShowNotifications(!showNotifications)}
      >
        <Bell className="h-6 w-6 text-gray-300" />
        {notificationCount > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-green-500 rounded-full">
            {notificationCount}
          </span>
        )}
      </button>
      
      {showNotifications && (
        <div className="absolute right-0 mt-2 w-80 bg-[#141414] border border-gray-700 rounded-xl shadow-lg z-10">
          <div className="p-3 border-b border-gray-700">
            <h3 className="font-medium">Notifications</h3>
          </div>
          <div className="max-h-96 overflow-y-auto">
            <div className="p-3 border-b border-gray-700 hover:bg-gray-800">
              <p className="text-sm">Your project "CollabNest" has a new comment</p>
              <p className="text-xs text-gray-400 mt-1">10 minutes ago</p>
            </div>
            <div className="p-3 border-b border-gray-700 hover:bg-gray-800">
              <p className="text-sm">Meeting scheduled with mentor at 3:00 PM today</p>
              <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
            </div>
            <div className="p-3 hover:bg-gray-800">
              <p className="text-sm">You earned a new certificate!</p>
              <p className="text-xs text-gray-400 mt-1">Yesterday</p>
            </div>
          </div>
          <div className="p-2 border-t border-gray-700">
            <button 
              className="text-xs text-gray-400 hover:text-white w-full text-center p-1"
              onClick={() => {
                setNotificationCount(0);
                setShowNotifications(false);
              }}
            >
              Mark all as read
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationIcon;