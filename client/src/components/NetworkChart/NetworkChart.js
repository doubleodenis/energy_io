import React from 'react';
import { VictoryAxis, VictoryTheme, VictoryLabel} from "victory";

/**
 * @param  {} props.data An array of objects containing data?
 */
const NetworkChart = (props) => {

    
    return (
      <svg width={750} height={400} style={{marginLeft: 20}}>
            <VictoryAxis dependentAxis
                tickLabelComponent={<VictoryLabel dy={0} dx={0}/>}
                width={750}
                height={400}
                domain={[0, 50]}
                theme={VictoryTheme.material}
                standalone={false}
                label="Bandwidth (MB/s)"
                fixLabelOverlap={true}

            />
            <VictoryAxis 
                width={750}
                height={400}
                domain={[0, Date.now()]}
                theme={VictoryTheme.material}
                standalone={false}
                label="Time"
                scale={{ x: "time" }}
                animate={{
                    duration: 2000,
                    easing: "bounce"
                  }}
            />
        </svg>
    )
}

export default NetworkChart;