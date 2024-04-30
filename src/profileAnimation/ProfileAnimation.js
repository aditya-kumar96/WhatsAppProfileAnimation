import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { MotiView, useDynamicAnimation } from 'moti'

const ProfileAnimation = () => {
    const [yValue, setyValue] = useState(0);


    const animation = useDynamicAnimation(() => {
        return {
            height: 100,
            weight:'100%',
          }
      });
    return (
        <View style={{ flex: 1 }}>
            <MotiView
                state={animation}
                delay={'10000'}
                style={{
                    backgroundColor: yValue > 30 ? '#128c7E' : '#fff',
                    justifyContent: 'center',
                    alignItems: "center"
                }}
            >
            </MotiView>
            <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}
                onScroll={ event => {
                    const offset = event?.nativeEvent?.contentOffset?.y;
                    setyValue(offset?.toFixed(0));
                }}
            >
                <View style={{ height: 1000, width: '100%' }}>
                </View>
            </ScrollView>
        </View>
    )
}

export default ProfileAnimation