import React from 'react';

// This component embeds the Unity WebGL build using an iframe.
// Place your Unity WebGL build inside public/unity_build and ensure
// the build's index.html is at public/unity_build/index.html.

const UnityDemo = () => {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '80vh' }}>
      <iframe
        title="Unity WebGL Demo"
        src="/unity_build/index.html"
        style={{ width: '100%', height: '100%', border: 'none' }}
        allowFullScreen
      />
    </div>
  );
};

export default UnityDemo;
