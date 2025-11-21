import React, { useState } from 'react';
import './AudioVideo.css';

export interface AudioVideoProps {
  variant?: 'audio' | 'video';
  type?: 'control' | 'album rounded & play' | 'control & album' | 'album full & play' | 'play' | 'sequence and play' | 'sequence & album' | 'small' | 'medium' | 'large';
  title?: string;
  artist?: string;
  duration?: string;
  currentTime?: string;
  progress?: number;
  isPlaying?: boolean;
  onPlay?: () => void;
  onPause?: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  className?: string;
}

export const AudioVideo: React.FC<AudioVideoProps> = ({
  variant = 'audio',
  type = 'control',
  title = 'Sad but true',
  artist = 'Ride the lightening',
  duration = '00:00',
  currentTime = '00:00',
  progress = 0,
  isPlaying = false,
  onPlay,
  onPause,
  onNext,
  onPrevious,
  className = '',
}) => {
  const [isPlayingState, setIsPlayingState] = useState(isPlaying);

  const handlePlayPause = () => {
    setIsPlayingState(!isPlayingState);
    if (isPlayingState) {
      onPause?.();
    } else {
      onPlay?.();
    }
  };

  if (variant === 'video') {
    return (
      <div className={`audio-video audio-video--video audio-video--${type} ${className}`}>
        <div className="audio-video__video-container">
          <div className="audio-video__video-placeholder" />
          <div className="audio-video__controls-overlay">
            <div className="audio-video__controls">
              <button className="audio-video__control-btn" onClick={handlePlayPause} aria-label={isPlayingState ? 'Pause' : 'Play'}>
                {isPlayingState ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6" y="6" width="4" height="12" fill="currentColor" />
                    <rect x="14" y="6" width="4" height="12" fill="currentColor" />
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                  </svg>
                )}
              </button>
              <div className="audio-video__progress-container">
                <div className="audio-video__progress-bar">
                  <div className="audio-video__progress-fill" style={{ width: `${progress}%` }} />
                </div>
                <span className="audio-video__time">{currentTime} / {duration}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`audio-video audio-video--audio audio-video--${type} ${className}`} data-name={`Type=${type}`}>
      <div className="audio-video__content">
        {(type === 'album rounded & play' || type === 'control & album' || type === 'album full & play' || type === 'sequence & album') && (
          <div className="audio-video__album-art" />
        )}
        <div className="audio-video__info">
          {type === 'sequence and play' && <span className="audio-video__sequence">02.</span>}
          <div className="audio-video__text">
            <p className="audio-video__title">{title}</p>
            {artist && <p className="audio-video__artist">{artist}</p>}
          </div>
        </div>
        <div className="audio-video__controls-group">
          <button className="audio-video__play-btn" onClick={handlePlayPause} aria-label={isPlayingState ? 'Pause' : 'Play'}>
            {isPlayingState ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="6" width="4" height="12" fill="currentColor" />
                <rect x="14" y="6" width="4" height="12" fill="currentColor" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
              </svg>
            )}
          </button>
          {onNext && (
            <button className="audio-video__control-btn" onClick={onNext} aria-label="Next">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 5V19L16 12L5 5Z" fill="currentColor" />
                <path d="M14 5V19H19V5H14Z" fill="currentColor" />
              </svg>
            </button>
          )}
        </div>
        {type === 'control' && (
          <div className="audio-video__progress-section">
            <div className="audio-video__progress-bar">
              <div className="audio-video__progress-fill" style={{ width: `${progress}%` }} />
            </div>
            <span className="audio-video__time">{currentTime} / {duration}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AudioVideo;

