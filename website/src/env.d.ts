declare module '*.svg' {
    type SVGAttributes = astroHTML.JSX.SVGAttributes & { title?: string };
    type Props = SVGAttributes;

    const Component: ((_props: Props) => any) & ImageMetadata;
    export default Component;
}