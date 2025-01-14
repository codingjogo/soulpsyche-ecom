
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.0.0
 * Query Engine version: 5dbef10bdbfb579e07d35cc85fb1518d357cb99e
 */
Prisma.prismaVersion = {
  client: "6.0.0",
  engine: "5dbef10bdbfb579e07d35cc85fb1518d357cb99e"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  username: 'username',
  email: 'email',
  user_id: 'user_id',
  address: 'address'
};

exports.Prisma.ProductScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  name: 'name',
  slug: 'slug',
  price: 'price',
  sku: 'sku',
  category_id: 'category_id',
  description: 'description',
  isFeatured: 'isFeatured',
  image_url: 'image_url',
  status: 'status'
};

exports.Prisma.CategoryScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  name: 'name',
  slug: 'slug',
  variant_color_required: 'variant_color_required',
  variant_size_required: 'variant_size_required'
};

exports.Prisma.ProductVariantColorScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  color: 'color',
  images: 'images',
  product_id: 'product_id'
};

exports.Prisma.ProductVariantSizeScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  size: 'size',
  stock: 'stock',
  status: 'status',
  variant_color_id: 'variant_color_id'
};

exports.Prisma.WishlistScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  user_id: 'user_id',
  product_variant_size_id: 'product_variant_size_id',
  product_id: 'product_id'
};

exports.Prisma.AddressScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  house_number: 'house_number',
  address: 'address',
  barangay: 'barangay',
  municipality: 'municipality',
  province: 'province',
  zip_code: 'zip_code',
  complete_address: 'complete_address',
  additional_address: 'additional_address',
  user_id: 'user_id'
};

exports.Prisma.BagScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  quantity: 'quantity',
  user_id: 'user_id',
  product_id: 'product_id',
  product_variant_size_id: 'product_variant_size_id',
  product_variant_color_id: 'product_variant_color_id'
};

exports.Prisma.OrderScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  user_id: 'user_id',
  order_status: 'order_status',
  total_amount: 'total_amount',
  payment_status: 'payment_status'
};

exports.Prisma.OrderItemScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  order_id: 'order_id',
  product_id: 'product_id',
  product_variant_size_id: 'product_variant_size_id',
  quantity: 'quantity',
  price: 'price',
  subtotal: 'subtotal'
};

exports.Prisma.PaymentDetailScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  order_id: 'order_id',
  payment_method: 'payment_method',
  transaction_id: 'transaction_id',
  amount_paid: 'amount_paid',
  payment_status: 'payment_status'
};

exports.Prisma.PaymentMethodInfoScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  method_name: 'method_name',
  description: 'description',
  account_name: 'account_name',
  account_number: 'account_number',
  qr_code: 'qr_code',
  is_active: 'is_active'
};

exports.Prisma.ShippingAddressScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  address_id: 'address_id',
  user_id: 'user_id',
  full_name: 'full_name',
  email_address: 'email_address',
  contact_number: 'contact_number',
  is_default: 'is_default'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.PRODUCT_SIZES = exports.$Enums.PRODUCT_SIZES = {
  XS: 'XS',
  S: 'S',
  M: 'M',
  L: 'L',
  XL: 'XL',
  XXL: 'XXL'
};

exports.PRODUCT_STATUS = exports.$Enums.PRODUCT_STATUS = {
  Active: 'Active',
  Inactive: 'Inactive',
  Out_of_Stock: 'Out_of_Stock',
  Discontinued: 'Discontinued',
  Pending: 'Pending',
  Draft: 'Draft',
  Archived: 'Archived'
};

exports.ORDER_STATUS = exports.$Enums.ORDER_STATUS = {
  pending: 'pending',
  processing: 'processing',
  completed: 'completed',
  canceled: 'canceled'
};

exports.PAYMENT_STATUS = exports.$Enums.PAYMENT_STATUS = {
  paid: 'paid',
  unpaid: 'unpaid',
  failed: 'failed'
};

exports.PAYMENT_METHOD = exports.$Enums.PAYMENT_METHOD = {
  GCASH: 'GCASH',
  Maya: 'Maya',
  BPI: 'BPI',
  PayPal: 'PayPal',
  Other: 'Other'
};

exports.Prisma.ModelName = {
  User: 'User',
  Product: 'Product',
  Category: 'Category',
  ProductVariantColor: 'ProductVariantColor',
  ProductVariantSize: 'ProductVariantSize',
  Wishlist: 'Wishlist',
  Address: 'Address',
  Bag: 'Bag',
  Order: 'Order',
  OrderItem: 'OrderItem',
  PaymentDetail: 'PaymentDetail',
  PaymentMethodInfo: 'PaymentMethodInfo',
  ShippingAddress: 'ShippingAddress'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
