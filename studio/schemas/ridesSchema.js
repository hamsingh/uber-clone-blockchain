export const ridesSchema = {
    name: 'rides',
    type: 'document',
    title: 'Rides',
    fields: [
        {
            name: 'oderById',
            type: 'number',
            title: 'Order by Id',
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'priceMultiplier',
            type: 'number',
            title: 'Price Multiplier',
        },
        {
            name: 'icon',
            type: 'image',
            title: 'Icon',
        },
    ],
}