import React from "react";
import ContentLoader from "react-content-loader";

export const SkeletonPageProduct: React.FC = (props) => (
    <ContentLoader
        speed={2}
        width={1200}
        height={500}
        viewBox='0 0 476 124'
        backgroundColor='#f3f3f3'
        foregroundColor='#ecebeb'
        {...props}
    >
        <rect
            x='23'
            y='0'
            rx='0'
            ry='0'
            width='128'
            height='161'
        />
        <rect
            x='185'
            y='1'
            rx='0'
            ry='0'
            width='235'
            height='18'
        />
        <rect
            x='186'
            y='28'
            rx='0'
            ry='0'
            width='136'
            height='22'
        />
        <rect
            x='188'
            y='57'
            rx='0'
            ry='0'
            width='316'
            height='35'
        />
        <rect
            x='188'
            y='98'
            rx='0'
            ry='0'
            width='133'
            height='43'
        />
    </ContentLoader>
);

export default SkeletonPageProduct;
