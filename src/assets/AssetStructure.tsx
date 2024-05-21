import { ReactNode, createElement } from 'react';

export const AssetStructure = ({
    style,
    width,
    height,
    children,
}: {
    style?: string;
    width?: number;
    height?: number;
    children?: ReactNode;
}) => {
    return createElement('svg', {
        className: style ? style : '',
        style: { fill: 'currentcolor' },
        width: width ? width : '24',
        height: height ? height : '24',
        dangerouslySetInnerHTML: { __html: children },
    });
};
