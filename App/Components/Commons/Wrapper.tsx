import {View, Text} from 'react-native-ui-lib';
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export default function Wrapper({
  children,
  avoidStatusBar = true,
  disableKeyboardAvoidingView = false,
  backgroundColor = 'white',
}: {
  children: React.ReactNode;
  avoidStatusBar?: boolean;
  disableKeyboardAvoidingView?: boolean;
  backgroundColor?: string;
}) {
  return (
    <View flex backgroundColor={backgroundColor}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        enabled={Platform.OS === 'ios' && !disableKeyboardAvoidingView}>
        {!!avoidStatusBar && <View style={styles.avoidStatusBar} />}
        <View flex>{children}</View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  avoidStatusBar: {
    height: getStatusBarHeight(),
  },
});
