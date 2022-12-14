import { Button } from '@mui/material';
import React, { useState } from 'react';

function Basic({ handleNext, handleBack }) {
  const [ok, setOk] = useState(false);
  return (
    <div>
      Basic
      <div>
        <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
          {ok ? 'Finish' : 'Continue'}
        </Button>
        <Button disabled={true} onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
          Back
        </Button>
      </div>
    </div>
  );
}

export default Basic;
