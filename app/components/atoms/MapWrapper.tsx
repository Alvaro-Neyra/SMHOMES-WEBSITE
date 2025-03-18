"use client"

import { PropertyMapProps } from '@/app/utils/interfaces';
import dynamic from 'next/dynamic';

const DynamicMap = dynamic(
    () => import('@/app/components/atoms/Map'),
    { ssr: false }
);

export default function MapWrapper({ coordinates, address }: PropertyMapProps) {
    return <DynamicMap coordinates={coordinates} address={address} />;
}