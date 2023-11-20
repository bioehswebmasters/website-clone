import React, { useEffect } from 'react';

function Bioehsc() {
  useEffect(() => {
    window.location.href = 'https://bioehs.berkeley.edu/bioehsc/';
  }, []);

  return (
    <div>
      <h1>Redirecting to old BioEHSC website...</h1>
      <p>If you are not redirected, please click <a href="https://bioehs.berkeley.edu/bioehsc/">here</a>.</p>
    </div>
  );
}

export default Bioehsc;