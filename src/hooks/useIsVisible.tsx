import { useEffect, useRef, useState } from 'react';
import { AppState, AppStateStatus } from 'react-native';

export const useIsVisible = (): {visible: AppStateStatus } => {
  const appState = useRef(AppState.currentState);
  const [visible, setVisible] = useState(appState.current);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground!');
      }

      appState.current = nextAppState;
      setVisible(appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return ({visible})
}
