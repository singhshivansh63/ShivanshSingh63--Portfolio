import React from 'react';
import PropTypes from 'prop-types'; // Optional: Include if you plan to use props

const LargeComponent = () => {
  return (
    <div className="large-component"> {/* Optional: Add a class for styling */}
      <h1>This is a Large Component</h1>
      <p>It contains some text.</p>
    </div>
  );
};

// Optional: Define PropTypes if you plan to pass props in the future
LargeComponent.propTypes = {
  // Example prop
  // someProp: PropTypes.string,
};

export default LargeComponent;

