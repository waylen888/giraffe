import * as React from 'react'
import {FunctionComponent} from 'react'
import {RouteComponentProps} from '@reach/router'

import {Plot, Histogram} from '../../../../src'
import {TABLE, COLORS} from './'

type Props = RouteComponentProps

export const StackedHistogram: FunctionComponent<Props> = () => {
  return (
    <div className="histogram-example">
      <Plot table={TABLE}>
        {env => (
          <Histogram
            env={env}
            x="_value"
            fill={['cpu']}
            colors={COLORS}
            binCount={20}
          />
        )}
      </Plot>
    </div>
  )
}