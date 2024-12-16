import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      elements: string;
      background: string;
      text: string;
      input?: string;
    };
  }
}

