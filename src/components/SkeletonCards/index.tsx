import React from "react";
import ContentLoader from "react-content-loader";

export const SkeletonCards: React.FC = (props) => (
    <ContentLoader
        speed={2}
        width={280}
        height={465}
        viewBox='0 0 280 465'
        backgroundColor='#f3f3f3'
        foregroundColor='#ecebeb'
        {...props}
    >
        <rect
            x='56'
            y='66'
            rx='0'
            ry='0'
            width='200'
            height='280'
        />
        <rect
            x='82'
            y='370'
            rx='0'
            ry='0'
            width='1'
            height='2'
        />
        <rect
            x='56'
            y='360'
            rx='0'
            ry='0'
            width='99'
            height='42'
        />
        <rect
            x='166'
            y='360'
            rx='0'
            ry='0'
            width='90'
            height='42'
        />
        <rect
            x='56'
            y='411'
            rx='0'
            ry='0'
            width='201'
            height='36'
        />
    </ContentLoader>
);

export default SkeletonCards;
