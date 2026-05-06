// analytics.ts

// This file contains functions to track page views and user interactions
// using Google Analytics or any similar service.

const GA_MEASUREMENT_ID = 'YOUR_GA_MEASUREMENT_ID'; // Replace with your Google Analytics Measurement ID

type GtagEventParams = {
    event: string;
    [key: string]: unknown;
};

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
    }
}

/**
 * Initializes Google Analytics.
 */
function initAnalytics() {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('js', new Date());
        window.gtag('config', GA_MEASUREMENT_ID);
    }
}

/**
 * Tracks a page view.
 * @param pagePath - The path of the page to track.
 */
function trackPageView(pagePath: string) {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', GA_MEASUREMENT_ID, {
            'page_path': pagePath,
        });
    }
}

/**
 * Tracks an event.
 * @param eventParams - Parameters related to the event.
 */
function trackEvent(eventParams: GtagEventParams) {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventParams.event, eventParams);
    }
}

// Exporting functions for use in other parts of the application
export { initAnalytics, trackPageView, trackEvent };