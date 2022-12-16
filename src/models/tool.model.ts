import { JSX } from 'solid-js'

export interface Tool {
  name: string;
  icon: JSX.Element;
  lightBackground: string;
  darkBackground: string;
  url: string;
}
