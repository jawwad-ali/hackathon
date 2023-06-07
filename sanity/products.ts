export default {
    name: 'product', 
    type: 'document',
    title: 'Products', 
    fields: [ 
        {
            name: 'name',  
            type: 'string',
            title: 'Name',
        },
        {
            name: 'price',
            type: 'string',
            title: 'Price'
        },
        {
            name: 'product_type',
            type: 'string',
            title: "Product Type"
        },
        {
            name: 'category',
            type: 'string',
            title: 'Category'
        },
        {

            title: "Image",
            type: "image",
            name: 'image',
        }
    ]
}