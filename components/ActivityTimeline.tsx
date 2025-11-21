import React from 'react';
import './ActivityTimeline.css';

export interface ActivityTimelineProps {
  detail?: boolean;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  link?: string;
  meetingId?: string;
  password?: string;
  onCopy?: () => void;
  className?: string;
}

export const ActivityTimeline: React.FC<ActivityTimelineProps> = ({
  detail = false,
  icon,
  title = 'Review Proposals for deck with larger team',
  description = 'You had a meeting with James Adam',
  link = 'https//us.videolink.com/2312312351323',
  meetingId = 'gu2h312u01h23',
  password = 'gu2h312u01h23',
  onCopy,
  className = '',
}) => {
  if (detail) {
    return (
      <div className={`activity-timeline activity-timeline--detail ${className}`} data-name="Detail=on">
        <div className="activity-timeline__header">
          <div className="activity-timeline__icon-container">
            {icon || (
              <div className="activity-timeline__icon activity-timeline__icon--trophy" />
            )}
          </div>
          <p className="activity-timeline__title">{title}</p>
        </div>
        <div className="activity-timeline__description">
          <p>{description}</p>
        </div>
        <div className="activity-timeline__details">
          <div className="activity-timeline__detail-card">
            <div className="activity-timeline__detail-row">
              <div className="activity-timeline__detail-field">
                <p className="activity-timeline__detail-label">Link</p>
                <p className="activity-timeline__detail-value">{link}</p>
              </div>
              <button className="activity-timeline__copy-button" onClick={onCopy}>
                Copy
              </button>
            </div>
            <div className="activity-timeline__detail-row">
              <div className="activity-timeline__detail-field">
                <p className="activity-timeline__detail-label">Meeting ID</p>
                <p className="activity-timeline__detail-value">{meetingId}</p>
              </div>
              <div className="activity-timeline__detail-field">
                <p className="activity-timeline__detail-label">Password</p>
                <p className="activity-timeline__detail-value">{password}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`activity-timeline ${className}`} data-name="Detail=off">
      <div className="activity-timeline__header">
        <div className="activity-timeline__icon-container">
          {icon || (
            <div className="activity-timeline__icon activity-timeline__icon--trophy" />
          )}
        </div>
        <p className="activity-timeline__title">{title}</p>
      </div>
      <div className="activity-timeline__description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ActivityTimeline;

