import React from 'react';
import { confusionData } from './confusionData';
import { ConfusionBox } from './ConfusionBox';
import { CenterBox } from './CenterBox';

export function ConfusionGrid() {
  return (
    <>
      {confusionData.map((item, index) => (
        <React.Fragment key={index}>
          {index === 4 ? (
            <CenterBox />
          ) : (
            <ConfusionBox text={item} index={index} />
          )}
        </React.Fragment>
      ))}
    </>
  );
}