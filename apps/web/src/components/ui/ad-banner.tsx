'use client';

import { useEffect } from 'react';

interface AdBannerProps {
  slot: string;
  format?: 'auto' | 'rectangle' | 'vertical' | 'horizontal';
  responsive?: boolean;
  className?: string;
}

export function AdBanner({ 
  slot, 
  format = 'auto', 
  responsive = true, 
  className = '' 
}: AdBannerProps): React.JSX.Element {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className={`ad-banner ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      />
    </div>
  );
}

// Predefined ad components for common placements
export function HeaderBanner(): React.JSX.Element {
  return (
    <AdBanner
      slot="1234567890" // Replace with your actual ad slot ID
      format="horizontal"
      className="w-full max-w-4xl mx-auto my-4"
    />
  );
}

export function SidebarBanner(): React.JSX.Element {
  return (
    <AdBanner
      slot="1234567891" // Replace with your actual ad slot ID
      format="vertical"
      className="w-full max-w-xs"
    />
  );
}

export function FooterBanner(): React.JSX.Element {
  return (
    <AdBanner
      slot="1234567892" // Replace with your actual ad slot ID
      format="horizontal"
      className="w-full max-w-4xl mx-auto my-4"
    />
  );
}

export function InContentBanner(): React.JSX.Element {
  return (
    <AdBanner
      slot="1234567893" // Replace with your actual ad slot ID
      format="rectangle"
      className="w-full max-w-md mx-auto my-6"
    />
  );
}
