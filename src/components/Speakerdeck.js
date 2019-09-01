import React from 'react';

const wrapperStyle =  {
  left: 0,
  width: "100%", 
  height: 0, 
  position: "relative", 
  paddingBottom: "74.7887%"
};

const iframeStyle = {
  "border": 0,
  "top": 0,
  "left": 0,
  "width": "100%",
  "height": "100%",
  "position": "absolute",
};

const srcURL = (id) =>`//speakerdeck.com/player/${id}`;

export const Speakerdeck = ({id}) => {
  return (
    <div style={wrapperStyle}>
      <iframe
        title={id}
        style={iframeStyle}
        src={srcURL(id)}
        allowFullScreen
        scrolling="no" allow="encrypted-media">
      </iframe>
    </div>
  );
};
