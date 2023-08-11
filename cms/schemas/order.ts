export default {
  name: 'order',
  type: 'document',
  title: 'Order',
  fields: [
    {name: 'userEmail', title: 'User Email', type: 'string'},
    {name: 'phoneNumber', title: 'Phone Number', type: 'string'},
    {name: 'shippingAddress', title: 'Shipping Address', type: 'string'},
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'product',
              title: 'Product',
              type: 'reference',
              to: [
                {
                  type: 'product',
                },
              ],
            },
            {
              name: 'quantity',
              title: 'Quantity',
              type: 'number',
            },
          ],
        },
      ],
    },
    {
      name: 'totalPrice',
      title: 'Total Price',
      type: 'number',
    },
    {
      name: 'orderStatus',
      title: 'Order Status',
      type: 'string',
      options: {
        list: [
          {
            title: 'Pending',
            value: 'pending',
          },
          {
            title: 'Processing',
            value: 'processing',
          },
          {
            title: 'Shipped',
            value: 'shipped',
          },
          {
            title: 'Delivered',
            value: 'delivered',
          },
          {
            title: 'Cancelled',
            value: 'cancelled',
          },
        ],
      },
      initialValue: 'pending',
    },
  ],
}
