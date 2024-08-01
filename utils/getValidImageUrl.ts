const defaultImage = '/assets/img/products/card.jpeg';

// Ensure the URL is absolute by adding the protocol if it's missing
const getValidImageUrl = (url: string): string => {
    if (url.startsWith('http://') || url.startsWith('https://')) {
        return url;
    }
    return `https://${url}`;
};

// Function to get the first valid product thumbnail URL or the default image
export const getProductImageUrl = (thumbnails: { product_photo: string }[]): string => {
    const firstThumbnail = thumbnails?.map(thumbnail => thumbnail.product_photo)[0];
    return firstThumbnail ? getValidImageUrl(firstThumbnail) : defaultImage;
};
