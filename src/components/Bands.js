import React from 'react';
import Band from './Band.js';

const Bands = props => {
  const bands = props.bands.map(band => <Band key={band.id} {...band} deleteBand={props.deleteBand}/>)

  return (
    <div>
      {bands}
    </div>
  )
}

export default Bands;


// import React from 'react';
// import Band from './Band'
//
// const Bands = props => {
//   const bands = props.bands.map(band => <Band key={band.id} {...band} deleteBand={props.deleteBand}/>)
//
//   return (
//     <div>
//       {bands}
//     </div>
//   );
//
// };
//
// export default Bands;
