/// <reference types="react" />
import { PressableProps, ColorValue } from 'react-native';
import color from 'color';
import renderNode from './renderNode';
import getIconType from './getIconType';
import normalizeText from './normalizeText';
import { colors, Colors } from './index-config';
declare const ScreenWidth: number;
declare const ScreenHeight: number;
declare const isIOS: boolean;
export declare type RneFunctionComponent<T> = React.FunctionComponent<T & {
    theme?: {
        colors: Colors;
    };
}>;
export declare const defaultTheme: {
    colors: Colors;
};
export declare type Theme = {
    colors: Colors;
};
export declare const androidRipple: (rippleColor?: string | ColorValue) => PressableProps['android_ripple'];
export declare const patchWebProps: <T extends Record<any, any>>({ updateTheme, replaceTheme, onClear, ...rest }: T) => Omit<T, "updateTheme" | "replaceTheme" | "onClear">;
export { renderNode, getIconType, normalizeText, ScreenWidth, ScreenHeight, isIOS, colors, color, };
declare type Inline<T, K extends keyof T> = Partial<{
    /**
     * @default None
     * @type PressableProps except click handlers
     */
    pressableProps: Omit<T, K>;
} & Pick<T, K>>;
export declare type InlinePressableProps = Inline<PressableProps, 'onPress' | 'onLongPress' | 'onPressIn' | 'onPressOut'>;
